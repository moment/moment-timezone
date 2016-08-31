"use strict";

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
    }

};
