"use strict";

var moment = require("../../index");

exports.issue119 = {
	setUp : function (done) {
		this.realNow = moment.now;
		this.realLocale = moment.locale();
		this.realDefaultZone = moment.defaultZone;
		done();
	},

	tearDown : function (done) {
		moment.now = this.realNow;
		moment.locale(this.realLocale);
		moment.defaultZone = this.realDefaultZone;
		done();
	},

	"time-only string uses the current date in a zone ahead of UTC" : function (t) {
		moment.now = function () {
			return Date.parse("2021-03-27T15:50:00Z");
		};

		var time = moment.tz("Australia/Sydney");
		var beforeTime = moment.tz("000500", "HHmmss", "Australia/Sydney");
		var afterTime = moment.tz("200000", "HHmmss", "Australia/Sydney");

		t.equal(beforeTime.format(), "2021-03-28T00:05:00+11:00");
		t.equal(afterTime.format(), "2021-03-28T20:00:00+11:00");
		t.ok(time.isBetween(beforeTime, afterTime));
		t.done();
	},

	"time-only string uses the current date in a zone behind UTC" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};

		var actual = moment.tz("01:23:56", "HH:mm:ss", "America/New_York");

		t.equal(actual.format(), "2025-01-01T01:23:56-05:00");
		t.done();
	},

	"partial date strings retain Moment defaulting rules" : function (t) {
		moment.now = function () {
			return Date.parse("2025-03-01T01:00:00Z");
		};

		var dateOnly = moment.tz("15 01:23", "D HH:mm", "America/New_York");
		var yearOnly = moment.tz("2012 01:23", "YYYY HH:mm", "America/New_York");

		t.equal(dateOnly.format(), "2025-02-15T01:23:00-05:00");
		t.equal(yearOnly.format(), "2012-01-01T01:23:00-05:00");

		moment.now = function () {
			return Date.parse("2024-12-31T20:00:00Z");
		};

		var monthOnly = moment.tz("06 01:23", "MM HH:mm", "Asia/Tokyo");

		t.equal(monthOnly.format(), "2025-06-01T01:23:00+09:00");
		t.done();
	},

	"string parsing retains formats, strictness, locale, and metadata" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};
		moment.defineLocale("issue-119", { parentLocale : "en" });
		moment.locale("en");

		var input = "01:23",
			formats = ["h:mm A", "HH:mm"],
			actual = moment.tz(input, formats, "issue-119", true, "America/New_York"),
			invalid = moment.tz("25:00", "HH:mm", true, "America/New_York");

		t.equal(actual.format(), "2025-01-01T01:23:00-05:00");
		t.strictEqual(actual.creationData().input, input);
		t.strictEqual(actual.creationData().format, formats[1]);
		t.equal(actual.locale(), "issue-119");
		t.ok(actual.creationData().isUTC);
		t.ok(actual.creationData().strict);
		t.ok(!invalid.isValid(), "rejects overflowing fields");
		moment.defineLocale("issue-119", null);
		t.done();
	},

	"complete calendar strings are parsed once" : function (t) {
		var preparses = 0;
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};
		moment.defineLocale("issue-119-preparse", {
			parentLocale : "en",
			preparse : function (input) {
				preparses++;
				return input;
			}
		});

		var actual = moment.tz("2020-06-01 01:23", "YYYY-MM-DD HH:mm", "issue-119-preparse", "America/New_York");

		t.equal(actual.format(), "2020-06-01T01:23:00-04:00");
		t.equal(preparses, 1, "does not reparse when no current date fields are needed");
		moment.defineLocale("issue-119-preparse", null);
		t.done();
	},

	"time-only strings are parsed once" : function (t) {
		var preparses = 0;
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};
		moment.defineLocale("issue-119-time-preparse", {
			parentLocale : "en",
			preparse : function (input) {
				preparses++;
				return input;
			}
		});

		var actual = moment.tz("01:23", "HH:mm", "issue-119-time-preparse", "America/New_York");

		t.equal(actual.format(), "2025-01-01T01:23:00-05:00");
		t.equal(preparses, 1, "delegates to Moment's parser once");
		moment.locale("en");
		moment.defineLocale("issue-119-time-preparse", null);
		t.done();
	},

	"locale week defaults use the target zone independently of the host zone" : function (t) {
		var savedUTC = moment.tz._zones.etc_utc,
			savedTZ = process.env.TZ,
			actual;
		moment.now = function () {
			return Date.parse("2025-01-05T04:00:00Z");
		};
		delete moment.tz._zones.etc_utc;
		process.env.TZ = "Asia/Tokyo";
		try {
			actual = moment.tz("2025-6 12:00", "YYYY-e HH:mm", "America/New_York");
		} finally {
			moment.tz._zones.etc_utc = savedUTC;
			if (savedTZ === undefined) {
				delete process.env.TZ;
			} else {
				process.env.TZ = savedTZ;
			}
		}

		t.equal(actual.format(), "2025-01-04T12:00:00-05:00");
		t.done();
	},

	"absolute string inputs retain their instant and UTC date defaults" : function (t) {
		moment.now = function () {
			return Date.parse("2021-03-27T15:50:00Z");
		};

		var offset = moment.tz("00:05 -08:00", "HH:mm Z", "Australia/Sydney");
		var unixSeconds = moment.tz("1616860200", "X", "Australia/Sydney");
		var unixMilliseconds = moment.tz("1616860200000", "x", "Australia/Sydney");

		t.equal(offset.format(), "2021-03-27T19:05:00+11:00");
		t.equal(unixSeconds.valueOf(), 1616860200000);
		t.equal(unixMilliseconds.valueOf(), 1616860200000);
		t.done();
	},

	"explicit-offset week strings retain UTC defaults" : function (t) {
		var savedTZ = process.env.TZ,
			actual,
			expected;
		moment.now = function () {
			return Date.parse("2025-01-05T04:00:00Z");
		};
		process.env.TZ = "UTC";
		try {
			actual = moment.tz("2025-6 12:00 -08:00", "YYYY-e HH:mm Z", "America/New_York");
			expected = moment.utc("2025-6 12:00 -08:00", "YYYY-e HH:mm Z").tz("America/New_York");
		} finally {
			if (savedTZ === undefined) {
				delete process.env.TZ;
			} else {
				process.env.TZ = savedTZ;
			}
		}

		t.equal(actual.valueOf(), expected.valueOf());
		t.done();
	},

	"time-only string reads now once" : function (t) {
		var calls = 0,
			receiver;
		moment.now = function () {
			calls++;
			receiver = this;
			return Date.parse("2025-01-02T01:00:00Z");
		};

		moment.tz("01:23", "HH:mm", "America/New_York");

		t.equal(calls, 1);
		t.strictEqual(receiver, moment, "calls the hook with Moment as its receiver");
		t.done();
	},

	"format arrays read now once" : function (t) {
		var calls = 0;
		moment.now = function () {
			calls++;
			return Date.parse("2025-01-02T01:00:00Z");
		};

		var actual = moment.tz("01:23", ["h:mm A", "HH:mm"], "America/New_York");

		t.equal(actual.format(), "2025-01-01T01:23:00-05:00");
		t.equal(calls, 1, "uses one coherent current instant for every candidate");
		t.done();
	},

	"zone-only overload retains current-instant semantics" : function (t) {
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};

		var actual = moment.tz("America/New_York");

		t.equal(actual.valueOf(), Date.parse("2025-01-02T01:00:00Z"));
		t.equal(actual.format(), "2025-01-01T20:00:00-05:00");
		t.done();
	},

	"restores now when string parsing throws" : function (t) {
		var expected = new Error("expected"),
			defaultZone = moment.tz.zone("America/Chicago"),
			fakeNow = function () {
				return Date.parse("2025-01-02T01:00:00Z");
			};
		moment.now = fakeNow;
		moment.defaultZone = defaultZone;
		moment.defineLocale("issue-119-throw", {
			parentLocale : "en",
			preparse : function () {
				throw expected;
			}
		});

		t.throws(function () {
			moment.tz("01:23", "HH:mm", "issue-119-throw", "America/New_York");
		}, function (error) {
			return error === expected;
		});
		t.strictEqual(moment.now, fakeNow, "keeps the configured now hook");
		t.strictEqual(moment.defaultZone, defaultZone, "keeps the configured default zone");
		moment.locale("en");
		moment.defineLocale("issue-119-throw", null);
		t.done();
	}
};
