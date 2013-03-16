var moment = require("../../moment-timezone");

exports["Pacific/Norfolk"] = {

	"1950" : function (t) {
		t.equal(moment("1950-12-31T12:47:59+00:00").tz("Pacific/Norfolk").format("HH:mm:ss"), "23:59:59", "1950-12-31T12:47:59+00:00 should be 23:59:59 NMT");
		t.equal(moment("1950-12-31T12:48:00+00:00").tz("Pacific/Norfolk").format("HH:mm:ss"), "00:18:00", "1950-12-31T12:48:00+00:00 should be 00:18:00 NFT");

		t.equal(moment("1950-12-31T12:47:59+00:00").tz("Pacific/Norfolk").zone(), -672, "1950-12-31T12:47:59+00:00 should be -672 minutes offset in NMT");
		t.equal(moment("1950-12-31T12:48:00+00:00").tz("Pacific/Norfolk").zone(), -690, "1950-12-31T12:48:00+00:00 should be -690 minutes offset in NFT");

		t.done();
	}
};