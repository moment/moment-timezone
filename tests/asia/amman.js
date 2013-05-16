var moment = require("../../index");

exports["Asia/Amman"] = {

	"1930" : function (t) {
		t.equal(moment("1930-12-31T21:36:15+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1930-12-31T21:36:15+00:00 should be 23:59:59 LMT");
		t.equal(moment("1930-12-31T21:36:16+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:36:16", "1930-12-31T21:36:16+00:00 should be 23:36:16 EET");

		t.equal(moment("1930-12-31T21:36:15+00:00").tz("Asia/Amman").zone(), -8624 / 60, "1930-12-31T21:36:15+00:00 should be -8624 / 60 minutes offset in LMT");
		t.equal(moment("1930-12-31T21:36:16+00:00").tz("Asia/Amman").zone(), -120, "1930-12-31T21:36:16+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-06-05T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1973-06-05T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1973-06-05T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1973-06-05T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1973-09-30T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1973-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1973-09-30T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1973-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1973-06-05T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1973-06-05T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1973-06-05T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1973-06-05T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-09-30T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1973-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-09-30T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1973-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1974-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1974-04-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1974-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1974-09-30T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1974-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1974-09-30T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1974-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1974-04-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1974-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1974-04-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1974-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-09-30T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1974-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-09-30T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1974-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1975-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1975-04-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1975-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1975-09-30T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1975-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1975-09-30T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1975-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1975-04-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1975-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1975-04-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1975-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-09-30T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1975-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-09-30T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1975-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1976-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1976-04-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1976-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1976-10-31T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1976-10-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1976-10-31T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1976-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1976-04-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1976-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1976-04-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1976-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-10-31T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1976-10-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-10-31T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1976-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1977-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1977-04-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1977-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1977-09-30T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1977-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1977-09-30T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1977-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1977-04-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1977-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1977-04-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1977-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-09-30T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1977-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-09-30T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1977-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1978-04-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1978-04-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1978-04-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1978-09-29T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1978-09-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1978-09-29T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1978-09-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1978-04-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1978-04-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1978-04-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1978-04-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-09-29T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1978-09-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-09-29T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1978-09-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1985-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1985-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1985-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1985-09-30T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1985-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1985-09-30T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1985-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1985-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1985-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1985-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1985-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1985-09-30T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1985-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1985-09-30T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1985-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-03T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1986-04-03T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1986-04-03T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1986-04-03T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1986-10-02T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1986-10-02T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1986-10-02T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1986-10-02T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1986-04-03T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1986-04-03T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1986-04-03T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1986-04-03T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-10-02T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1986-10-02T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-10-02T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1986-10-02T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-02T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1987-04-02T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1987-04-02T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1987-04-02T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1987-10-01T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1987-10-01T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1987-10-01T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1987-10-01T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1987-04-02T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1987-04-02T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1987-04-02T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1987-04-02T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-10-01T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1987-10-01T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-10-01T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1987-10-01T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1988-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1988-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1988-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1988-10-06T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1988-10-06T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1988-10-06T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1988-10-06T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1988-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1988-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1988-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1988-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-10-06T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1988-10-06T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-10-06T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1988-10-06T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-05-07T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1989-05-07T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1989-05-07T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1989-05-07T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1989-10-05T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1989-10-05T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1989-10-05T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1989-10-05T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1989-05-07T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1989-05-07T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1989-05-07T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1989-05-07T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-10-05T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1989-10-05T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-10-05T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1989-10-05T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1990-04-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1990-04-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1990-04-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1990-10-04T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1990-10-04T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1990-10-04T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1990-10-04T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1990-04-26T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1990-04-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1990-04-26T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1990-04-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-10-04T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1990-10-04T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-10-04T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1990-10-04T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-16T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1991-04-16T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1991-04-16T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1991-04-16T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1991-09-26T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1991-09-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1991-09-26T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1991-09-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1991-04-16T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1991-04-16T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1991-04-16T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1991-04-16T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-26T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1991-09-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-26T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1991-09-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-09T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1992-04-09T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1992-04-09T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1992-04-09T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1992-10-01T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1992-10-01T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1992-10-01T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1992-10-01T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1992-04-09T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1992-04-09T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1992-04-09T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1992-04-09T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-10-01T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1992-10-01T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-10-01T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1992-10-01T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-01T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1993-04-01T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1993-04-01T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1993-04-01T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1993-09-30T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1993-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1993-09-30T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1993-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1993-04-01T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1993-04-01T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1993-04-01T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1993-04-01T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-30T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1993-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-30T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1993-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1994-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1994-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1994-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1994-09-15T20:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1994-09-15T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1994-09-15T21:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:00:00", "1994-09-15T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1994-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1994-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1994-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1994-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-15T20:59:59+00:00").tz("Asia/Amman").zone(), -180, "1994-09-15T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-15T21:00:00+00:00").tz("Asia/Amman").zone(), -120, "1994-09-15T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-06T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1995-04-06T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1995-04-06T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1995-04-06T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1995-09-14T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "1995-09-14T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1995-09-14T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "1995-09-14T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1995-04-06T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1995-04-06T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1995-04-06T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1995-04-06T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-14T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "1995-09-14T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-14T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "1995-09-14T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-04T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1996-04-04T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1996-04-04T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1996-04-04T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1996-09-19T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "1996-09-19T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1996-09-19T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "1996-09-19T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1996-04-04T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1996-04-04T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-04-04T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1996-04-04T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-19T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "1996-09-19T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-19T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "1996-09-19T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-03T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1997-04-03T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1997-04-03T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1997-04-03T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1997-09-18T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "1997-09-18T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1997-09-18T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "1997-09-18T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1997-04-03T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1997-04-03T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1997-04-03T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1997-04-03T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-18T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "1997-09-18T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-18T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "1997-09-18T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-02T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1998-04-02T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1998-04-02T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1998-04-02T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1998-09-17T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "1998-09-17T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1998-09-17T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "1998-09-17T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1998-04-02T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1998-04-02T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1998-04-02T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1998-04-02T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-17T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "1998-09-17T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-17T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "1998-09-17T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-06-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "1999-06-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1999-06-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "1999-06-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1999-09-23T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "1999-09-23T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1999-09-23T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "1999-09-23T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1999-06-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "1999-06-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1999-06-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "1999-06-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-09-23T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "1999-09-23T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-09-23T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "1999-09-23T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2000-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2000-03-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2000-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2000-09-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2000-09-28T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2000-09-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2000-09-28T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2000-03-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2000-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2000-03-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2000-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-09-28T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2000-09-28T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-09-28T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2000-09-28T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2001-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2001-03-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2001-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2001-09-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2001-09-27T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2001-09-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2001-09-27T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2001-03-28T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2001-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2001-03-28T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2001-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-09-27T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2001-09-27T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-09-27T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2001-09-27T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2002-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2002-03-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2002-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2002-09-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2002-09-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2002-09-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2002-09-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2002-03-28T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2002-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2002-03-28T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2002-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-09-26T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2002-09-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-09-26T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2002-09-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2003-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2003-03-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2003-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2003-10-23T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2003-10-23T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2003-10-23T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2003-10-23T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2003-03-27T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2003-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2003-03-27T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2003-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-23T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2003-10-23T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-23T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2003-10-23T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2004-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2004-03-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2004-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2004-10-14T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2004-10-14T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2004-10-14T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2004-10-14T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2004-03-25T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2004-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2004-03-25T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2004-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-10-14T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2004-10-14T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-10-14T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2004-10-14T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2005-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2005-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2005-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2005-09-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2005-09-29T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2005-09-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2005-09-29T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2005-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2005-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2005-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2005-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-09-29T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2005-09-29T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-09-29T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2005-09-29T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2006-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2006-03-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2006-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2006-10-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2006-10-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2006-10-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2006-10-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2006-03-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2006-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2006-03-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2006-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-10-26T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2006-10-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-10-26T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2006-10-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2007-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2007-03-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2007-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2007-10-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2007-10-25T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2007-10-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2007-10-25T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2007-03-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2007-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2007-03-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2007-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-10-25T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2007-10-25T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-10-25T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2007-10-25T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2008-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2008-03-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2008-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2008-10-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2008-10-30T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2008-10-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2008-10-30T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2008-03-27T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2008-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2008-03-27T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2008-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-30T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2008-10-30T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-30T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2008-10-30T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2009-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2009-03-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2009-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2009-10-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2009-10-29T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2009-10-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2009-10-29T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2009-03-26T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2009-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2009-03-26T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2009-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-29T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2009-10-29T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-29T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2009-10-29T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2010-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2010-03-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2010-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2010-10-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2010-10-28T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2010-10-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2010-10-28T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2010-03-25T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2010-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-03-25T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2010-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-28T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2010-10-28T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-28T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2010-10-28T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2011-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2011-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2011-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2011-10-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2011-10-27T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2011-10-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2011-10-27T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2011-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2011-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2011-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-10-27T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2011-10-27T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-10-27T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2011-10-27T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2012-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2012-03-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2012-03-29T22:00:00+00:00 should be 01:00:00 EEST");

		t.equal(moment("2012-03-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2012-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2012-03-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2012-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-10-24T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2013-10-24T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2013-10-24T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2013-10-24T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2013-10-24T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2013-10-24T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2013-10-24T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2013-10-24T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2014-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2014-03-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2014-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2014-10-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2014-10-30T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2014-10-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2014-10-30T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2014-03-27T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2014-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2014-03-27T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2014-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2014-10-30T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2014-10-30T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2014-10-30T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2014-10-30T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2015-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2015-03-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2015-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2015-10-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2015-10-29T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2015-10-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2015-10-29T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2015-03-26T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2015-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2015-03-26T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2015-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2015-10-29T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2015-10-29T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2015-10-29T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2015-10-29T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2016-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2016-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2016-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2016-10-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2016-10-27T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2016-10-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2016-10-27T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2016-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2016-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2016-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2016-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2016-10-27T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2016-10-27T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2016-10-27T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2016-10-27T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2017-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2017-03-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2017-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2017-10-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2017-10-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2017-10-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2017-10-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2017-03-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2017-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2017-03-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2017-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2017-10-26T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2017-10-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2017-10-26T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2017-10-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2018-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2018-03-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2018-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2018-10-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2018-10-25T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2018-10-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2018-10-25T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2018-03-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2018-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2018-03-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2018-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2018-10-25T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2018-10-25T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2018-10-25T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2018-10-25T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2019-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2019-03-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2019-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2019-10-24T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2019-10-24T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2019-10-24T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2019-10-24T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2019-03-28T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2019-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2019-03-28T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2019-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2019-10-24T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2019-10-24T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2019-10-24T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2019-10-24T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2020-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2020-03-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2020-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2020-10-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2020-10-29T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2020-10-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2020-10-29T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2020-03-26T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2020-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2020-03-26T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2020-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2020-10-29T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2020-10-29T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2020-10-29T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2020-10-29T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2021-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2021-03-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2021-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2021-10-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2021-10-28T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2021-10-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2021-10-28T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2021-03-25T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2021-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2021-03-25T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2021-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2021-10-28T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2021-10-28T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2021-10-28T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2021-10-28T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2022-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2022-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2022-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2022-10-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2022-10-27T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2022-10-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2022-10-27T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2022-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2022-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2022-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2022-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2022-10-27T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2022-10-27T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2022-10-27T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2022-10-27T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2023-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2023-03-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2023-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2023-10-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2023-10-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2023-10-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2023-10-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2023-03-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2023-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2023-03-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2023-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2023-10-26T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2023-10-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2023-10-26T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2023-10-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2024-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2024-03-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2024-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2024-10-24T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2024-10-24T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2024-10-24T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2024-10-24T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2024-03-28T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2024-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2024-03-28T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2024-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2024-10-24T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2024-10-24T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2024-10-24T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2024-10-24T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2025-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2025-03-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2025-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2025-10-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2025-10-30T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2025-10-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2025-10-30T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2025-03-27T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2025-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2025-03-27T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2025-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2025-10-30T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2025-10-30T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2025-10-30T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2025-10-30T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2026-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2026-03-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2026-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2026-10-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2026-10-29T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2026-10-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2026-10-29T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2026-03-26T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2026-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2026-03-26T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2026-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2026-10-29T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2026-10-29T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2026-10-29T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2026-10-29T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2027-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2027-03-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2027-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2027-10-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2027-10-28T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2027-10-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2027-10-28T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2027-03-25T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2027-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2027-03-25T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2027-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2027-10-28T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2027-10-28T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2027-10-28T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2027-10-28T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2028-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2028-03-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2028-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2028-10-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2028-10-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2028-10-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2028-10-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2028-03-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2028-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2028-03-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2028-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2028-10-26T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2028-10-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2028-10-26T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2028-10-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2029-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2029-03-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2029-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2029-10-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2029-10-25T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2029-10-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2029-10-25T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2029-03-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2029-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2029-03-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2029-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2029-10-25T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2029-10-25T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2029-10-25T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2029-10-25T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2030-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2030-03-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2030-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2030-10-24T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2030-10-24T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2030-10-24T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2030-10-24T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2030-03-28T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2030-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2030-03-28T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2030-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2030-10-24T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2030-10-24T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2030-10-24T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2030-10-24T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2031-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2031-03-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2031-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2031-10-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2031-10-30T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2031-10-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2031-10-30T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2031-03-27T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2031-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2031-03-27T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2031-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2031-10-30T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2031-10-30T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2031-10-30T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2031-10-30T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2032-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2032-03-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2032-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2032-10-28T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2032-10-28T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2032-10-28T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2032-10-28T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2032-03-25T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2032-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2032-03-25T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2032-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2032-10-28T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2032-10-28T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2032-10-28T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2032-10-28T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-31T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2033-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2033-03-31T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2033-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2033-10-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2033-10-27T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2033-10-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2033-10-27T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2033-03-31T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2033-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2033-03-31T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2033-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2033-10-27T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2033-10-27T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2033-10-27T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2033-10-27T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2034-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2034-03-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2034-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2034-10-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2034-10-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2034-10-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2034-10-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2034-03-30T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2034-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2034-03-30T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2034-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2034-10-26T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2034-10-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2034-10-26T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2034-10-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2035-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2035-03-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2035-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2035-10-25T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2035-10-25T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2035-10-25T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2035-10-25T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2035-03-29T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2035-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2035-03-29T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2035-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2035-10-25T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2035-10-25T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2035-10-25T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2035-10-25T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-27T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2036-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2036-03-27T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2036-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2036-10-30T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2036-10-30T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2036-10-30T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2036-10-30T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2036-03-27T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2036-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2036-03-27T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2036-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2036-10-30T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2036-10-30T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2036-10-30T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2036-10-30T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-26T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "23:59:59", "2037-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2037-03-26T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "01:00:00", "2037-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2037-10-29T21:59:59+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:59:59", "2037-10-29T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2037-10-29T22:00:00+00:00").tz("Asia/Amman").format("HH:mm:ss"), "00:00:00", "2037-10-29T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2037-03-26T21:59:59+00:00").tz("Asia/Amman").zone(), -120, "2037-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2037-03-26T22:00:00+00:00").tz("Asia/Amman").zone(), -180, "2037-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2037-10-29T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2037-10-29T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2037-10-29T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2037-10-29T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	}
};