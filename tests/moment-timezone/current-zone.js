"use strict";

var tz = require("../../").tz;

var getTimezoneOffset = Date.prototype.getTimezoneOffset;

function mockTimezoneOffset (jan, jun) {
	Date.prototype.getTimezoneOffset = function () {
		var month = this.getMonth();
		if (month > 3 && month < 9) {
			return jun;
		}
		return jan;
	};
}

exports.currentZone = {
	setUp : function (done) {
		tz.currentZones.length = 0;
		done();
	},

	tearDown : function (done) {
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
		done();
	},

	// These tests were built with 2015b data.
	// If they fail when updating the data to a newer version,
	// they should be updated to match the current data.
	fromOffsetPacific : function (test) {
		mockTimezoneOffset(480, 420);

		var current = tz.currentZone();

		test.deepEqual(tz.currentZones, [
			'America/Dawson',
			'America/Ensenada',
			'America/Los_Angeles',
			'America/Santa_Isabel',
			'America/Tijuana',
			'America/Vancouver',
			'America/Whitehorse',
			'Canada/Pacific',
			'Canada/Yukon',
			'Mexico/BajaNorte',
			'PST8PDT',
			'US/Pacific',
			'US/Pacific-New'
		]);
		test.equal(current, 'America/Dawson');

		test.done();
	},

	fromOffsetAtlantic : function (test) {
		mockTimezoneOffset(300, 240);

		var current = tz.currentZone();

		test.deepEqual(tz.currentZones, [
			'America/Detroit',
			'America/Fort_Wayne',
			'America/Grand_Turk',
			'America/Havana',
			'America/Indiana/Indianapolis',
			'America/Indiana/Marengo',
			'America/Indiana/Petersburg',
			'America/Indiana/Vevay',
			'America/Indiana/Vincennes',
			'America/Indiana/Winamac',
			'America/Indianapolis',
			'America/Iqaluit',
			'America/Kentucky/Louisville',
			'America/Kentucky/Monticello',
			'America/Louisville',
			'America/Montreal',
			'America/Nassau',
			'America/New_York',
			'America/Nipigon',
			'America/Pangnirtung',
			'America/Port-au-Prince',
			'America/Thunder_Bay',
			'America/Toronto',
			'Canada/Eastern',
			'Cuba',
			'EST5EDT',
			'US/East-Indiana',
			'US/Eastern',
			'US/Michigan'
		]);
		test.equal(current, 'America/Detroit');

		test.done();
	}
};
