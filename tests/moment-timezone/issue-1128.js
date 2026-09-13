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

	"time-only object uses the current date in a zone behind UTC" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};

		var actual = moment.tz({ hour : 1, minutes : 23, seconds : 56 }, "America/New_York");

		t.equal(actual.format(), "2025-01-01T01:23:56-05:00");
		t.done();
	},

	"time-only object uses the current date in a zone ahead of UTC" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-01T20:00:00Z");
		};

		var actual = moment.tz({ hour : 1, minute : 23, second : 56 }, "Asia/Tokyo");

		t.equal(actual.format(), "2025-01-02T01:23:56+09:00");
		t.done();
	},

	"time-only object defaults omitted time fields to zero" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T12:34:56.789Z");
		};

		var actual = moment.tz({ hour : 1 }, "America/New_York");

		t.equal(actual.format("YYYY-MM-DDTHH:mm:ss.SSSZ"), "2025-01-02T01:00:00.000-05:00");
		t.done();
	},

	"time-only object retains Moment parsing semantics" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};

		var input = { h : "01", m : "23", s : "56" };
		var actual = moment.tz(input, "America/New_York");
		var invalid = moment.tz({ hour : 24, minute : 1 }, "America/New_York");

		t.equal(actual.format(), "2025-01-01T01:23:56-05:00", "normalizes aliases and values");
		t.strictEqual(actual.creationData().input, input, "retains the original input");
		t.ok(!invalid.isValid(), "rejects overflowing fields");
		t.done();
	},

	"time-only object reads now once" : function (t) {
		var calls = 0,
			receiver;
		moment.now = function () {
			calls++;
			receiver = this;
			return Date.parse("2025-01-02T01:00:00Z");
		};

		moment.tz({ hour : 1 }, "America/New_York");

		t.equal(calls, 1);
		t.strictEqual(receiver, moment, "calls the hook with Moment as its receiver");
		t.done();
	},

	"empty object retains current-instant semantics" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:23:45Z");
		};

		var actual = moment.tz({}, "America/New_York");

		t.equal(actual.format(), "2025-01-01T20:23:45-05:00");
		t.done();
	},

	"date-only fields use the current year and month in the target zone" : function (t) {
		moment.now = function () {
			return Date.parse("2025-03-01T01:00:00Z");
		};

		var actual = moment.tz({ date : 15, hour : 1 }, "America/New_York");
		var dayAlias = moment.tz({ day : 15, hour : 1 }, "America/New_York");

		t.equal(actual.format(), "2025-02-15T01:00:00-05:00");
		t.equal(dayAlias.format(), actual.format(), "treats day as day of month during object parsing");
		t.done();
	},

	"month-only fields use the current year in the target zone" : function (t) {
		moment.now = function () {
			return Date.parse("2024-12-31T20:00:00Z");
		};

		var actual = moment.tz({ month : 5, hour : 1 }, "Asia/Tokyo");

		t.equal(actual.format(), "2025-06-01T01:00:00+09:00");
		t.done();
	},

	"year fields retain Moment's January 1 default" : function (t) {
		moment.now = function () {
			return Date.parse("2025-03-01T01:00:00Z");
		};

		var actual = moment.tz({ year : 2012, hour : 1 }, "America/New_York");

		t.equal(actual.format(), "2012-01-01T01:00:00-05:00");
		t.done();
	},

	"time-only object retains the requested locale" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};
		moment.defineLocale("issue-1128", { parentLocale : "en" });
		moment.locale("en");

		var actual = moment.tz({ hour : 1 }, undefined, "issue-1128", "America/New_York");

		t.equal(actual.locale(), "issue-1128");
		moment.defineLocale("issue-1128", null);
		t.done();
	},

	"restores now when object parsing throws" : function (t) {
		var expected = new Error("expected"),
			input = {},
			fakeNow = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};
		moment.now = fakeNow;
		Object.defineProperty(input, "hour", {
			enumerable : true,
			get : function () {
				throw expected;
			}
		});

		t.throws(function () {
			moment.tz(input, "America/New_York");
		}, function (error) {
			return error === expected;
		});
		t.strictEqual(moment.now, fakeNow, "keeps the configured now hook");
		t.done();
	}
};
