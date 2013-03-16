var moment = require("../../moment-timezone");

exports["Africa/Tunis"] = {

	"1911" : function (t) {
		t.equal(moment("1911-03-10T23:50:38+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1911-03-10T23:50:38+00:00 should be 23:59:59 PMT");
		t.equal(moment("1911-03-10T23:50:39+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:50:39", "1911-03-10T23:50:39+00:00 should be 00:50:39 CET");

		t.equal(moment("1911-03-10T23:50:38+00:00").tz("Africa/Tunis").zone(), -9, "1911-03-10T23:50:38+00:00 should be -9 minutes offset in PMT");
		t.equal(moment("1911-03-10T23:50:39+00:00").tz("Africa/Tunis").zone(), -60, "1911-03-10T23:50:39+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-04-15T21:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "22:59:59", "1939-04-15T21:59:59+00:00 should be 22:59:59 CET");
		t.equal(moment("1939-04-15T22:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1939-04-15T22:00:00+00:00 should be 00:00:00 CEST");
		t.equal(moment("1939-11-18T21:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1939-11-18T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1939-11-18T22:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:00:00", "1939-11-18T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1939-04-15T21:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1939-04-15T21:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1939-04-15T22:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1939-04-15T22:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1939-11-18T21:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1939-11-18T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1939-11-18T22:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1939-11-18T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-02-25T21:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "22:59:59", "1940-02-25T21:59:59+00:00 should be 22:59:59 CET");
		t.equal(moment("1940-02-25T22:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1940-02-25T22:00:00+00:00 should be 00:00:00 CEST");

		t.equal(moment("1940-02-25T21:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1940-02-25T21:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1940-02-25T22:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1940-02-25T22:00:00+00:00 should be -120 minutes offset in CEST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-10-05T21:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1941-10-05T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1941-10-05T22:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:00:00", "1941-10-05T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1941-10-05T21:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1941-10-05T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1941-10-05T22:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1941-10-05T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-08T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1942-03-08T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1942-03-08T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1942-03-08T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1942-11-02T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:59:59", "1942-11-02T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1942-11-02T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:00:00", "1942-11-02T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1942-03-08T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1942-03-08T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1942-03-08T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1942-03-08T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1942-11-02T00:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1942-11-02T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1942-11-02T01:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1942-11-02T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-29T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "1943-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1943-03-29T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "1943-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1943-04-16T23:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "1943-04-16T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("1943-04-17T00:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1943-04-17T00:00:00+00:00 should be 01:00:00 CET");
		t.equal(moment("1943-04-25T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "1943-04-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1943-04-25T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "1943-04-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1943-10-03T23:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "1943-10-03T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("1943-10-04T00:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1943-10-04T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("1943-03-29T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1943-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1943-03-29T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1943-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-04-16T23:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1943-04-16T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-04-17T00:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1943-04-17T00:00:00+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1943-04-25T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1943-04-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1943-04-25T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1943-04-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-10-03T23:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1943-10-03T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-10-04T00:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1943-10-04T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "1944-04-03T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "1944-04-03T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1944-10-07T21:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1944-10-07T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1944-10-07T22:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:00:00", "1944-10-07T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1944-04-03T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1944-04-03T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-10-07T21:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1944-10-07T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-10-07T22:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1944-10-07T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-04-02T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "1945-04-02T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1945-04-02T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "1945-04-02T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1945-09-15T21:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1945-09-15T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1945-09-15T22:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:00:00", "1945-09-15T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1945-04-02T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1945-04-02T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1945-04-02T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1945-04-02T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1945-09-15T21:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1945-09-15T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1945-09-15T22:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1945-09-15T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-29T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1977-04-29T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1977-04-29T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1977-04-29T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1977-09-23T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:59:59", "1977-09-23T22:59:59+00:00 should be 00:59:59 CEST");
		t.equal(moment("1977-09-23T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1977-09-23T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1977-04-29T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1977-04-29T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1977-04-29T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1977-04-29T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1977-09-23T22:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1977-09-23T22:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1977-09-23T23:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1977-09-23T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1978-04-30T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1978-04-30T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1978-04-30T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1978-09-30T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:59:59", "1978-09-30T22:59:59+00:00 should be 00:59:59 CEST");
		t.equal(moment("1978-09-30T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1978-09-30T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1978-04-30T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1978-04-30T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1978-04-30T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1978-04-30T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1978-09-30T22:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1978-09-30T22:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1978-09-30T23:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1978-09-30T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-05-31T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1988-05-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1988-05-31T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1988-05-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1988-09-24T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:59:59", "1988-09-24T22:59:59+00:00 should be 00:59:59 CEST");
		t.equal(moment("1988-09-24T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1988-09-24T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1988-05-31T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1988-05-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1988-05-31T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1988-05-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-24T22:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1988-09-24T22:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-24T23:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1988-09-24T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1989-03-25T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1989-03-25T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1989-03-25T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1989-09-23T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:59:59", "1989-09-23T22:59:59+00:00 should be 00:59:59 CEST");
		t.equal(moment("1989-09-23T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1989-09-23T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1989-03-25T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1989-03-25T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1989-03-25T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1989-03-25T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-23T22:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1989-09-23T22:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-23T23:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1989-09-23T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-30T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "1990-04-30T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1990-04-30T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "1990-04-30T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1990-09-29T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:59:59", "1990-09-29T22:59:59+00:00 should be 00:59:59 CEST");
		t.equal(moment("1990-09-29T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "00:00:00", "1990-09-29T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1990-04-30T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "1990-04-30T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1990-04-30T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "1990-04-30T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1990-09-29T22:59:59+00:00").tz("Africa/Tunis").zone(), -120, "1990-09-29T22:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1990-09-29T23:00:00+00:00").tz("Africa/Tunis").zone(), -60, "1990-09-29T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-30T22:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "23:59:59", "2005-04-30T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("2005-04-30T23:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "2005-04-30T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("2005-09-29T23:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "2005-09-29T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2005-09-30T00:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:00:00", "2005-09-30T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2005-04-30T22:59:59+00:00").tz("Africa/Tunis").zone(), -60, "2005-04-30T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2005-04-30T23:00:00+00:00").tz("Africa/Tunis").zone(), -120, "2005-04-30T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2005-09-29T23:59:59+00:00").tz("Africa/Tunis").zone(), -120, "2005-09-29T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2005-09-30T00:00:00+00:00").tz("Africa/Tunis").zone(), -60, "2005-09-30T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "2006-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "2006-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:59:59", "2006-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:00:00", "2006-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "2006-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "2006-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Africa/Tunis").zone(), -120, "2006-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Africa/Tunis").zone(), -60, "2006-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "2007-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "2007-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:59:59", "2007-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:00:00", "2007-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "2007-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "2007-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Africa/Tunis").zone(), -120, "2007-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Africa/Tunis").zone(), -60, "2007-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "01:59:59", "2008-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "03:00:00", "2008-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:59:59", "2008-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Africa/Tunis").format("HH:mm:ss"), "02:00:00", "2008-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Africa/Tunis").zone(), -60, "2008-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Africa/Tunis").zone(), -120, "2008-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Africa/Tunis").zone(), -120, "2008-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Africa/Tunis").zone(), -60, "2008-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	}
};