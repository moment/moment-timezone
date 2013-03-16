var moment = require("../../moment-timezone");

exports["Antarctica/Palmer"] = {

	"1964" : function (t) {
		t.equal(moment("1964-12-31T23:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1964-12-31T23:59:59+00:00 should be 23:59:59 zzz");

		t.equal(moment("1964-12-31T23:59:59+00:00").tz("Antarctica/Palmer").zone(), 0, "1964-12-31T23:59:59+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-01T00:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "21:00:00", "1965-01-01T00:00:00+00:00 should be 21:00:00 ARST");
		t.equal(moment("1965-03-01T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1965-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1965-03-01T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1965-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1965-10-15T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1965-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1965-10-15T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1965-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1965-01-01T00:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1965-01-01T00:00:00+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1965-03-01T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1965-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1965-03-01T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1965-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1965-10-15T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1965-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1965-10-15T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1965-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1966-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1966-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1966-10-15T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1966-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1966-10-15T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1966-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1966-03-01T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1966-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1966-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1966-10-15T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1966-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1966-10-15T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1966-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-02T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1967-04-02T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1967-04-02T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1967-04-02T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1967-10-01T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1967-10-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1967-10-01T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1967-10-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1967-04-02T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1967-04-02T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1967-04-02T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1967-04-02T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1967-10-01T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1967-10-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1967-10-01T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1967-10-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-07T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1968-04-07T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1968-04-07T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1968-04-07T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1968-10-06T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1968-10-06T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1968-10-06T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1968-10-06T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1968-04-07T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1968-04-07T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1968-04-07T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1968-04-07T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1968-10-06T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1968-10-06T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1968-10-06T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1968-10-06T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-06T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1969-04-06T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1969-04-06T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1969-04-06T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1969-10-05T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1969-10-05T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1969-10-05T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1969-10-05T04:00:00+00:00 should be 01:00:00 ART");

		t.equal(moment("1969-04-06T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1969-04-06T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1969-04-06T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1969-04-06T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1969-10-05T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1969-10-05T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1969-10-05T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1969-10-05T04:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-23T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1974-01-23T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1974-01-23T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1974-01-23T03:00:00+00:00 should be 01:00:00 ARST");
		t.equal(moment("1974-05-01T01:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1974-05-01T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1974-05-01T02:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1974-05-01T02:00:00+00:00 should be 23:00:00 ART");

		t.equal(moment("1974-01-23T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1974-01-23T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1974-01-23T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 120, "1974-01-23T03:00:00+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1974-05-01T01:59:59+00:00").tz("Antarctica/Palmer").zone(), 120, "1974-05-01T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1974-05-01T02:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1974-05-01T02:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-05-01T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1982-05-01T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1982-05-01T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1982-05-01T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1982-10-10T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1982-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1982-10-10T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1982-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1982-05-01T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1982-05-01T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1982-05-01T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1982-05-01T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1982-10-10T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1982-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1982-10-10T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1982-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-13T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1983-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1983-03-13T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1983-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1983-10-09T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1983-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1983-10-09T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1983-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1983-03-13T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1983-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1983-03-13T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1983-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1983-10-09T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1983-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1983-10-09T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1983-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-11T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1984-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1984-03-11T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1984-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1984-10-14T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1984-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1984-10-14T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1984-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1984-03-11T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1984-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1984-03-11T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1984-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1984-10-14T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1984-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1984-10-14T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1984-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-10T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1985-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1985-03-10T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1985-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1985-10-13T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1985-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1985-10-13T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1985-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1985-03-10T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1985-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1985-03-10T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1985-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1985-10-13T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1985-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1985-10-13T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1985-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-09T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1986-03-09T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1986-03-09T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1986-03-09T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1986-10-12T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1986-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1986-10-12T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1986-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1986-03-09T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1986-03-09T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1986-03-09T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1986-03-09T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1986-10-12T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1986-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1986-10-12T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1986-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-12T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1987-04-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1987-04-12T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1987-04-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1987-10-11T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1987-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1987-10-11T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1987-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1987-04-12T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1987-04-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1987-04-12T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1987-04-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1987-10-11T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1987-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1987-10-11T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1987-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-13T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1988-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1988-03-13T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1988-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1988-10-02T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1988-10-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1988-10-02T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1988-10-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1988-03-13T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1988-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1988-03-13T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1988-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1988-10-02T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1988-10-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1988-10-02T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1988-10-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-12T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1989-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1989-03-12T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1989-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1989-10-15T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1989-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1989-10-15T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1989-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1989-03-12T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1989-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1989-03-12T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1989-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1989-10-15T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1989-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1989-10-15T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1989-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-18T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1990-03-18T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1990-03-18T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1990-03-18T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1990-09-16T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1990-09-16T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1990-09-16T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1990-09-16T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1990-03-18T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1990-03-18T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1990-03-18T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1990-03-18T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1990-09-16T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1990-09-16T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1990-09-16T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1990-09-16T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-10T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1991-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1991-03-10T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1991-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1991-10-13T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1991-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1991-10-13T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1991-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1991-03-10T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1991-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1991-03-10T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1991-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1991-10-13T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1991-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1991-10-13T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1991-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-15T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1992-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1992-03-15T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1992-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1992-10-11T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1992-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1992-10-11T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1992-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1992-03-15T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1992-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1992-03-15T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1992-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1992-10-11T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1992-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1992-10-11T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1992-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-14T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1993-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1993-03-14T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1993-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1993-10-10T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1993-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1993-10-10T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1993-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1993-03-14T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1993-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1993-03-14T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1993-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1993-10-10T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1993-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1993-10-10T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1993-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-13T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1994-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1994-03-13T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1994-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1994-10-09T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1994-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1994-10-09T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1994-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1994-03-13T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1994-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1994-03-13T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1994-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1994-10-09T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1994-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1994-10-09T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1994-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-12T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1995-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1995-03-12T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1995-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1995-10-15T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1995-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1995-10-15T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1995-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1995-03-12T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1995-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1995-03-12T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1995-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1995-10-15T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1995-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1995-10-15T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1995-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-10T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1996-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1996-03-10T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1996-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1996-10-13T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1996-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1996-10-13T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1996-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1996-03-10T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1996-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1996-03-10T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1996-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1996-10-13T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1996-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1996-10-13T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1996-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-30T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1997-03-30T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1997-03-30T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1997-03-30T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1997-10-12T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1997-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1997-10-12T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1997-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1997-03-30T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1997-03-30T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1997-03-30T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1997-03-30T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1997-10-12T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1997-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1997-10-12T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1997-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-15T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1998-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1998-03-15T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1998-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1998-09-27T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1998-09-27T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1998-09-27T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1998-09-27T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1998-03-15T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1998-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1998-03-15T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1998-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1998-09-27T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1998-09-27T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1998-09-27T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1998-09-27T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1999-04-04T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1999-04-04T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "1999-04-04T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1999-10-10T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "1999-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1999-10-10T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "1999-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1999-04-04T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "1999-04-04T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1999-04-04T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "1999-04-04T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1999-10-10T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "1999-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1999-10-10T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "1999-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-12T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2000-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2000-03-12T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2000-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2000-10-15T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2000-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2000-10-15T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2000-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2000-03-12T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2000-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2000-03-12T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2000-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2000-10-15T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2000-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2000-10-15T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2000-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-11T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2001-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2001-03-11T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2001-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2001-10-14T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2001-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2001-10-14T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2001-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2001-03-11T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2001-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2001-03-11T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2001-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2001-10-14T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2001-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2001-10-14T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2001-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-10T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2002-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2002-03-10T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2002-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2002-10-13T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2002-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2002-10-13T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2002-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2002-03-10T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2002-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2002-03-10T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2002-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2002-10-13T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2002-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2002-10-13T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2002-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-09T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2003-03-09T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2003-03-09T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2003-03-09T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2003-10-12T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2003-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2003-10-12T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2003-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2003-03-09T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2003-03-09T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2003-03-09T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2003-03-09T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2003-10-12T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2003-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2003-10-12T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2003-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-14T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2004-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2004-03-14T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2004-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2004-10-10T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2004-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2004-10-10T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2004-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2004-03-14T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2004-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2004-03-14T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2004-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2004-10-10T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2004-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2004-10-10T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2004-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-13T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2005-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2005-03-13T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2005-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2005-10-09T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2005-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2005-10-09T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2005-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2005-03-13T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2005-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2005-03-13T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2005-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2005-10-09T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2005-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2005-10-09T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2005-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-12T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2006-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2006-03-12T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2006-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2006-10-15T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2006-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2006-10-15T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2006-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2006-03-12T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2006-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2006-03-12T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2006-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2006-10-15T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2006-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2006-10-15T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2006-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2007-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2007-03-11T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2007-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2007-10-14T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2007-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2007-10-14T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2007-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2007-03-11T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2007-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2007-03-11T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2007-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2007-10-14T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2007-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2007-10-14T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2007-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2008-03-30T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2008-03-30T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2008-03-30T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2008-10-12T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2008-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2008-10-12T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2008-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2008-03-30T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2008-03-30T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2008-03-30T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2008-03-30T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2008-10-12T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2008-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2008-10-12T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2008-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-15T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2009-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2009-03-15T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2009-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2009-10-11T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2009-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2009-10-11T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2009-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2009-03-15T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2009-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2009-03-15T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2009-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2009-10-11T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2009-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2009-10-11T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2009-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-04T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2010-04-04T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2010-04-04T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2010-04-04T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2010-10-10T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2010-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2010-10-10T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2010-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2010-04-04T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2010-04-04T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2010-04-04T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2010-04-04T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2010-10-10T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2010-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2010-10-10T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2010-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-05-08T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2011-05-08T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2011-05-08T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2011-05-08T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2011-08-21T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2011-08-21T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2011-08-21T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2011-08-21T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2011-05-08T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2011-05-08T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2011-05-08T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2011-05-08T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2011-08-21T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2011-08-21T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2011-08-21T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2011-08-21T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-04-29T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2012-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2012-04-29T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2012-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2012-09-02T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2012-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2012-09-02T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2012-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2012-04-29T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2012-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2012-04-29T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2012-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2012-09-02T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2012-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2012-09-02T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2012-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-28T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2013-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2013-04-28T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2013-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2013-09-08T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2013-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2013-09-08T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2013-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2013-04-28T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2013-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2013-04-28T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2013-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2013-09-08T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2013-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2013-09-08T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2013-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-27T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2014-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2014-04-27T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2014-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2014-09-07T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2014-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2014-09-07T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2014-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2014-04-27T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2014-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2014-04-27T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2014-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2014-09-07T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2014-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2014-09-07T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2014-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-26T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2015-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2015-04-26T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2015-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2015-09-06T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2015-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2015-09-06T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2015-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2015-04-26T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2015-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2015-04-26T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2015-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2015-09-06T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2015-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2015-09-06T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2015-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-24T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2016-04-24T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2016-04-24T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2016-04-24T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2016-09-04T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2016-09-04T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2016-09-04T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2016-09-04T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2016-04-24T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2016-04-24T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2016-04-24T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2016-04-24T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2016-09-04T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2016-09-04T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2016-09-04T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2016-09-04T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-23T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2017-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2017-04-23T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2017-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2017-09-03T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2017-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2017-09-03T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2017-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2017-04-23T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2017-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2017-04-23T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2017-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2017-09-03T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2017-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2017-09-03T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2017-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-29T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2018-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2018-04-29T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2018-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2018-09-02T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2018-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2018-09-02T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2018-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2018-04-29T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2018-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2018-04-29T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2018-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2018-09-02T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2018-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2018-09-02T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2018-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-28T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2019-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2019-04-28T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2019-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2019-09-08T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2019-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2019-09-08T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2019-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2019-04-28T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2019-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2019-04-28T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2019-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2019-09-08T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2019-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2019-09-08T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2019-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-26T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2020-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2020-04-26T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2020-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2020-09-06T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2020-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2020-09-06T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2020-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2020-04-26T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2020-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2020-04-26T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2020-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2020-09-06T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2020-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2020-09-06T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2020-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-25T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2021-04-25T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2021-04-25T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2021-04-25T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2021-09-05T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2021-09-05T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2021-09-05T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2021-09-05T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2021-04-25T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2021-04-25T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2021-04-25T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2021-04-25T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2021-09-05T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2021-09-05T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2021-09-05T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2021-09-05T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-24T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2022-04-24T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2022-04-24T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2022-04-24T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2022-09-04T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2022-09-04T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2022-09-04T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2022-09-04T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2022-04-24T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2022-04-24T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2022-04-24T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2022-04-24T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2022-09-04T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2022-09-04T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2022-09-04T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2022-09-04T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-23T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2023-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2023-04-23T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2023-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2023-09-03T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2023-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2023-09-03T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2023-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2023-04-23T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2023-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2023-04-23T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2023-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2023-09-03T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2023-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2023-09-03T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2023-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-28T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2024-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2024-04-28T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2024-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2024-09-08T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2024-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2024-09-08T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2024-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2024-04-28T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2024-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2024-04-28T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2024-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2024-09-08T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2024-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2024-09-08T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2024-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-27T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2025-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2025-04-27T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2025-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2025-09-07T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2025-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2025-09-07T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2025-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2025-04-27T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2025-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2025-04-27T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2025-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2025-09-07T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2025-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2025-09-07T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2025-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-26T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2026-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2026-04-26T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2026-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2026-09-06T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2026-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2026-09-06T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2026-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2026-04-26T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2026-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2026-04-26T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2026-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2026-09-06T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2026-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2026-09-06T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2026-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-25T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2027-04-25T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2027-04-25T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2027-04-25T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2027-09-05T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2027-09-05T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2027-09-05T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2027-09-05T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2027-04-25T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2027-04-25T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2027-04-25T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2027-04-25T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2027-09-05T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2027-09-05T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2027-09-05T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2027-09-05T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-23T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2028-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2028-04-23T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2028-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2028-09-03T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2028-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2028-09-03T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2028-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2028-04-23T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2028-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2028-04-23T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2028-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2028-09-03T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2028-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2028-09-03T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2028-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-29T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2029-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2029-04-29T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2029-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2029-09-02T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2029-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2029-09-02T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2029-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2029-04-29T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2029-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2029-04-29T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2029-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2029-09-02T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2029-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2029-09-02T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2029-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-28T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2030-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2030-04-28T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2030-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2030-09-08T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2030-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2030-09-08T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2030-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2030-04-28T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2030-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2030-04-28T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2030-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2030-09-08T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2030-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2030-09-08T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2030-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-27T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2031-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2031-04-27T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2031-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2031-09-07T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2031-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2031-09-07T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2031-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2031-04-27T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2031-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2031-04-27T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2031-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2031-09-07T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2031-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2031-09-07T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2031-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-25T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2032-04-25T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2032-04-25T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2032-04-25T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2032-09-05T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2032-09-05T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2032-09-05T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2032-09-05T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2032-04-25T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2032-04-25T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2032-04-25T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2032-04-25T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2032-09-05T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2032-09-05T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2032-09-05T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2032-09-05T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-24T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2033-04-24T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2033-04-24T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2033-04-24T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2033-09-04T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2033-09-04T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2033-09-04T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2033-09-04T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2033-04-24T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2033-04-24T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2033-04-24T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2033-04-24T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2033-09-04T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2033-09-04T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2033-09-04T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2033-09-04T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-23T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2034-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2034-04-23T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2034-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2034-09-03T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2034-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2034-09-03T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2034-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2034-04-23T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2034-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2034-04-23T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2034-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2034-09-03T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2034-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2034-09-03T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2034-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-29T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2035-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2035-04-29T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2035-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2035-09-02T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2035-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2035-09-02T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2035-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2035-04-29T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2035-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2035-04-29T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2035-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2035-09-02T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2035-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2035-09-02T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2035-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-27T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2036-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2036-04-27T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2036-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2036-09-07T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2036-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2036-09-07T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2036-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2036-04-27T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2036-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2036-04-27T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2036-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2036-09-07T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2036-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2036-09-07T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2036-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-26T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2037-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2037-04-26T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:00:00", "2037-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2037-09-06T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "23:59:59", "2037-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2037-09-06T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm:ss"), "01:00:00", "2037-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2037-04-26T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2037-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2037-04-26T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2037-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2037-09-06T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2037-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2037-09-06T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2037-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	}
};