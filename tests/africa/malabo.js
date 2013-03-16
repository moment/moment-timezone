var moment = require("../../moment-timezone");

exports["Africa/Malabo"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T23:24:51+00:00").tz("Africa/Malabo").format("HH:mm:ss"), "23:59:59", "1911-12-31T23:24:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T23:24:52+00:00").tz("Africa/Malabo").format("HH:mm:ss"), "23:24:52", "1911-12-31T23:24:52+00:00 should be 23:24:52 GMT");

		t.equal(moment("1911-12-31T23:24:51+00:00").tz("Africa/Malabo").zone(), -35, "1911-12-31T23:24:51+00:00 should be -35 minutes offset in LMT");
		t.equal(moment("1911-12-31T23:24:52+00:00").tz("Africa/Malabo").zone(), 0, "1911-12-31T23:24:52+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-14T23:59:59+00:00").tz("Africa/Malabo").format("HH:mm:ss"), "23:59:59", "1963-12-14T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1963-12-15T00:00:00+00:00").tz("Africa/Malabo").format("HH:mm:ss"), "01:00:00", "1963-12-15T00:00:00+00:00 should be 01:00:00 WAT");

		t.equal(moment("1963-12-14T23:59:59+00:00").tz("Africa/Malabo").zone(), 0, "1963-12-14T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1963-12-15T00:00:00+00:00").tz("Africa/Malabo").zone(), -60, "1963-12-15T00:00:00+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};