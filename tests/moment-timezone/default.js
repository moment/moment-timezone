"use strict";

var moment = require("../../");

exports.default = {
	defaultZone : function (t) {
		t.equal(
			moment.defaultZone,
			null,
			'initial default zone should be null'
		);
		t.equal(
			moment.tz.setDefault('America/New_York').defaultZone.name,
			'America/New_York',
			'calling moment.tz.setDefault with a valid timezone should expose it via defaultZone'
		);
		t.equal(
			moment.tz.setDefault().defaultZone,
			null,
			'calling moment.tz.setDefault with a falsey argument should unset defaultZone'
		);
		t.done();
	},
	normal: function (t) {
		moment.tz.setDefault('America/New_York');
		var m = moment();
		t.equal(
			m._z.name,
			'America/New_York',
			'creating moments should set their default timezone if it is set'
		);

		moment.tz.setDefault();
		var m2 = moment();
		moment.tz.setDefault('America/New_York');
		m2.millisecond(0);
		t.equal(
			m2._z,
			null,
			'calling updateOffset on moments created before setting a default timezone should not affect their timezone'
		);
		moment.tz.setDefault();
		t.done();
	},
	utc : function (t) {
		moment.tz.setDefault('America/New_York');
		t.equal(
			moment.utc().format('ZZ'),
			'+0000',
			'creating moments in UTC mode should ignore default timezone'
		);
		t.notEqual(
			moment().format('ZZ'),
			'+0000',
			'using UTC mode should not affect normal moment creation'
		);

		var utc_moment = moment.utc(),
		    normal_moment = moment(),
		    normal_moment_offset = normal_moment.format('ZZ');
		moment.tz.setDefault();
		utc_moment.millisecond(0);
		normal_moment.millisecond(0);
		t.equal(
			utc_moment.format('ZZ'),
			'+0000',
			'resetting default timezone should not affect existing moments created in UTC mode'
		);
		t.equal(
			normal_moment.format('ZZ'),
			normal_moment_offset,
			'resetting default timezone should not affect existing moments'
		);
		t.done();
	},
	valueOf : function (t) {
		moment.tz.setDefault();
		t.ok(
			Number.isNaN(moment('2023/10/06', ['H', 'HH', 'HH:mm'], true).valueOf()),
			'invalid moment should return NaN for .valueOf()'
		);
		// https://github.com/moment/moment-timezone/issues/1075
		moment.tz.setDefault('America/New_York');
		t.ok(
			Number.isNaN(moment('2023/10/06', ['H', 'HH', 'HH:mm'], true).valueOf()),
			'invalid moment with default zone should return NaN for .valueOf()'
		);
		t.done();
	},
	"omitted date fields use the default zone" : function (t) {
		var savedNow = moment.now,
			savedTZ = process.env.TZ,
			explicitOffset,
			preparses = 0;
		if (!moment._getDefaultDateParts) {
			t.ok(true, "older Moment versions retain their existing default-date behavior");
			t.done();
			return;
		}

		process.env.TZ = "UTC";
		moment.now = function () {
			return Date.parse("2025-01-02T01:00:00Z");
		};
		moment.tz.setDefault();
		explicitOffset = moment("01:23 -08:00", "HH:mm Z").valueOf();
		moment.tz.setDefault("America/New_York");
		moment.defineLocale("default-date-parts", {
			parentLocale : "en",
			preparse : function (input) {
				preparses++;
				return input;
			}
		});
		moment.locale("en");
		try {
			t.equal(
				moment("01:23", "HH:mm").format(),
				"2025-01-01T01:23:00-05:00",
				"time-only strings should use the current date in the default zone"
			);
			t.equal(
				moment({ hour : 1, minute : 23 }).format(),
				"2025-01-01T01:23:00-05:00",
				"time-only objects should use the current date in the default zone"
			);
			t.equal(
				moment().valueOf(),
				Date.parse("2025-01-02T01:00:00Z"),
				"no-input construction should retain current-instant semantics"
			);
			t.equal(
				moment.utc("01:23", "HH:mm").format(),
				"2025-01-02T01:23:00Z",
				"UTC construction should retain UTC defaults"
			);

			moment.now = function () {
				return Date.parse("2025-01-05T04:00:00Z");
			};
			t.equal(
				moment.utc("1", "e").format("YYYY-MM-DD"),
				"2025-01-06",
				"UTC locale week defaults should ignore the default zone"
			);
			t.equal(
				moment("1 -08:00", "e Z").utc().format("YYYY-MM-DD"),
				"2025-01-06",
				"explicit-offset week defaults should ignore the default zone"
			);

			moment.now = function () {
				return Date.parse("2024-12-30T01:00:00Z");
			};
			t.equal(
				moment.utc("1", "E").format("YYYY-MM-DD"),
				"2024-12-30",
				"UTC ISO week-year defaults should ignore the default zone"
			);

			moment.now = function () {
				return Date.parse("2025-01-02T01:00:00Z");
			};
			t.equal(
				moment("01:23 -08:00", "HH:mm Z").valueOf(),
				explicitOffset,
				"explicit offsets should retain Moment's existing defaults"
			);
			t.equal(
				moment("01:23", "HH:mm", "default-date-parts").format(),
				"2025-01-01T01:23:00-05:00",
				"localized strings should use the default zone date"
			);
			t.equal(preparses, 1, "localized strings should be parsed once");

			moment.now = function () {
				return Date.parse("2025-01-01T01:00:00Z");
			};
			t.ok(
				moment("366 01", "DDD HH", true).isValid(),
				"validation should use the target zone's leap year"
			);

			moment.now = function () {
				return Date.parse("2025-03-01T01:00:00Z");
			};
			t.ok(
				!moment({ date : 29, hour : 1 }).isValid(),
				"overflow validation should use the target zone's current month"
			);
		} finally {
			moment.now = savedNow;
			if (savedTZ === undefined) {
				delete process.env.TZ;
			} else {
				process.env.TZ = savedTZ;
			}
			moment.tz.setDefault();
			moment.locale("en");
			moment.defineLocale("default-date-parts", null);
		}
		t.done();
	}
};
