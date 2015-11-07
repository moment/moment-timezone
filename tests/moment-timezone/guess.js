"use strict";

var tz = require("../../").tz;

var getTimezoneOffset = Date.prototype.getTimezoneOffset;

function mockTimezoneOffset (zone) {
	Date.prototype.getTimezoneOffset = function () {
		return zone.offset(+this);
	};
}

exports.guess = {
	tearDown : function (done) {
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
		done();
	},

	"different offsets should guess different timezones" : function (test) {
		mockTimezoneOffset(tz.zone('Europe/London'));
		var london = tz.guess(true);
		mockTimezoneOffset(tz.zone('America/New_York'));
		var newYork = tz.guess(true);
		mockTimezoneOffset(tz.zone('America/Los_Angeles'));
		var losAngeles = tz.guess(true);

		test.ok(london);
		test.ok(newYork);
		test.ok(losAngeles);
		test.notEqual(london, newYork);
		test.notEqual(london, losAngeles);
		test.done();
	},

	"ensure each zone is represented" : function (test) {
		var names = tz.names();
		var zone, i;

		for (i = 0; i < names.length; i++) {
			zone = tz.zone(names[i]);
			mockTimezoneOffset(zone);
			test.ok(tz.guess(true), "Should have a guess for " + zone.name + ")");
		}
		test.done();
	},

	"ensure zones unique by offset are exact matches" : function (test) {
		var zone, i;
		var names = [
			"Africa/Cairo",
			"Africa/Casablanca",
			"Africa/Lagos",
			"Africa/Windhoek",
			"America/Adak",
			"America/Anchorage",
			"America/Asuncion",
			"America/Buenos_Aires",
			"America/Cancun",
			"America/Caracas",
			"America/Chicago",
			"America/Chihuahua",
			"America/Cuiaba",
			"America/Denver",
			"America/Fort_Nelson",
			"America/Godthab",
			"America/Grand_Turk",
			"America/Guatemala",
			"America/Halifax",
			"America/Havana",
			"America/Lima",
			"America/Los_Angeles",
			"America/Metlakatla",
			"America/Mexico_City",
			"America/Miquelon",
			"America/Montevideo",
			"America/New_York",
			"America/Noronha",
			"America/Phoenix",
			"America/Puerto_Rico",
			"America/Santa_Isabel",
			"America/Sao_Paulo",
			"America/Scoresbysund",
			"America/St_Johns",
			"Antarctica/Troll",
			"Asia/Amman",
			"Asia/Baku",
			"Asia/Beirut",
			"Asia/Damascus",
			"Asia/Dhaka",
			"Asia/Dubai",
			"Asia/Hebron",
			"Asia/Ho_Chi_Minh",
			"Asia/Hovd",
			"Asia/Jerusalem",
			"Asia/Kabul",
			"Asia/Karachi",
			"Asia/Kathmandu",
			"Asia/Kolkata",
			"Asia/Rangoon",
			"Asia/Shanghai",
			"Asia/Tehran",
			"Asia/Tokyo",
			"Asia/Ulaanbaatar",
			"Australia/Adelaide",
			"Australia/Brisbane",
			"Australia/Darwin",
			"Australia/Eucla",
			"Australia/Lord_Howe",
			"Australia/Sydney",
			"Europe/Berlin",
			"Europe/Chisinau",
			"Europe/Istanbul",
			"Europe/Kiev",
			"Europe/London",
			"Europe/Moscow",
			"Pacific/Apia",
			"Pacific/Auckland",
			"Pacific/Bougainville",
			"Pacific/Chatham",
			"Pacific/Fiji",
			"Pacific/Gambier",
			"Pacific/Honolulu",
			"Pacific/Kiritimati",
			"Pacific/Majuro",
			"Pacific/Marquesas",
			"Pacific/Norfolk",
			"Pacific/Pago_Pago",
			"Pacific/Tongatapu"
		];

		for (i = 0; i < names.length; i++) {
			zone = tz.zone(names[i]);
			mockTimezoneOffset(zone);
			test.equal(tz.guess(true), zone.name);
		}
		test.done();
	}
};
