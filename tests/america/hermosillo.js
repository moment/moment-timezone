var moment = require("../../index");

exports["America/Hermosillo"] = {

	"1922" : function (t) {
		t.equal(moment("1922-01-01T06:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:36:07", "1922-01-01T06:59:59+00:00 should be 23:36:07 LMT");
		t.equal(moment("1922-01-01T07:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "00:00:00", "1922-01-01T07:00:00+00:00 should be 00:00:00 MST");

		t.equal(moment("1922-01-01T06:59:59+00:00").tz("America/Hermosillo").zone(), 26632 / 60, "1922-01-01T06:59:59+00:00 should be 26632 / 60 minutes offset in LMT");
		t.equal(moment("1922-01-01T07:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1922-01-01T07:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-06-11T05:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "22:59:59", "1927-06-11T05:59:59+00:00 should be 22:59:59 MST");
		t.equal(moment("1927-06-11T06:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "00:00:00", "1927-06-11T06:00:00+00:00 should be 00:00:00 CST");

		t.equal(moment("1927-06-11T05:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1927-06-11T05:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1927-06-11T06:00:00+00:00").tz("America/Hermosillo").zone(), 360, "1927-06-11T06:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-11-15T05:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:59:59", "1930-11-15T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1930-11-15T06:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:00:00", "1930-11-15T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1930-11-15T05:59:59+00:00").tz("America/Hermosillo").zone(), 360, "1930-11-15T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1930-11-15T06:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1930-11-15T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-05-02T05:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "22:59:59", "1931-05-02T05:59:59+00:00 should be 22:59:59 MST");
		t.equal(moment("1931-05-02T06:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "00:00:00", "1931-05-02T06:00:00+00:00 should be 00:00:00 CST");
		t.equal(moment("1931-10-01T05:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:59:59", "1931-10-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1931-10-01T06:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:00:00", "1931-10-01T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1931-05-02T05:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1931-05-02T05:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1931-05-02T06:00:00+00:00").tz("America/Hermosillo").zone(), 360, "1931-05-02T06:00:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1931-10-01T05:59:59+00:00").tz("America/Hermosillo").zone(), 360, "1931-10-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1931-10-01T06:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1931-10-01T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T06:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:59:59", "1932-04-01T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1932-04-01T07:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:00:00", "1932-04-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1932-04-01T06:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1932-04-01T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1932-04-01T07:00:00+00:00").tz("America/Hermosillo").zone(), 360, "1932-04-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-04-24T05:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:59:59", "1942-04-24T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1942-04-24T06:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:00:00", "1942-04-24T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1942-04-24T05:59:59+00:00").tz("America/Hermosillo").zone(), 360, "1942-04-24T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1942-04-24T06:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1942-04-24T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-01-14T06:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:59:59", "1949-01-14T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1949-01-14T07:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:00:00", "1949-01-14T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1949-01-14T06:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1949-01-14T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1949-01-14T07:00:00+00:00").tz("America/Hermosillo").zone(), 480, "1949-01-14T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-01-01T07:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "23:59:59", "1970-01-01T07:59:59+00:00 should be 23:59:59 PST");
		t.equal(moment("1970-01-01T08:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:00:00", "1970-01-01T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1970-01-01T07:59:59+00:00").tz("America/Hermosillo").zone(), 480, "1970-01-01T07:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1970-01-01T08:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1970-01-01T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T08:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:59:59", "1996-04-07T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1996-04-07T09:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "03:00:00", "1996-04-07T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1996-10-27T07:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:59:59", "1996-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1996-10-27T08:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:00:00", "1996-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1996-04-07T08:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1996-04-07T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1996-04-07T09:00:00+00:00").tz("America/Hermosillo").zone(), 360, "1996-04-07T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1996-10-27T07:59:59+00:00").tz("America/Hermosillo").zone(), 360, "1996-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1996-10-27T08:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1996-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T08:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:59:59", "1997-04-06T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1997-04-06T09:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "03:00:00", "1997-04-06T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1997-10-26T07:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:59:59", "1997-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1997-10-26T08:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:00:00", "1997-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1997-04-06T08:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1997-04-06T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1997-04-06T09:00:00+00:00").tz("America/Hermosillo").zone(), 360, "1997-04-06T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1997-10-26T07:59:59+00:00").tz("America/Hermosillo").zone(), 360, "1997-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1997-10-26T08:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1997-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T08:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:59:59", "1998-04-05T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1998-04-05T09:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "03:00:00", "1998-04-05T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1998-10-25T07:59:59+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:59:59", "1998-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1998-10-25T08:00:00+00:00").tz("America/Hermosillo").format("HH:mm:ss"), "01:00:00", "1998-10-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1998-04-05T08:59:59+00:00").tz("America/Hermosillo").zone(), 420, "1998-04-05T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1998-04-05T09:00:00+00:00").tz("America/Hermosillo").zone(), 360, "1998-04-05T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1998-10-25T07:59:59+00:00").tz("America/Hermosillo").zone(), 360, "1998-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1998-10-25T08:00:00+00:00").tz("America/Hermosillo").zone(), 420, "1998-10-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	}
};