"use strict";

<<<<<<< HEAD
var moment = require("../../index");

function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}

exports.countries = {
    "testing standard country functionality" : function (t) {

        var countryArray = ["US", "CA", "CN", "FR", "HU", "IR", "AU", "BR", "RU"],
            country = {};

        for (var x = 0; x < countryArray.length; x++) {
            country[countryArray[x]] = moment.tz([2012, 2, 11, 2, 0, 0], countryArray[x]);
            t.ok( country[countryArray[x]].constructor === Array, "Checking " + countryArray[x] + " timezones");
            for (var y = 0; y < country[countryArray[x]].length; y++) {
                t.ok( country[countryArray[x]][y].constructor.name == "Moment", "Checking " + countryArray[x] + " is only Moments");
            }
        }

        t.done();
    },

    "testing getCountry functionality" : function (t) {

        var US  = moment.tz.country("US"),
            CA  = moment.tz.country("CA"),
            CN  = moment.tz.country("CN"),
            FR  = moment.tz.country("FR"),
            HU  = moment.tz.country("HU"),
            IR  = moment.tz.country("IR"),
            AU  = moment.tz.country("AU"),
            BR  = moment.tz.country("BR"),
            RU  = moment.tz.country("RU");

        t.equal( US, moment.tz._countries["us"], "Checking US timezones");
        t.equal( CA, moment.tz._countries["ca"], "Checking CA timezones");
        t.equal( CN, moment.tz._countries["cn"], "Checking CN timezones");
        t.equal( FR, moment.tz._countries["fr"], "Checking FR timezones");
        t.equal( HU, moment.tz._countries["hu"], "Checking HU timezones");
        t.equal( IR, moment.tz._countries["ir"], "Checking IR timezones");
        t.equal( AU, moment.tz._countries["au"], "Checking AU timezones");
        t.equal( BR, moment.tz._countries["br"], "Checking BR timezones");
        t.equal( RU, moment.tz._countries["ru"], "Checking RU timezones");

        t.done();
    },

    "add country functionality" : function (t) {

        var country = "XX|Test_Country|SomeZone";

        moment.tz.addCountry(country);

        var test  = moment.tz.country("XX");
        var test_zone  = moment.tz.zone("SomeZone");

        t.deepEqual(test, { name: 'Test_Country', abbr: 'XX', zones: [ 'SomeZone' ] } , "New country not added");
        t.deepEqual(test_zone, { name: 'SomeZone', abbrs: [ 'TIM', 'TAM', 'IAM', 'TAM', 'TIM', 'TAM' ],
            untils: [ 60000000, 66000000, 74400000, 80400000, 88800000, Infinity ],
            offsets: [ 360.5, 300, 360, 300, 360.5, 300 ],
            population: 0,
            countries: [ 'xx' ] } ,
            "New country not added to relavent zones");

        t.done();
    },
    
    "add zone to country functionality" : function (t) {

        var country = "XY|Test_Country|AddingMany/Test1";
        moment.tz.addCountry(country);
        moment.tz.addZonetoCountry("SomeZone", "XY");
        var test_country  = moment.tz.country("XY");
        var test_zone  = moment.tz.zone("SomeZone");
        t.deepEqual(test_country, { name: 'Test_Country', abbr: 'XY', zones: [ 'AddingMany/Test1', 'somezone' ] } , "Cannot add country to zone");
        t.deepEqual(test_zone, { name: 'SomeZone',
            abbrs: [ 'TIM', 'TAM', 'IAM', 'TAM', 'TIM', 'TAM' ],
            untils: [ 60000000, 66000000, 74400000, 80400000, 88800000, Infinity ],
            offsets: [ 360.5, 300, 360, 300, 360.5, 300 ],
            population: 0,
            countries: [ 'xx', 'xy' ] } ,
            "Cannot add country to zone");

        // check does not accept duplicates

        moment.tz.addZonetoCountry("SomeZone", "XY");
        test_country  = moment.tz.country("XY");
        test_zone  = moment.tz.zone("SomeZone");
        t.deepEqual(test_country, { name: 'Test_Country', abbr: 'XY', zones: [ 'AddingMany/Test1', 'somezone' ] } , "Cannot add country to zone, suspected duplicate zone issue");
        t.deepEqual(test_zone, { name: 'SomeZone',
            abbrs: [ 'TIM', 'TAM', 'IAM', 'TAM', 'TIM', 'TAM' ],
            untils: [ 60000000, 66000000, 74400000, 80400000, 88800000, Infinity ],
            offsets: [ 360.5, 300, 360, 300, 360.5, 300 ],
            population: 0,
            countries: [ 'xx', 'xy' ] } ,
            "Cannot add country to zone, suspected duplicate country issue");

        t.done();
    },
    
    "remove zone from country functionality" : function (t) {

        moment.tz.removeZonefromCountry("SomeZone", "XY");
        var test_country  = moment.tz.country("XY");
        var test_zone  = moment.tz.zone("SomeZone");
        t.deepEqual(test_country, { name: 'Test_Country', abbr: 'XY', zones: [ 'AddingMany/Test1' ] } , "Cannot remove country from zone");
        t.deepEqual(test_zone, { name: 'SomeZone',
            abbrs: [ 'TIM', 'TAM', 'IAM', 'TAM', 'TIM', 'TAM' ],
            untils: [ 60000000, 66000000, 74400000, 80400000, 88800000, Infinity ],
            offsets: [ 360.5, 300, 360, 300, 360.5, 300 ],
            population: 0,
            countries: [ 'xx' ] } ,
            "Cannot remove country from zone");

        // check does not accept duplicates

        moment.tz.removeZonefromCountry("SomeZone", "XY");
        test_country  = moment.tz.country("XY");
        test_zone  = moment.tz.zone("SomeZone");
        t.deepEqual(test_country, { name: 'Test_Country', abbr: 'XY', zones: [ 'AddingMany/Test1' ] } , "Cannot remove country from zone");
        t.deepEqual(test_zone, { name: 'SomeZone',
            abbrs: [ 'TIM', 'TAM', 'IAM', 'TAM', 'TIM', 'TAM' ],
            untils: [ 60000000, 66000000, 74400000, 80400000, 88800000, Infinity ],
            offsets: [ 360.5, 300, 360, 300, 360.5, 300 ],
            population: 0,
            countries: [ 'xx' ] } ,
            "Cannot remove country from zone");

        t.done();
    }
=======
var moment = require("../../"),
	tz = moment.tz;

exports.countries = {
	getCountriesInZone : function (test) {
		var zone1 = tz.zone("Africa/Abidjan");
		var zone2 = tz.zone("Africa/Accra");

		test.deepEqual(zone1.countries, ['CI', 'BF', 'GM', 'GN', 'ML', 'MR', 'SH', 'SL', 'SN', 'ST', 'TG'], "A zones countries should be correct");
		test.deepEqual(zone2.countries, ['GH'], "A zones countries should be correct");

		test.done();
	},

	getZonesInCountry : function (test) {
		test.deepEqual(tz.zonesForCountry('US'), [ 'America/New_York', 'America/Detroit', 'America/Kentucky/Louisville', 'America/Kentucky/Monticello', 'America/Indiana/Indianapolis', 'America/Indiana/Vincennes', 'America/Indiana/Winamac', 'America/Indiana/Marengo', 'America/Indiana/Petersburg', 'America/Indiana/Vevay', 'America/Chicago', 'America/Indiana/Tell_City', 'America/Indiana/Knox', 'America/Menominee', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/North_Dakota/Beulah', 'America/Denver', 'America/Boise', 'America/Phoenix', 'America/Los_Angeles', 'America/Anchorage', 'America/Juneau', 'America/Sitka', 'America/Metlakatla', 'America/Yakutat', 'America/Nome', 'America/Adak', 'Pacific/Honolulu' ], "zonesForCountry returing incorrect array");
		test.deepEqual(tz.zonesForCountry('ZA'), [ 'Africa/Johannesburg' ], "zonesForCountry returing incorrect array");
		test.done();
	}
>>>>>>> origin/Country-Functionality
};
