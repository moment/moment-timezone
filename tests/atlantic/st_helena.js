var moment = require("../../moment-timezone");

exports["Atlantic/St_Helena"] = {

	"1951" : function (t) {
		t.equal(moment("1951-01-01T00:22:47+00:00").tz("Atlantic/St_Helena").format("HH:mm:ss"), "23:59:59", "1951-01-01T00:22:47+00:00 should be 23:59:59 JMT");
		t.equal(moment("1951-01-01T00:22:48+00:00").tz("Atlantic/St_Helena").format("HH:mm:ss"), "00:22:48", "1951-01-01T00:22:48+00:00 should be 00:22:48 GMT");

		t.equal(moment("1951-01-01T00:22:47+00:00").tz("Atlantic/St_Helena").zone(), 1368 / 60, "1951-01-01T00:22:47+00:00 should be 1368 / 60 minutes offset in JMT");
		t.equal(moment("1951-01-01T00:22:48+00:00").tz("Atlantic/St_Helena").zone(), 0, "1951-01-01T00:22:48+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};