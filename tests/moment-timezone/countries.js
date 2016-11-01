"use strict";

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
};
