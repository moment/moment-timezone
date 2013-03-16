var moment = require("../../moment-timezone");

exports["Africa/Monrovia"] = {

	"1919" : function (t) {
		t.equal(moment("1919-03-01T00:43:07+00:00").tz("Africa/Monrovia").format("HH:mm:ss"), "23:59:59", "1919-03-01T00:43:07+00:00 should be 23:59:59 MMT");
		t.equal(moment("1919-03-01T00:43:08+00:00").tz("Africa/Monrovia").format("HH:mm:ss"), "23:58:38", "1919-03-01T00:43:08+00:00 should be 23:58:38 LRT");

		t.equal(moment("1919-03-01T00:43:07+00:00").tz("Africa/Monrovia").zone(), 43, "1919-03-01T00:43:07+00:00 should be 43 minutes offset in MMT");
		t.equal(moment("1919-03-01T00:43:08+00:00").tz("Africa/Monrovia").zone(), 44, "1919-03-01T00:43:08+00:00 should be 44 minutes offset in LRT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-05-01T00:44:29+00:00").tz("Africa/Monrovia").format("HH:mm:ss"), "23:59:59", "1972-05-01T00:44:29+00:00 should be 23:59:59 LRT");
		t.equal(moment("1972-05-01T00:44:30+00:00").tz("Africa/Monrovia").format("HH:mm:ss"), "00:44:30", "1972-05-01T00:44:30+00:00 should be 00:44:30 GMT");

		t.equal(moment("1972-05-01T00:44:29+00:00").tz("Africa/Monrovia").zone(), 44, "1972-05-01T00:44:29+00:00 should be 44 minutes offset in LRT");
		t.equal(moment("1972-05-01T00:44:30+00:00").tz("Africa/Monrovia").zone(), 0, "1972-05-01T00:44:30+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};