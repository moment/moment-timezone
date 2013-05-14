var moment = require("../../index");

exports["America/Creston"] = {

	"1916" : function (t) {
		t.equal(moment("1916-10-01T06:59:59+00:00").tz("America/Creston").format("HH:mm:ss"), "23:59:59", "1916-10-01T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1916-10-01T07:00:00+00:00").tz("America/Creston").format("HH:mm:ss"), "23:00:00", "1916-10-01T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1916-10-01T06:59:59+00:00").tz("America/Creston").zone(), 420, "1916-10-01T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1916-10-01T07:00:00+00:00").tz("America/Creston").zone(), 480, "1916-10-01T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-06-02T07:59:59+00:00").tz("America/Creston").format("HH:mm:ss"), "23:59:59", "1918-06-02T07:59:59+00:00 should be 23:59:59 PST");
		t.equal(moment("1918-06-02T08:00:00+00:00").tz("America/Creston").format("HH:mm:ss"), "01:00:00", "1918-06-02T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1918-06-02T07:59:59+00:00").tz("America/Creston").zone(), 480, "1918-06-02T07:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1918-06-02T08:00:00+00:00").tz("America/Creston").zone(), 420, "1918-06-02T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	}
};