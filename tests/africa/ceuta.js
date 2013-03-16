var moment = require("../../moment-timezone");

exports["Africa/Ceuta"] = {

	"1918" : function (t) {
		t.equal(moment("1918-05-06T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:59:59", "1918-05-06T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1918-05-06T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "00:00:00", "1918-05-06T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1918-10-07T21:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:59:59", "1918-10-07T21:59:59+00:00 should be 22:59:59 WEST");
		t.equal(moment("1918-10-07T22:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:00:00", "1918-10-07T22:00:00+00:00 should be 22:00:00 WET");

		t.equal(moment("1918-05-06T22:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1918-05-06T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1918-05-06T23:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1918-05-06T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1918-10-07T21:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1918-10-07T21:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1918-10-07T22:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1918-10-07T22:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-04-16T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:59:59", "1924-04-16T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1924-04-16T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "00:00:00", "1924-04-16T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1924-10-04T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1924-10-04T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1924-10-04T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1924-10-04T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1924-04-16T22:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1924-04-16T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1924-04-16T23:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1924-04-16T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1924-10-04T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1924-10-04T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1924-10-04T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1924-10-04T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1926" : function (t) {
		t.equal(moment("1926-04-17T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:59:59", "1926-04-17T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1926-04-17T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "00:00:00", "1926-04-17T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1926-10-02T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1926-10-02T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1926-10-02T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1926-10-02T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1926-04-17T22:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1926-04-17T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1926-04-17T23:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1926-04-17T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1926-10-02T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1926-10-02T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1926-10-02T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1926-10-02T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-04-09T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:59:59", "1927-04-09T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1927-04-09T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "00:00:00", "1927-04-09T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1927-10-01T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1927-10-01T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1927-10-01T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1927-10-01T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1927-04-09T22:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1927-04-09T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1927-04-09T23:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1927-04-09T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1927-10-01T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1927-10-01T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1927-10-01T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1927-10-01T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-04-14T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "22:59:59", "1928-04-14T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1928-04-14T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "00:00:00", "1928-04-14T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1928-10-06T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1928-10-06T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1928-10-06T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1928-10-06T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1928-04-14T22:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1928-04-14T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1928-04-14T23:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1928-04-14T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1928-10-06T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1928-10-06T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1928-10-06T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1928-10-06T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-06-03T11:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "11:59:59", "1967-06-03T11:59:59+00:00 should be 11:59:59 WET");
		t.equal(moment("1967-06-03T12:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "13:00:00", "1967-06-03T12:00:00+00:00 should be 13:00:00 WEST");
		t.equal(moment("1967-09-30T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1967-09-30T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1967-09-30T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1967-09-30T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1967-06-03T11:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1967-06-03T11:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1967-06-03T12:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1967-06-03T12:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1967-09-30T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1967-09-30T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1967-09-30T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1967-09-30T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-06-23T23:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1974-06-23T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1974-06-24T00:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:00:00", "1974-06-24T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1974-08-31T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1974-08-31T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1974-08-31T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1974-08-31T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1974-06-23T23:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1974-06-23T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1974-06-24T00:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1974-06-24T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1974-08-31T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1974-08-31T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1974-08-31T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1974-08-31T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-30T23:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1976-04-30T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1976-05-01T00:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:00:00", "1976-05-01T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1976-07-31T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1976-07-31T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1976-07-31T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1976-07-31T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1976-04-30T23:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1976-04-30T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1976-05-01T00:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1976-05-01T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1976-07-31T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1976-07-31T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1976-07-31T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1976-07-31T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-30T23:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1977-04-30T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1977-05-01T00:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:00:00", "1977-05-01T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1977-09-27T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1977-09-27T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1977-09-27T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1977-09-27T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1977-04-30T23:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1977-04-30T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1977-05-01T00:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1977-05-01T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1977-09-27T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1977-09-27T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1977-09-27T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1977-09-27T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-05-31T23:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1978-05-31T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1978-06-01T00:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:00:00", "1978-06-01T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1978-08-03T22:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1978-08-03T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1978-08-03T23:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:00:00", "1978-08-03T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1978-05-31T23:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1978-05-31T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1978-06-01T00:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1978-06-01T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1978-08-03T22:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1978-08-03T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1978-08-03T23:00:00+00:00").tz("Africa/Ceuta").zone(), 0, "1978-08-03T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-15T23:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "23:59:59", "1984-03-15T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1984-03-16T00:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:00:00", "1984-03-16T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("1984-03-15T23:59:59+00:00").tz("Africa/Ceuta").zone(), 0, "1984-03-15T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1984-03-16T00:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1984-03-16T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1986-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1986-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1986-09-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1986-09-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1986-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1986-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1986-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1986-09-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1986-09-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1987-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1987-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1987-09-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1987-09-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1987-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1987-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1987-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1987-09-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1987-09-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1988-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1988-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1988-09-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1988-09-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1988-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1988-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1988-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1988-09-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1988-09-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1989-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1989-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1989-09-24T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1989-09-24T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1989-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1989-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1989-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1989-09-24T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1989-09-24T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1990-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1990-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1990-09-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1990-09-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1990-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1990-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1990-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1990-09-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1990-09-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1991-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1991-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1991-09-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1991-09-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1991-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1991-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1991-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1991-09-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1991-09-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1992-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1992-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1992-09-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1992-09-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1992-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1992-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1992-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1992-09-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1992-09-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1993-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1993-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1993-09-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1993-09-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1993-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1993-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1993-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1993-09-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1993-09-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1994-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1994-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1994-09-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1994-09-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1994-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1994-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1994-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1994-09-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1994-09-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1995-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1995-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1995-09-24T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1995-09-24T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1995-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1995-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1995-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1995-09-24T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1995-09-24T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1996-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1996-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1996-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1996-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1996-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1996-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1996-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1996-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1997-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1997-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1997-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1997-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1997-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1997-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1997-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1997-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1997-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1997-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1997-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1997-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1997-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1997-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1997-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1998-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1998-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1998-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1998-10-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1998-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1998-10-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1998-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1998-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1998-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1998-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1998-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1998-10-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1998-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1998-10-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1998-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "1999-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1999-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "1999-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1999-10-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "1999-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1999-10-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "1999-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1999-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "1999-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1999-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "1999-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1999-10-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "1999-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1999-10-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "1999-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2000-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2000-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2000-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2000-10-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2000-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2000-10-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2000-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2000-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2000-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2000-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2000-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2000-10-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2000-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2000-10-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2000-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2001-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2001-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2001-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2001-10-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2001-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2001-10-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2001-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2001-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2001-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2001-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2001-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2001-10-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2001-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2001-10-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2001-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2002-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2002-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2002-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2002-10-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2002-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2002-10-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2002-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2002-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2002-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2002-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2002-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2002-10-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2002-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2002-10-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2002-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2003-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2003-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2003-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2003-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2003-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2003-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2003-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2003-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2003-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2003-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2003-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2003-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2003-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2003-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2003-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2004-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2004-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2004-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2004-10-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2004-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2004-10-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2004-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2004-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2004-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2004-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2004-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2004-10-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2004-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2004-10-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2004-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2005-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2005-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2005-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2005-10-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2005-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2005-10-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2005-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2005-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2005-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2005-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2005-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2005-10-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2005-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2005-10-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2005-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2006-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2006-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2006-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2006-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2006-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2006-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2006-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2006-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2007-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2007-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2007-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2007-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2007-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2007-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2007-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2007-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2008-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2008-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2008-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2008-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2008-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2008-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2008-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2008-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2009-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2009-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2009-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2009-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2009-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2009-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2009-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2009-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2010-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2010-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2010-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2010-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2010-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2010-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2010-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2010-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2011-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2011-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2011-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2011-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2011-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2011-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2011-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2011-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2011-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2011-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2011-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2012-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2012-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2012-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2012-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2012-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2012-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2012-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2012-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2013-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2013-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2013-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2013-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2013-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2013-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2013-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2013-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2014-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2014-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2014-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2014-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2014-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2014-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2014-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2014-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2015-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2015-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2015-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2015-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2015-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2015-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2015-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2015-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2016-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2016-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2016-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2016-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2016-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2016-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2016-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2016-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2017-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2017-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2017-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2017-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2017-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2017-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2017-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2017-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2018-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2018-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2018-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2018-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2018-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2018-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2018-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2018-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2019-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2019-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2019-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2019-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2019-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2019-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2019-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2019-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2020-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2020-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2020-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2020-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2020-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2020-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2020-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2020-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2021-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2021-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2021-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2021-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2021-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2021-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2021-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2021-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2022-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2022-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2022-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2022-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2022-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2022-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2022-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2022-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2023-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2023-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2023-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2023-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2023-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2023-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2023-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2023-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2024-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2024-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2024-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2024-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2024-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2024-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2024-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2024-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2025-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2025-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2025-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2025-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2025-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2025-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2025-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2025-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2026-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2026-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2026-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2026-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2026-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2026-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2026-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2026-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2027-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2027-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2027-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2027-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2027-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2027-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2027-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2027-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2028-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2028-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2028-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2028-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2028-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2028-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2028-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2028-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2029-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2029-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2029-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2029-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2029-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2029-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2029-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2029-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2030-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2030-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2030-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2030-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2030-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2030-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2030-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2030-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2031-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2031-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2031-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2031-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2031-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2031-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2031-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2031-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2032-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2032-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2032-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2032-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2032-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2032-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2032-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2032-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2033-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2033-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2033-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2033-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2033-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2033-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2033-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2033-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2034-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2034-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2034-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2034-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2034-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2034-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2034-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2034-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2035-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2035-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2035-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2035-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2035-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2035-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2035-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2035-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2036-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2036-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2036-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2036-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2036-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2036-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2036-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2036-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "01:59:59", "2037-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "03:00:00", "2037-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:59:59", "2037-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Africa/Ceuta").format("HH:mm:ss"), "02:00:00", "2037-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Africa/Ceuta").zone(), -60, "2037-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Africa/Ceuta").zone(), -120, "2037-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Africa/Ceuta").zone(), -120, "2037-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Africa/Ceuta").zone(), -60, "2037-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	}
};