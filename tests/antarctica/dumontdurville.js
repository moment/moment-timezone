var moment = require("../../index");

exports["Antarctica/DumontDUrville"] = {

	"1946" : function (t) {
		t.equal(moment("1946-12-31T23:59:59+00:00").tz("Antarctica/DumontDUrville").format("HH:mm:ss"), "23:59:59", "1946-12-31T23:59:59+00:00 should be 23:59:59 zzz");

		t.equal(moment("1946-12-31T23:59:59+00:00").tz("Antarctica/DumontDUrville").zone(), 0, "1946-12-31T23:59:59+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-01-01T00:00:00+00:00").tz("Antarctica/DumontDUrville").format("HH:mm:ss"), "10:00:00", "1947-01-01T00:00:00+00:00 should be 10:00:00 PMT");

		t.equal(moment("1947-01-01T00:00:00+00:00").tz("Antarctica/DumontDUrville").zone(), -600, "1947-01-01T00:00:00+00:00 should be -600 minutes offset in PMT");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-01-13T13:59:59+00:00").tz("Antarctica/DumontDUrville").format("HH:mm:ss"), "23:59:59", "1952-01-13T13:59:59+00:00 should be 23:59:59 PMT");
		t.equal(moment("1952-01-13T14:00:00+00:00").tz("Antarctica/DumontDUrville").format("HH:mm:ss"), "14:00:00", "1952-01-13T14:00:00+00:00 should be 14:00:00 zzz");

		t.equal(moment("1952-01-13T13:59:59+00:00").tz("Antarctica/DumontDUrville").zone(), -600, "1952-01-13T13:59:59+00:00 should be -600 minutes offset in PMT");
		t.equal(moment("1952-01-13T14:00:00+00:00").tz("Antarctica/DumontDUrville").zone(), 0, "1952-01-13T14:00:00+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-10-31T23:59:59+00:00").tz("Antarctica/DumontDUrville").format("HH:mm:ss"), "23:59:59", "1956-10-31T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1956-11-01T00:00:00+00:00").tz("Antarctica/DumontDUrville").format("HH:mm:ss"), "10:00:00", "1956-11-01T00:00:00+00:00 should be 10:00:00 DDUT");

		t.equal(moment("1956-10-31T23:59:59+00:00").tz("Antarctica/DumontDUrville").zone(), 0, "1956-10-31T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1956-11-01T00:00:00+00:00").tz("Antarctica/DumontDUrville").zone(), -600, "1956-11-01T00:00:00+00:00 should be -600 minutes offset in DDUT");

		t.done();
	}
};