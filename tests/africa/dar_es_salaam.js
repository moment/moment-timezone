var moment = require("../../moment-timezone");

exports["Africa/Dar_es_Salaam"] = {

	"1930" : function (t) {
		t.equal(moment("1930-12-31T21:22:51+00:00").tz("Africa/Dar_es_Salaam").format("HH:mm:ss"), "23:59:59", "1930-12-31T21:22:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1930-12-31T21:22:52+00:00").tz("Africa/Dar_es_Salaam").format("HH:mm:ss"), "00:22:52", "1930-12-31T21:22:52+00:00 should be 00:22:52 EAT");

		t.equal(moment("1930-12-31T21:22:51+00:00").tz("Africa/Dar_es_Salaam").zone(), -9428 / 60, "1930-12-31T21:22:51+00:00 should be -9428 / 60 minutes offset in LMT");
		t.equal(moment("1930-12-31T21:22:52+00:00").tz("Africa/Dar_es_Salaam").zone(), -180, "1930-12-31T21:22:52+00:00 should be -180 minutes offset in EAT");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-12-31T20:59:59+00:00").tz("Africa/Dar_es_Salaam").format("HH:mm:ss"), "23:59:59", "1947-12-31T20:59:59+00:00 should be 23:59:59 EAT");
		t.equal(moment("1947-12-31T21:00:00+00:00").tz("Africa/Dar_es_Salaam").format("HH:mm:ss"), "23:45:00", "1947-12-31T21:00:00+00:00 should be 23:45:00 BEAUT");

		t.equal(moment("1947-12-31T20:59:59+00:00").tz("Africa/Dar_es_Salaam").zone(), -180, "1947-12-31T20:59:59+00:00 should be -180 minutes offset in EAT");
		t.equal(moment("1947-12-31T21:00:00+00:00").tz("Africa/Dar_es_Salaam").zone(), -165, "1947-12-31T21:00:00+00:00 should be -165 minutes offset in BEAUT");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-12-31T21:14:59+00:00").tz("Africa/Dar_es_Salaam").format("HH:mm:ss"), "23:59:59", "1960-12-31T21:14:59+00:00 should be 23:59:59 BEAUT");
		t.equal(moment("1960-12-31T21:15:00+00:00").tz("Africa/Dar_es_Salaam").format("HH:mm:ss"), "00:15:00", "1960-12-31T21:15:00+00:00 should be 00:15:00 EAT");

		t.equal(moment("1960-12-31T21:14:59+00:00").tz("Africa/Dar_es_Salaam").zone(), -165, "1960-12-31T21:14:59+00:00 should be -165 minutes offset in BEAUT");
		t.equal(moment("1960-12-31T21:15:00+00:00").tz("Africa/Dar_es_Salaam").zone(), -180, "1960-12-31T21:15:00+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};