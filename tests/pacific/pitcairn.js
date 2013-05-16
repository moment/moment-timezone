var moment = require("../../index");

exports["Pacific/Pitcairn"] = {

	"1998" : function (t) {
		t.equal(moment("1998-04-27T08:29:59+00:00").tz("Pacific/Pitcairn").format("HH:mm:ss"), "23:59:59", "1998-04-27T08:29:59+00:00 should be 23:59:59 PNT");
		t.equal(moment("1998-04-27T08:30:00+00:00").tz("Pacific/Pitcairn").format("HH:mm:ss"), "00:30:00", "1998-04-27T08:30:00+00:00 should be 00:30:00 PST");

		t.equal(moment("1998-04-27T08:29:59+00:00").tz("Pacific/Pitcairn").zone(), 510, "1998-04-27T08:29:59+00:00 should be 510 minutes offset in PNT");
		t.equal(moment("1998-04-27T08:30:00+00:00").tz("Pacific/Pitcairn").zone(), 480, "1998-04-27T08:30:00+00:00 should be 480 minutes offset in PST");

		t.done();
	}
};