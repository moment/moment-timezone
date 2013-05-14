var moment = require("../../index");

exports["Asia/Tokyo"] = {

	"1937" : function (t) {
		t.equal(moment("1937-12-31T14:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "23:59:59", "1937-12-31T14:59:59+00:00 should be 23:59:59 CJT");
		t.equal(moment("1937-12-31T15:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "00:00:00", "1937-12-31T15:00:00+00:00 should be 00:00:00 JST");

		t.equal(moment("1937-12-31T14:59:59+00:00").tz("Asia/Tokyo").zone(), -540, "1937-12-31T14:59:59+00:00 should be -540 minutes offset in CJT");
		t.equal(moment("1937-12-31T15:00:00+00:00").tz("Asia/Tokyo").zone(), -540, "1937-12-31T15:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-05-01T16:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1948-05-01T16:59:59+00:00 should be 01:59:59 JST");
		t.equal(moment("1948-05-01T17:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "03:00:00", "1948-05-01T17:00:00+00:00 should be 03:00:00 JDT");
		t.equal(moment("1948-09-10T15:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1948-09-10T15:59:59+00:00 should be 01:59:59 JDT");
		t.equal(moment("1948-09-10T16:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:00:00", "1948-09-10T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1948-05-01T16:59:59+00:00").tz("Asia/Tokyo").zone(), -540, "1948-05-01T16:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1948-05-01T17:00:00+00:00").tz("Asia/Tokyo").zone(), -600, "1948-05-01T17:00:00+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1948-09-10T15:59:59+00:00").tz("Asia/Tokyo").zone(), -600, "1948-09-10T15:59:59+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1948-09-10T16:00:00+00:00").tz("Asia/Tokyo").zone(), -540, "1948-09-10T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-02T16:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1949-04-02T16:59:59+00:00 should be 01:59:59 JST");
		t.equal(moment("1949-04-02T17:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "03:00:00", "1949-04-02T17:00:00+00:00 should be 03:00:00 JDT");
		t.equal(moment("1949-09-09T15:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1949-09-09T15:59:59+00:00 should be 01:59:59 JDT");
		t.equal(moment("1949-09-09T16:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:00:00", "1949-09-09T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1949-04-02T16:59:59+00:00").tz("Asia/Tokyo").zone(), -540, "1949-04-02T16:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1949-04-02T17:00:00+00:00").tz("Asia/Tokyo").zone(), -600, "1949-04-02T17:00:00+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1949-09-09T15:59:59+00:00").tz("Asia/Tokyo").zone(), -600, "1949-09-09T15:59:59+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1949-09-09T16:00:00+00:00").tz("Asia/Tokyo").zone(), -540, "1949-09-09T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-05-06T16:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1950-05-06T16:59:59+00:00 should be 01:59:59 JST");
		t.equal(moment("1950-05-06T17:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "03:00:00", "1950-05-06T17:00:00+00:00 should be 03:00:00 JDT");
		t.equal(moment("1950-09-08T15:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1950-09-08T15:59:59+00:00 should be 01:59:59 JDT");
		t.equal(moment("1950-09-08T16:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:00:00", "1950-09-08T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1950-05-06T16:59:59+00:00").tz("Asia/Tokyo").zone(), -540, "1950-05-06T16:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1950-05-06T17:00:00+00:00").tz("Asia/Tokyo").zone(), -600, "1950-05-06T17:00:00+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1950-09-08T15:59:59+00:00").tz("Asia/Tokyo").zone(), -600, "1950-09-08T15:59:59+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1950-09-08T16:00:00+00:00").tz("Asia/Tokyo").zone(), -540, "1950-09-08T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-05-05T16:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1951-05-05T16:59:59+00:00 should be 01:59:59 JST");
		t.equal(moment("1951-05-05T17:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "03:00:00", "1951-05-05T17:00:00+00:00 should be 03:00:00 JDT");
		t.equal(moment("1951-09-07T15:59:59+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:59:59", "1951-09-07T15:59:59+00:00 should be 01:59:59 JDT");
		t.equal(moment("1951-09-07T16:00:00+00:00").tz("Asia/Tokyo").format("HH:mm:ss"), "01:00:00", "1951-09-07T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1951-05-05T16:59:59+00:00").tz("Asia/Tokyo").zone(), -540, "1951-05-05T16:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1951-05-05T17:00:00+00:00").tz("Asia/Tokyo").zone(), -600, "1951-05-05T17:00:00+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1951-09-07T15:59:59+00:00").tz("Asia/Tokyo").zone(), -600, "1951-09-07T15:59:59+00:00 should be -600 minutes offset in JDT");
		t.equal(moment("1951-09-07T16:00:00+00:00").tz("Asia/Tokyo").zone(), -540, "1951-09-07T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	}
};