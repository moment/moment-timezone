"use strict";

var tz = require("../../").tz;

var getTimezoneOffset = Date.prototype.getTimezoneOffset;
var toTimeString = Date.prototype.toTimeString;
var parent = (typeof window !== 'undefined' && window) || (typeof global !== 'undefined' && global);
var oldIntl = parent.Intl;

function mockTimezoneOffset (zone, format) {
	Date.prototype.getTimezoneOffset = function () {
		return zone.offset(+this);
	};
	Date.prototype.toTimeString = function () {
		return tz(+this, zone.name).format(format || 'HH:mm:ss [GMT]ZZ');
	};
}

function mockIntlTimeZone (name) {
	parent.Intl = {
		DateTimeFormat: function () {
			return {
				resolvedOptions: function () {
					return {
						timeZone: name
					};
				}
			};
		}
	};
}

exports.guess = {
	setUp : function (done) {
		parent.Intl = undefined;
		done();
	},

	tearDown : function (done) {
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
		Date.prototype.toTimeString = toTimeString;
		parent.Intl = oldIntl;
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

	"handles uncommon Date#toTimeString formats" : function (test) {
		test.doesNotThrow(function () {
			mockTimezoneOffset(tz.zone('Europe/London'), 'HH:mm:ss (123)');
			tz.guess(true);
		});
		test.doesNotThrow(function () {
			mockTimezoneOffset(tz.zone('Europe/London'), 'HH:mm:ss');
			tz.guess(true);
		});
		test.doesNotThrow(function () {
			mockTimezoneOffset(tz.zone('Europe/London'), 'HH:mm:ss (台北標準時間)');
			tz.guess(true);
		});
		test.done();
	},

	"When Intl is available, it is used" : function (test) {
		mockIntlTimeZone('Europe/London');
		test.equal(tz.guess(true), 'Europe/London');

		mockIntlTimeZone('America/New_York');
		test.equal(tz.guess(true), 'America/New_York');

		mockIntlTimeZone('America/Some_Missing_Zone');
		mockTimezoneOffset(tz.zone('America/Los_Angeles'));
		test.equal(tz.guess(true), 'America/Los_Angeles');

		test.done();
	},

	"When Intl is available, but timeZone is undefined, should return a guess without logging an error" : function (test) {
		var oldError = console.error;
		var errors = '';
		console.error = function (message) {
			errors += message;
		};
		
		mockIntlTimeZone(undefined);
		mockTimezoneOffset(tz.zone('Europe/London'));
		test.equal(tz.guess(true), 'Europe/London');
		test.equal(errors, '');

		console.error = oldError;
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
	}
};
