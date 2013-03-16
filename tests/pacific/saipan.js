var moment = require("../../moment-timezone");

exports["Pacific/Saipan"] = {

	"1969" : function (t) {
		t.equal(moment("1969-09-30T14:59:59+00:00").tz("Pacific/Saipan").format("HH:mm:ss"), "23:59:59", "1969-09-30T14:59:59+00:00 should be 23:59:59 MPT");
		t.equal(moment("1969-09-30T15:00:00+00:00").tz("Pacific/Saipan").format("HH:mm:ss"), "01:00:00", "1969-09-30T15:00:00+00:00 should be 01:00:00 MPT");

		t.equal(moment("1969-09-30T14:59:59+00:00").tz("Pacific/Saipan").zone(), -540, "1969-09-30T14:59:59+00:00 should be -540 minutes offset in MPT");
		t.equal(moment("1969-09-30T15:00:00+00:00").tz("Pacific/Saipan").zone(), -600, "1969-09-30T15:00:00+00:00 should be -600 minutes offset in MPT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-12-22T13:59:59+00:00").tz("Pacific/Saipan").format("HH:mm:ss"), "23:59:59", "2000-12-22T13:59:59+00:00 should be 23:59:59 MPT");
		t.equal(moment("2000-12-22T14:00:00+00:00").tz("Pacific/Saipan").format("HH:mm:ss"), "00:00:00", "2000-12-22T14:00:00+00:00 should be 00:00:00 ChST");

		t.equal(moment("2000-12-22T13:59:59+00:00").tz("Pacific/Saipan").zone(), -600, "2000-12-22T13:59:59+00:00 should be -600 minutes offset in MPT");
		t.equal(moment("2000-12-22T14:00:00+00:00").tz("Pacific/Saipan").zone(), -600, "2000-12-22T14:00:00+00:00 should be -600 minutes offset in ChST");

		t.done();
	}
};