var moment = require("../index");

exports["parse"] = {
	"parse" : function (t) {
		t.equal(moment.tz("2013-01-01T00:00:00", "America/New_York").format(), "2013-01-01T00:00:00-05:00", "2013-01-01T00:00:00 in America/New_York should be 2013-01-01T00:00:00-05:00");
		t.equal(moment.tz("2013-01-01T00:00:00", "America/Los_Angeles").format(), "2013-01-01T00:00:00-08:00", "2013-01-01T00:00:00 in America/Los_Angeles should be 2013-01-01T00:00:00-08:00");
		t.equal(moment.tz("2013-01-01T00:00:00", "Europe/Paris").format(), "2013-01-01T00:00:00+01:00", "2013-01-01T00:00:00 in Europe/Paris should be 2013-01-01T00:00:00+01:00");
		t.equal(moment.tz("2013-01-01T00:00:00", "Asia/Seoul").format(), "2013-01-01T00:00:00+09:00", "2013-01-01T00:00:00 in Asia/Seoul should be 2013-01-01T00:00:00+09:00");

		t.equal(moment.tz([2013, 0, 1, 0, 0, 0], "America/New_York").format(), "2013-01-01T00:00:00-05:00", "Array constructor respects argument tzid");
		t.done();
	},

	"ambiguous input losing an hour - America/Los_Angeles" : function (t) {
		// the hour from 2am to 3am does not exist on March 11 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 2, 11, 1, 59, 59], "America/Los_Angeles"),
			atStart = moment.tz([2012, 2, 11, 2, 0, 0], "America/Los_Angeles"),
			atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], "America/Los_Angeles"),
			after   = moment.tz([2012, 2, 11, 3, 0, 0], "America/Los_Angeles");

		t.equal(before.format("HH mm ss"),  "01 59 59", "Before the lost hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss"), "01 00 00", "During the lost hour, the time should fall back to the previous time");
		t.equal(atEnd.format("HH mm ss"),   "01 59 59", "During the lost hour, the time should fall back to the previous time");
		t.equal(after.format("HH mm ss"),   "03 00 00", "After the lost hour, the time should match the input time");

		t.equal(before.zone(),  480, "Before the lost hour, the offset should match the non-dst offset");
		t.equal(atStart.zone(), 480, "During the lost hour, the offset should match the non-dst offset");
		t.equal(atEnd.zone(),   480, "During the lost hour, the offset should match the non-dst offset");
		t.equal(after.zone(),   420, "After the lost hour, the time should match the dst offset");

		t.done();
	},

	"ambiguous input losing an hour - America/New_York" : function (t) {
		// the hour from 2am to 3am does not exist on March 11 2011 in America/New_York
		var before  = moment.tz([2012, 2, 11, 1, 59, 59], "America/New_York"),
			atStart = moment.tz([2012, 2, 11, 2, 0, 0], "America/New_York"),
			atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], "America/New_York"),
			after   = moment.tz([2012, 2, 11, 3, 0, 0], "America/New_York");

		t.equal(before.format("HH mm ss"),  "01 59 59", "Before the lost hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss"), "01 00 00", "During the lost hour, the time should fall back to the previous time");
		t.equal(atEnd.format("HH mm ss"),   "01 59 59", "During the lost hour, the time should fall back to the previous time");
		t.equal(after.format("HH mm ss"),   "03 00 00", "After the lost hour, the time should match the input time");

		t.equal(before.zone(),  300, "Before the lost hour, the offset should match the non-dst offset");
		t.equal(atStart.zone(), 300, "During the lost hour, the offset should match the non-dst offset");
		t.equal(atEnd.zone(),   300, "During the lost hour, the offset should match the non-dst offset");
		t.equal(after.zone(),   240, "After the lost hour, the time should match the dst offset");

		t.done();
	},

	"ambiguous input gaining an hour - America/Los_Angeles" : function (t) {
		// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 10, 4, 0, 59, 59], "America/Los_Angeles"),
			atStart = moment.tz([2012, 10, 4, 1, 0, 0], "America/Los_Angeles"),
			atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], "America/Los_Angeles"),
			after   = moment.tz([2012, 10, 4, 2, 0, 0], "America/Los_Angeles");

		t.equal(before.format("HH mm ss"),  "00 59 59", "Before the duplicated hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss"), "01 00 00", "During the duplicated hour, the time should match the input time");
		t.equal(atEnd.format("HH mm ss"),   "01 59 59", "During the duplicated hour, the time should match the input time");
		t.equal(after.format("HH mm ss"),   "02 00 00", "After the duplicated hour, the time should match the input time");

		t.equal(before.zone(),  420, "Before the duplicated hour, the offset should match the dst offset");
		t.equal(atStart.zone(), 420, "During the duplicated hour, the offset should match the dst offset");
		t.equal(atEnd.zone(),   420, "During the duplicated hour, the offset should match the dst offset");
		t.equal(after.zone(),   480, "After the duplicated hour, the time should match the non-dst offset");

		t.done();
	},

	"ambiguous input gaining an hour - America/New_York" : function (t) {
		// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 10, 4, 0, 59, 59], "America/New_York"),
			atStart = moment.tz([2012, 10, 4, 1, 0, 0], "America/New_York"),
			atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], "America/New_York"),
			after   = moment.tz([2012, 10, 4, 2, 0, 0], "America/New_York");

		t.equal(before.format("HH mm ss"),  "00 59 59", "Before the duplicated hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss"), "01 00 00", "During the duplicated hour, the time should match the input time");
		t.equal(atEnd.format("HH mm ss"),   "01 59 59", "During the duplicated hour, the time should match the input time");
		t.equal(after.format("HH mm ss"),   "02 00 00", "After the duplicated hour, the time should match the input time");

		t.equal(before.zone(),  240, "Before the duplicated hour, the offset should match the dst offset");
		t.equal(atStart.zone(), 240, "During the duplicated hour, the offset should match the dst offset");
		t.equal(atEnd.zone(),   240, "During the duplicated hour, the offset should match the dst offset");
		t.equal(after.zone(),   300, "After the duplicated hour, the time should match the non-dst offset");

		t.done();
	}

};
