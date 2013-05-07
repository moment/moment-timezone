var moment = require("../../moment-timezone");

exports["Africa/El_Aaiun"] = {

	"1934" : function (t) {
		t.equal(moment("1934-01-01T00:52:47+00:00").tz("Africa/El_Aaiun").format("HH:mm:ss"), "23:59:59", "1934-01-01T00:52:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1934-01-01T00:52:48+00:00").tz("Africa/El_Aaiun").format("HH:mm:ss"), "23:52:48", "1934-01-01T00:52:48+00:00 should be 23:52:48 WAT");

		t.equal(moment("1934-01-01T00:52:47+00:00").tz("Africa/El_Aaiun").zone(), 3168 / 60, "1934-01-01T00:52:47+00:00 should be 3168 / 60 minutes offset in LMT");
		t.equal(moment("1934-01-01T00:52:48+00:00").tz("Africa/El_Aaiun").zone(), 60, "1934-01-01T00:52:48+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-14T00:59:59+00:00").tz("Africa/El_Aaiun").format("HH:mm:ss"), "23:59:59", "1976-04-14T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1976-04-14T01:00:00+00:00").tz("Africa/El_Aaiun").format("HH:mm:ss"), "01:00:00", "1976-04-14T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1976-04-14T00:59:59+00:00").tz("Africa/El_Aaiun").zone(), 60, "1976-04-14T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1976-04-14T01:00:00+00:00").tz("Africa/El_Aaiun").zone(), 0, "1976-04-14T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	}
};