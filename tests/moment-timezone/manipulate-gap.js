"use strict";

var moment = require("../../"),
	originalMoveInvalidForward,
	originalMoveAmbiguousForward;

function expect(t, actual, expected, message) {
	t.equal(actual.format(), expected, message);
	t.equal(
		actual.utcOffset(),
		-moment.tz.zone(actual.tz()).utcOffset(actual.valueOf()),
		message + " with a consistent offset"
	);
}

exports["manipulate across offset transitions"] = {
	setUp : function (done) {
		originalMoveInvalidForward = moment.tz.moveInvalidForward;
		originalMoveAmbiguousForward = moment.tz.moveAmbiguousForward;
		done();
	},

	tearDown : function (done) {
		moment.tz.moveInvalidForward = originalMoveInvalidForward;
		moment.tz.moveAmbiguousForward = originalMoveAmbiguousForward;
		moment.tz.setDefault(null);
		done();
	},

	"add and subtract days into forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-03-09 02:30", "America/New_York").add(1, "day"),
			"2024-03-10T03:30:00-04:00",
			"New York should move a nonexistent time forward by one hour"
		);
		expect(t,
			moment.tz("2024-03-11 02:30", "America/New_York").subtract(1, "day"),
			"2024-03-10T03:30:00-04:00",
			"New York subtraction should move a nonexistent time forward"
		);
		expect(t,
			moment.tz("2018-08-11 00:00", "America/Santiago").add(1, "day"),
			"2018-08-12T01:00:00-03:00",
			"Santiago should move a nonexistent midnight forward"
		);
		expect(t,
			moment.tz("2018-08-13 00:00", "America/Santiago").subtract(1, "day"),
			"2018-08-12T01:00:00-03:00",
			"Santiago subtraction should move a nonexistent midnight forward"
		);
		expect(t,
			moment.tz("2024-10-05 02:15", "Australia/Lord_Howe").add(1, "day"),
			"2024-10-06T02:45:00+11:00",
			"Lord Howe should move a nonexistent time forward by 30 minutes"
		);
		expect(t,
			moment.tz("2024-10-07 02:15", "Australia/Lord_Howe").subtract(1, "day"),
			"2024-10-06T02:45:00+11:00",
			"Lord Howe subtraction should move a nonexistent time forward"
		);
		expect(t,
			moment.tz("2021-03-25 00:00", "Asia/Amman").add(1, "day"),
			"2021-03-26T01:00:00+03:00",
			"Amman should move a nonexistent midnight forward"
		);
		expect(t,
			moment.tz("2021-03-27 00:00", "Asia/Amman").subtract(1, "day"),
			"2021-03-26T01:00:00+03:00",
			"Amman subtraction should move a nonexistent midnight forward"
		);
		t.done();
	},

	"calendar arithmetic crossing but not landing in forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-03-09 02:30", "America/New_York").add(2, "days"),
			"2024-03-11T02:30:00-04:00",
			"New York should preserve the time when crossing a gap"
		);
		expect(t,
			moment.tz("2018-08-11 00:00", "America/Santiago").add(2, "days"),
			"2018-08-13T00:00:00-03:00",
			"Santiago should preserve the time when crossing a gap"
		);
		expect(t,
			moment.tz("2024-10-05 02:15", "Australia/Lord_Howe").add(2, "days"),
			"2024-10-07T02:15:00+11:00",
			"Lord Howe should preserve the time when crossing a gap"
		);
		expect(t,
			moment.tz("2021-03-25 00:00", "Asia/Amman").add(2, "days"),
			"2021-03-27T00:00:00+03:00",
			"Amman should preserve the time when crossing a gap"
		);
		t.done();
	},

	"add and subtract months into forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-02-10 02:30", "America/New_York").add(1, "month"),
			"2024-03-10T03:30:00-04:00",
			"New York month addition should resolve the gap"
		);
		expect(t,
			moment.tz("2024-04-10 02:30", "America/New_York").subtract(1, "month"),
			"2024-03-10T03:30:00-04:00",
			"New York month subtraction should resolve the gap"
		);
		expect(t,
			moment.tz("2018-07-12 00:00", "America/Santiago").add(1, "month"),
			"2018-08-12T01:00:00-03:00",
			"Santiago month addition should resolve the midnight gap"
		);
		expect(t,
			moment.tz("2018-09-12 00:00", "America/Santiago").subtract(1, "month"),
			"2018-08-12T01:00:00-03:00",
			"Santiago month subtraction should resolve the midnight gap"
		);
		expect(t,
			moment.tz("2024-09-06 02:15", "Australia/Lord_Howe").add(1, "month"),
			"2024-10-06T02:45:00+11:00",
			"Lord Howe month addition should resolve the 30-minute gap"
		);
		expect(t,
			moment.tz("2024-11-06 02:15", "Australia/Lord_Howe").subtract(1, "month"),
			"2024-10-06T02:45:00+11:00",
			"Lord Howe month subtraction should resolve the 30-minute gap"
		);
		expect(t,
			moment.tz("2021-02-26 00:00", "Asia/Amman").add(1, "month"),
			"2021-03-26T01:00:00+03:00",
			"Amman month addition should resolve the midnight gap"
		);
		expect(t,
			moment.tz("2021-04-26 00:00", "Asia/Amman").subtract(1, "month"),
			"2021-03-26T01:00:00+03:00",
			"Amman month subtraction should resolve the midnight gap"
		);
		t.done();
	},

	"other calendar units into forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-03-03 02:30", "America/New_York").add(1, "week"),
			"2024-03-10T03:30:00-04:00",
			"week addition should resolve the gap"
		);
		expect(t,
			moment.tz("2024-03-17 02:30", "America/New_York").subtract(1, "week"),
			"2024-03-10T03:30:00-04:00",
			"week subtraction should resolve the gap"
		);
		expect(t,
			moment.tz("2023-12-10 02:30", "America/New_York").add(1, "quarter"),
			"2024-03-10T03:30:00-04:00",
			"quarter addition should resolve the gap"
		);
		expect(t,
			moment.tz("2024-06-10 02:30", "America/New_York").subtract(1, "quarter"),
			"2024-03-10T03:30:00-04:00",
			"quarter subtraction should resolve the gap"
		);
		expect(t,
			moment.tz("2023-03-10 02:30", "America/New_York").add(1, "year"),
			"2024-03-10T03:30:00-04:00",
			"year addition should resolve the gap"
		);
		expect(t,
			moment.tz("2025-03-10 02:30", "America/New_York").subtract(1, "year"),
			"2024-03-10T03:30:00-04:00",
			"year subtraction should resolve the gap"
		);
		t.done();
	},

	"timeline arithmetic after resolving forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-03-09 02:30", "America/New_York").add(1, "day").add(1, "hour"),
			"2024-03-10T04:30:00-04:00",
			"New York should continue from the resolved time"
		);
		expect(t,
			moment.tz("2018-08-11 00:00", "America/Santiago").add(1, "day").add(1, "hour"),
			"2018-08-12T02:00:00-03:00",
			"Santiago should continue from the resolved time"
		);
		expect(t,
			moment.tz("2024-10-05 02:15", "Australia/Lord_Howe").add(1, "day").add(30, "minutes"),
			"2024-10-06T03:15:00+11:00",
			"Lord Howe should continue from the resolved time"
		);
		expect(t,
			moment.tz("2021-03-25 00:00", "Asia/Amman").add(1, "day").add(1, "hour"),
			"2021-03-26T02:00:00+03:00",
			"Amman should continue from the resolved time"
		);
		t.done();
	},

	"timeline arithmetic across forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-03-10 01:30", "America/New_York").add(1, "hour"),
			"2024-03-10T03:30:00-04:00",
			"New York hours should advance on the timeline"
		);
		expect(t,
			moment.tz("2018-08-11 23:30", "America/Santiago").add(1, "hour"),
			"2018-08-12T01:30:00-03:00",
			"Santiago hours should advance on the timeline"
		);
		expect(t,
			moment.tz("2024-10-06 01:45", "Australia/Lord_Howe").add(30, "minutes"),
			"2024-10-06T02:45:00+11:00",
			"Lord Howe minutes should advance on the timeline"
		);
		expect(t,
			moment.tz("2021-03-25 23:30", "Asia/Amman").add(1, "hour"),
			"2021-03-26T01:30:00+03:00",
			"Amman hours should advance on the timeline"
		);
		t.done();
	},

	"move invalid calendar targets backward" : function (t) {
		moment.tz.moveInvalidForward = false;

		expect(t,
			moment.tz("2024-03-09 02:30", "America/New_York").add(1, "day"),
			"2024-03-10T01:30:00-05:00",
			"New York should honor moveInvalidForward"
		);
		expect(t,
			moment.tz("2018-08-11 00:00", "America/Santiago").add(1, "day"),
			"2018-08-11T23:00:00-04:00",
			"Santiago should honor moveInvalidForward"
		);
		expect(t,
			moment.tz("2024-10-05 02:15", "Australia/Lord_Howe").add(1, "day"),
			"2024-10-06T01:45:00+10:30",
			"Lord Howe should honor moveInvalidForward"
		);
		expect(t,
			moment.tz("2021-03-25 00:00", "Asia/Amman").add(1, "day"),
			"2021-03-25T23:00:00+02:00",
			"Amman should honor moveInvalidForward"
		);
		expect(t,
			moment.tz("2024-03-11 02:30", "America/New_York").subtract(1, "day"),
			"2024-03-10T01:30:00-05:00",
			"New York subtraction should honor moveInvalidForward"
		);
		expect(t,
			moment.tz("2024-10-07 02:15", "Australia/Lord_Howe").subtract(1, "day"),
			"2024-10-06T01:45:00+10:30",
			"Lord Howe subtraction should honor moveInvalidForward"
		);
		t.done();
	},

	"add and subtract days into backward overlaps" : function (t) {
		expect(t,
			moment.tz("2024-11-02 01:30", "America/New_York").add(1, "day"),
			"2024-11-03T01:30:00-04:00",
			"New York addition should retain the first occurrence"
		);
		expect(t,
			moment.tz("2024-11-04 01:30", "America/New_York").subtract(1, "day"),
			"2024-11-03T01:30:00-05:00",
			"New York subtraction should retain the second occurrence"
		);
		expect(t,
			moment.tz("2018-05-11 23:30", "America/Santiago").add(1, "day"),
			"2018-05-12T23:30:00-03:00",
			"Santiago addition should retain the first occurrence"
		);
		expect(t,
			moment.tz("2018-05-13 23:30", "America/Santiago").subtract(1, "day"),
			"2018-05-12T23:30:00-04:00",
			"Santiago subtraction should retain the second occurrence"
		);
		expect(t,
			moment.tz("2024-04-06 01:45", "Australia/Lord_Howe").add(1, "day"),
			"2024-04-07T01:45:00+11:00",
			"Lord Howe addition should retain the first occurrence"
		);
		expect(t,
			moment.tz("2024-04-08 01:45", "Australia/Lord_Howe").subtract(1, "day"),
			"2024-04-07T01:45:00+10:30",
			"Lord Howe subtraction should retain the second occurrence"
		);
		expect(t,
			moment.tz("2021-10-28 00:30", "Asia/Amman").add(1, "day"),
			"2021-10-29T00:30:00+03:00",
			"Amman addition should retain the first occurrence"
		);
		expect(t,
			moment.tz("2021-10-30 00:30", "Asia/Amman").subtract(1, "day"),
			"2021-10-29T00:30:00+02:00",
			"Amman subtraction should retain the second occurrence"
		);
		t.done();
	},

	"preserve overlap occurrences when parsing prefers the second" : function (t) {
		moment.tz.moveAmbiguousForward = true;

		expect(t,
			moment.tz("2024-11-02 01:30", "America/New_York").add(1, "day"),
			"2024-11-03T01:30:00-04:00",
			"addition should retain the source occurrence"
		);
		expect(t,
			moment.tz("2024-11-04 01:30", "America/New_York").subtract(1, "day"),
			"2024-11-03T01:30:00-05:00",
			"subtraction should retain the source occurrence"
		);
		t.done();
	},

	"set calendar fields into forward gaps" : function (t) {
		expect(t,
			moment.tz("2024-03-09 02:30", "America/New_York").date(10),
			"2024-03-10T03:30:00-04:00",
			"setting the date should resolve the gap"
		);
		expect(t,
			moment.tz("2024-02-10 02:30", "America/New_York").month(2),
			"2024-03-10T03:30:00-04:00",
			"setting the month should resolve the gap"
		);
		expect(t,
			moment.tz("2024-03-10 01:30", "America/New_York").hour(2),
			"2024-03-10T03:30:00-04:00",
			"setting the hour should resolve the gap"
		);
		t.done();
	},

	"change zones while keeping a time inside a forward gap" : function (t) {
		expect(t,
			moment.utc("2024-03-10 02:30").tz("America/New_York", true),
			"2024-03-10T03:30:00-04:00",
			"changing zones should resolve the gap"
		);
		expect(t,
			moment("2021-03-26 00:30").tz("Asia/Amman", true),
			"2021-03-26T01:30:00+03:00",
			"changing a local moment's zone should resolve the gap"
		);
		t.done();
	},

	"change a non-UTC local moment into a forward gap" : function (t) {
		var originalGetTimezoneOffset = Date.prototype.getTimezoneOffset,
			local = moment.utc("2021-03-25 15:30").local();

		Date.prototype.getTimezoneOffset = function () {
			return -540;
		};
		try {
			expect(t,
				local.tz("Asia/Amman", true),
				"2021-03-26T01:30:00+03:00",
				"a local moment should resolve the target zone's gap"
			);
		} finally {
			Date.prototype.getTimezoneOffset = originalGetTimezoneOffset;
		}
		t.done();
	},

	"skip an entire calendar date" : function (t) {
		expect(t,
			moment.tz("2011-12-30 12:00", "Pacific/Apia"),
			"2011-12-31T12:00:00+14:00",
			"parsing should move across Apia's skipped date"
		);
		expect(t,
			moment.tz("2011-12-29 12:00", "Pacific/Apia").add(1, "day"),
			"2011-12-31T12:00:00+14:00",
			"day addition should move across Apia's skipped date"
		);
		expect(t,
			moment.tz("2011-12-29 12:00", "Pacific/Apia").add(2, "days"),
			"2011-12-31T12:00:00+14:00",
			"day addition should cross Apia's skipped date"
		);
		expect(t,
			moment.tz("2012-01-01 12:00", "Pacific/Apia").subtract(2, "days"),
			"2011-12-31T12:00:00+14:00",
			"day subtraction should move across Apia's skipped date"
		);

		moment.tz.moveInvalidForward = false;
		expect(t,
			moment.tz("2011-12-30 12:00", "Pacific/Apia"),
			"2011-12-29T12:00:00-10:00",
			"parsing should move backward across Apia's skipped date"
		);
		expect(t,
			moment.tz("2011-12-29 12:00", "Pacific/Apia").add(1, "day"),
			"2011-12-29T12:00:00-10:00",
			"day addition should honor moveInvalidForward for a skipped date"
		);
		t.done();
	},

	"leave moments without named zones unchanged" : function (t) {
		var invalid = moment.invalid();

		t.equal(
			moment.parseZone("2024-03-09T02:30:00-05:00").add(1, "day").format(),
			"2024-03-10T02:30:00-05:00",
			"fixed-offset moments should retain their offset"
		);
		t.ok(!invalid.add(1, "day").isValid(), "invalid moments should remain invalid");
		t.done();
	},

	"start of a day with a midnight gap" : function (t) {
		expect(t,
			moment.tz("2018-08-12 12:00", "America/Santiago").startOf("day"),
			"2018-08-12T01:00:00-03:00",
			"startOf day should resolve a midnight gap"
		);
		expect(t,
			moment.tz("2021-03-26 12:00", "Asia/Amman").startOf("day"),
			"2021-03-26T01:00:00+03:00",
			"startOf day should resolve Amman's midnight gap"
		);
		t.done();
	},

	"clone a normalized midnight gap" : function (t) {
		var original = moment.tz("2018-08-12 12:00", "America/Santiago").startOf("day"),
			cloned = original.clone();

		expect(t,
			cloned,
			"2018-08-12T01:00:00-03:00",
			"the clone should retain the normalized local time"
		);
		t.equal(
			cloned.valueOf(),
			original.valueOf(),
			"the clone should retain the normalized instant"
		);
		t.done();
	},

	"default zone calendar arithmetic into a forward gap" : function (t) {
		moment.tz.setDefault("America/New_York");

		expect(t,
			moment("2024-03-09 02:30").add(1, "day"),
			"2024-03-10T03:30:00-04:00",
			"the default zone should resolve the gap"
		);
		t.done();
	}
};
