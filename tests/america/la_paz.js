var moment = require("../../moment-timezone");

exports["America/La_Paz"] = {

	"1931" : function (t) {
		t.equal(moment("1931-10-15T04:32:35+00:00").tz("America/La_Paz").format("HH:mm:ss"), "23:59:59", "1931-10-15T04:32:35+00:00 should be 23:59:59 CMT");
		t.equal(moment("1931-10-15T04:32:36+00:00").tz("America/La_Paz").format("HH:mm:ss"), "01:00:00", "1931-10-15T04:32:36+00:00 should be 01:00:00 BOST");

		t.equal(moment("1931-10-15T04:32:35+00:00").tz("America/La_Paz").zone(), 272, "1931-10-15T04:32:35+00:00 should be 272 minutes offset in CMT");
		t.equal(moment("1931-10-15T04:32:36+00:00").tz("America/La_Paz").zone(), 212, "1931-10-15T04:32:36+00:00 should be 212 minutes offset in BOST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-03-21T03:32:35+00:00").tz("America/La_Paz").format("HH:mm:ss"), "23:59:59", "1932-03-21T03:32:35+00:00 should be 23:59:59 BOST");
		t.equal(moment("1932-03-21T03:32:36+00:00").tz("America/La_Paz").format("HH:mm:ss"), "23:32:36", "1932-03-21T03:32:36+00:00 should be 23:32:36 BOT");

		t.equal(moment("1932-03-21T03:32:35+00:00").tz("America/La_Paz").zone(), 212, "1932-03-21T03:32:35+00:00 should be 212 minutes offset in BOST");
		t.equal(moment("1932-03-21T03:32:36+00:00").tz("America/La_Paz").zone(), 240, "1932-03-21T03:32:36+00:00 should be 240 minutes offset in BOT");

		t.done();
	}
};