var moment = require("../../index");

exports["Pacific/Guam"] = {

	"2000" : function (t) {
		t.equal(moment("2000-12-22T13:59:59+00:00").tz("Pacific/Guam").format("HH:mm:ss"), "23:59:59", "2000-12-22T13:59:59+00:00 should be 23:59:59 GST");
		t.equal(moment("2000-12-22T14:00:00+00:00").tz("Pacific/Guam").format("HH:mm:ss"), "00:00:00", "2000-12-22T14:00:00+00:00 should be 00:00:00 ChST");

		t.equal(moment("2000-12-22T13:59:59+00:00").tz("Pacific/Guam").zone(), -600, "2000-12-22T13:59:59+00:00 should be -600 minutes offset in GST");
		t.equal(moment("2000-12-22T14:00:00+00:00").tz("Pacific/Guam").zone(), -600, "2000-12-22T14:00:00+00:00 should be -600 minutes offset in ChST");

		t.done();
	}
};