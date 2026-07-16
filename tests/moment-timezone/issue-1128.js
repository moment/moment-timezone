"use strict";

var moment = require("../../index");

exports.issue1128 = {
	setUp : function (done) {
		this.realNow = moment.now;
		done();
	},

	tearDown : function (done) {
		moment.now = this.realNow;
		done();
	},

	"object with only time fields should use the current date in the target zone, not UTC" : function (t) {
		// "Now" is 2025-01-02T01:00:00Z: already Jan 2 in UTC, but still
		// Jan 1 (20:00 EST) in America/New_York.
		moment.now = function () {
			return new Date("2025-01-02T01:00:00Z").getTime();
		};

		var timeObject = { hour : 1, minutes : 23, seconds : 56 };
		var actual = moment.tz(timeObject, "America/New_York").format();

		t.equal(actual, "2025-01-01T01:23:56-05:00",
			"Should use the current date in America/New_York (Jan 1), not the current UTC date (Jan 2)");

		t.done();
	}
};
