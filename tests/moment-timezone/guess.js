"use strict";

var tz = require("../../").tz;

var getTimezoneOffset = Date.prototype.getTimezoneOffset;

function mockTimezoneOffset (jan, jul) {
	Date.prototype.getTimezoneOffset = function () {
		var month = this.getMonth();
		if (month > 3 && month < 9) {
			return -jul;
		}
		return -jan;
	};
}

exports.guess = {
	tearDown : function (done) {
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
		done();
	},

	"different offsets should guess different timezones" : function (test) {
		mockTimezoneOffset(0, 60);
		tz._guess = null;
		var london = tz.guess();
		mockTimezoneOffset(-300, -240);
		tz._guess = null;
		var newYork = tz.guess();
		mockTimezoneOffset(-480, -420);
		tz._guess = null;
		var losAngeles = tz.guess();

		test.ok(london);
		test.ok(newYork);
		test.ok(losAngeles);
		test.notEqual(london, newYork);
		test.notEqual(london, losAngeles);
		test.done();
	},

	"ensure each zone is represented" : function (test) {
		var names = tz.names();
		var year = new Date().getFullYear();
		var jan = Date.UTC(year, 0, 1);
		var jul = Date.UTC(year, 6, 1);
		var zone, janOffset, julOffset;

		for (var i = 0; i < names.length; i++) {
			zone = tz.zone(names[i]);
			janOffset = zone.offset(jan);
			julOffset = zone.offset(jul);
			mockTimezoneOffset(-janOffset, -julOffset);
			tz._guess = null;
			test.ok(tz.guess(), "Should have a guess for " + zone.name + " (jan " + janOffset + " jul " + julOffset + ")");
		}
		test.done();
	}
};
