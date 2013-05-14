var moment = require("../../index");

exports["Australia/Lord_Howe"] = {

	"1981" : function (t) {
		t.equal(moment("1981-02-28T13:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "23:59:59", "1981-02-28T13:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1981-02-28T14:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "00:30:00", "1981-02-28T14:00:00+00:00 should be 00:30:00 LHST");
		t.equal(moment("1981-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1981-10-24T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1981-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "03:00:00", "1981-10-24T15:30:00+00:00 should be 03:00:00 LHST");

		t.equal(moment("1981-02-28T13:59:59+00:00").tz("Australia/Lord_Howe").zone(), -600, "1981-02-28T13:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1981-02-28T14:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1981-02-28T14:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1981-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1981-10-24T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1981-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -690, "1981-10-24T15:30:00+00:00 should be -690 minutes offset in LHST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-06T14:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1982-03-06T14:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1982-03-06T14:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:00:00", "1982-03-06T14:30:00+00:00 should be 01:00:00 LHST");
		t.equal(moment("1982-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1982-10-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1982-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "03:00:00", "1982-10-30T15:30:00+00:00 should be 03:00:00 LHST");

		t.equal(moment("1982-03-06T14:29:59+00:00").tz("Australia/Lord_Howe").zone(), -690, "1982-03-06T14:29:59+00:00 should be -690 minutes offset in LHST");
		t.equal(moment("1982-03-06T14:30:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1982-03-06T14:30:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1982-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1982-10-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1982-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -690, "1982-10-30T15:30:00+00:00 should be -690 minutes offset in LHST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-05T14:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1983-03-05T14:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1983-03-05T14:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:00:00", "1983-03-05T14:30:00+00:00 should be 01:00:00 LHST");
		t.equal(moment("1983-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1983-10-29T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1983-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "03:00:00", "1983-10-29T15:30:00+00:00 should be 03:00:00 LHST");

		t.equal(moment("1983-03-05T14:29:59+00:00").tz("Australia/Lord_Howe").zone(), -690, "1983-03-05T14:29:59+00:00 should be -690 minutes offset in LHST");
		t.equal(moment("1983-03-05T14:30:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1983-03-05T14:30:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1983-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1983-10-29T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1983-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -690, "1983-10-29T15:30:00+00:00 should be -690 minutes offset in LHST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T14:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1984-03-03T14:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1984-03-03T14:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:00:00", "1984-03-03T14:30:00+00:00 should be 01:00:00 LHST");
		t.equal(moment("1984-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1984-10-27T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1984-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "03:00:00", "1984-10-27T15:30:00+00:00 should be 03:00:00 LHST");

		t.equal(moment("1984-03-03T14:29:59+00:00").tz("Australia/Lord_Howe").zone(), -690, "1984-03-03T14:29:59+00:00 should be -690 minutes offset in LHST");
		t.equal(moment("1984-03-03T14:30:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1984-03-03T14:30:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1984-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1984-10-27T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1984-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -690, "1984-10-27T15:30:00+00:00 should be -690 minutes offset in LHST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-02T14:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1985-03-02T14:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1985-03-02T14:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:00:00", "1985-03-02T14:30:00+00:00 should be 01:00:00 LHST");
		t.equal(moment("1985-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1985-10-26T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1985-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1985-10-26T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1985-03-02T14:29:59+00:00").tz("Australia/Lord_Howe").zone(), -690, "1985-03-02T14:29:59+00:00 should be -690 minutes offset in LHST");
		t.equal(moment("1985-03-02T14:30:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1985-03-02T14:30:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1985-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1985-10-26T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1985-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1985-10-26T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1986-03-15T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1986-03-15T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1986-03-15T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1986-10-18T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1986-10-18T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1986-10-18T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1986-10-18T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1986-03-15T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1986-03-15T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1986-03-15T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1986-03-15T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1986-10-18T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1986-10-18T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1986-10-18T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1986-10-18T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-14T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1987-03-14T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1987-03-14T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1987-03-14T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1987-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1987-10-24T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1987-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1987-10-24T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1987-03-14T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1987-03-14T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1987-03-14T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1987-03-14T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1987-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1987-10-24T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1987-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1987-10-24T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-19T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1988-03-19T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1988-03-19T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1988-03-19T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1988-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1988-10-29T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1988-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1988-10-29T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1988-03-19T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1988-03-19T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1988-03-19T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1988-03-19T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1988-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1988-10-29T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1988-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1988-10-29T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-18T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1989-03-18T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1989-03-18T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1989-03-18T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1989-10-28T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1989-10-28T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1989-10-28T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1989-10-28T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1989-03-18T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1989-03-18T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1989-03-18T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1989-03-18T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1989-10-28T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1989-10-28T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1989-10-28T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1989-10-28T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-03T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1990-03-03T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1990-03-03T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1990-03-03T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1990-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1990-10-27T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1990-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1990-10-27T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1990-03-03T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1990-03-03T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1990-03-03T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1990-03-03T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1990-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1990-10-27T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1990-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1990-10-27T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-02T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1991-03-02T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1991-03-02T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1991-03-02T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1991-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1991-10-26T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1991-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1991-10-26T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1991-03-02T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1991-03-02T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1991-03-02T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1991-03-02T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1991-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1991-10-26T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1991-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1991-10-26T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-02-29T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1992-02-29T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1992-02-29T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1992-02-29T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1992-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1992-10-24T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1992-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1992-10-24T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1992-02-29T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1992-02-29T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1992-02-29T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1992-02-29T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1992-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1992-10-24T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1992-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1992-10-24T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-06T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1993-03-06T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1993-03-06T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1993-03-06T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1993-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1993-10-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1993-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1993-10-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1993-03-06T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1993-03-06T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1993-03-06T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1993-03-06T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1993-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1993-10-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1993-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1993-10-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-05T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1994-03-05T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1994-03-05T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1994-03-05T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1994-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1994-10-29T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1994-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1994-10-29T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1994-03-05T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1994-03-05T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1994-03-05T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1994-03-05T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1994-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1994-10-29T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1994-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1994-10-29T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-04T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1995-03-04T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1995-03-04T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1995-03-04T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1995-10-28T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1995-10-28T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1995-10-28T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1995-10-28T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1995-03-04T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1995-03-04T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1995-03-04T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1995-03-04T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1995-10-28T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1995-10-28T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1995-10-28T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1995-10-28T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1996-03-30T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1996-03-30T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1996-03-30T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1996-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1996-10-26T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1996-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1996-10-26T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1996-03-30T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1996-03-30T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1996-03-30T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1996-03-30T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1996-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1996-10-26T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1996-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1996-10-26T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1997-03-29T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1997-03-29T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1997-03-29T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1997-10-25T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1997-10-25T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1997-10-25T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1997-10-25T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1997-03-29T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1997-03-29T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1997-03-29T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1997-03-29T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1997-10-25T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1997-10-25T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1997-10-25T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1997-10-25T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1998-03-28T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1998-03-28T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1998-03-28T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1998-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1998-10-24T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1998-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1998-10-24T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1998-03-28T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1998-03-28T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1998-03-28T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1998-03-28T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1998-10-24T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1998-10-24T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1998-10-24T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1998-10-24T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1999-03-27T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1999-03-27T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "1999-03-27T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("1999-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "1999-10-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("1999-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "1999-10-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("1999-03-27T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "1999-03-27T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("1999-03-27T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "1999-03-27T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1999-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "1999-10-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("1999-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "1999-10-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2000-03-25T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2000-03-25T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2000-03-25T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2000-08-26T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2000-08-26T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2000-08-26T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2000-08-26T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2000-03-25T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2000-03-25T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2000-03-25T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2000-03-25T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2000-08-26T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2000-08-26T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2000-08-26T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2000-08-26T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2001-03-24T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2001-03-24T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2001-03-24T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2001-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2001-10-27T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2001-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2001-10-27T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2001-03-24T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2001-03-24T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2001-03-24T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2001-03-24T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2001-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2001-10-27T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2001-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2001-10-27T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2002-03-30T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2002-03-30T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2002-03-30T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2002-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2002-10-26T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2002-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2002-10-26T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2002-03-30T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2002-03-30T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2002-03-30T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2002-03-30T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2002-10-26T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2002-10-26T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2002-10-26T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2002-10-26T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2003-03-29T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2003-03-29T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2003-03-29T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2003-10-25T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2003-10-25T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2003-10-25T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2003-10-25T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2003-03-29T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2003-03-29T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2003-03-29T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2003-03-29T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2003-10-25T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2003-10-25T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2003-10-25T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2003-10-25T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2004-03-27T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2004-03-27T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2004-03-27T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2004-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2004-10-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2004-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2004-10-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2004-03-27T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2004-03-27T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2004-03-27T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2004-03-27T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2004-10-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2004-10-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2004-10-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2004-10-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2005-03-26T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2005-03-26T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2005-03-26T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2005-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2005-10-29T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2005-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2005-10-29T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2005-03-26T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2005-03-26T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2005-03-26T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2005-03-26T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2005-10-29T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2005-10-29T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2005-10-29T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2005-10-29T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2006-04-01T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2006-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2006-04-01T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2006-10-28T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2006-10-28T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2006-10-28T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2006-10-28T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2006-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2006-04-01T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2006-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2006-04-01T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2006-10-28T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2006-10-28T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2006-10-28T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2006-10-28T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2007-03-24T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2007-03-24T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2007-03-24T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2007-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2007-10-27T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2007-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2007-10-27T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2007-03-24T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2007-03-24T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2007-03-24T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2007-03-24T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2007-10-27T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2007-10-27T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2007-10-27T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2007-10-27T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2008-04-05T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2008-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2008-04-05T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2008-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2008-10-04T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2008-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2008-10-04T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2008-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2008-04-05T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2008-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2008-04-05T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2008-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2008-10-04T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2008-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2008-10-04T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2009-04-04T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2009-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2009-04-04T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2009-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2009-10-03T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2009-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2009-10-03T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2009-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2009-04-04T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2009-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2009-04-04T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2009-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2009-10-03T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2009-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2009-10-03T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2010-04-03T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2010-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2010-04-03T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2010-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2010-10-02T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2010-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2010-10-02T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2010-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2010-04-03T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2010-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2010-04-03T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2010-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2010-10-02T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2010-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2010-10-02T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2011-04-02T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2011-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2011-04-02T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2011-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2011-10-01T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2011-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2011-10-01T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2011-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2011-04-02T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2011-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2011-04-02T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2011-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2011-10-01T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2011-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2011-10-01T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2012-03-31T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2012-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2012-03-31T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2012-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2012-10-06T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2012-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2012-10-06T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2012-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2012-03-31T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2012-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2012-03-31T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2012-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2012-10-06T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2012-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2012-10-06T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2013-04-06T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2013-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2013-04-06T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2013-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2013-10-05T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2013-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2013-10-05T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2013-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2013-04-06T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2013-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2013-04-06T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2013-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2013-10-05T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2013-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2013-10-05T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2014-04-05T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2014-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2014-04-05T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2014-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2014-10-04T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2014-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2014-10-04T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2014-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2014-04-05T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2014-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2014-04-05T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2014-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2014-10-04T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2014-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2014-10-04T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2015-04-04T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2015-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2015-04-04T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2015-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2015-10-03T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2015-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2015-10-03T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2015-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2015-04-04T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2015-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2015-04-04T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2015-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2015-10-03T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2015-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2015-10-03T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2016-04-02T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2016-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2016-04-02T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2016-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2016-10-01T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2016-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2016-10-01T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2016-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2016-04-02T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2016-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2016-04-02T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2016-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2016-10-01T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2016-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2016-10-01T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2017-04-01T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2017-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2017-04-01T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2017-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2017-09-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2017-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2017-09-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2017-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2017-04-01T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2017-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2017-04-01T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2017-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2017-09-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2017-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2017-09-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2018-03-31T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2018-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2018-03-31T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2018-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2018-10-06T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2018-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2018-10-06T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2018-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2018-03-31T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2018-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2018-03-31T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2018-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2018-10-06T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2018-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2018-10-06T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2019-04-06T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2019-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2019-04-06T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2019-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2019-10-05T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2019-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2019-10-05T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2019-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2019-04-06T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2019-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2019-04-06T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2019-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2019-10-05T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2019-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2019-10-05T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2020-04-04T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2020-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2020-04-04T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2020-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2020-10-03T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2020-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2020-10-03T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2020-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2020-04-04T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2020-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2020-04-04T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2020-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2020-10-03T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2020-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2020-10-03T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2021-04-03T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2021-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2021-04-03T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2021-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2021-10-02T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2021-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2021-10-02T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2021-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2021-04-03T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2021-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2021-04-03T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2021-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2021-10-02T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2021-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2021-10-02T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2022-04-02T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2022-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2022-04-02T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2022-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2022-10-01T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2022-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2022-10-01T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2022-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2022-04-02T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2022-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2022-04-02T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2022-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2022-10-01T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2022-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2022-10-01T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2023-04-01T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2023-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2023-04-01T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2023-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2023-09-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2023-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2023-09-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2023-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2023-04-01T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2023-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2023-04-01T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2023-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2023-09-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2023-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2023-09-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2024-04-06T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2024-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2024-04-06T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2024-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2024-10-05T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2024-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2024-10-05T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2024-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2024-04-06T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2024-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2024-04-06T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2024-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2024-10-05T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2024-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2024-10-05T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2025-04-05T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2025-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2025-04-05T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2025-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2025-10-04T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2025-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2025-10-04T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2025-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2025-04-05T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2025-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2025-04-05T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2025-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2025-10-04T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2025-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2025-10-04T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2026-04-04T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2026-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2026-04-04T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2026-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2026-10-03T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2026-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2026-10-03T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2026-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2026-04-04T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2026-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2026-04-04T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2026-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2026-10-03T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2026-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2026-10-03T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2027-04-03T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2027-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2027-04-03T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2027-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2027-10-02T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2027-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2027-10-02T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2027-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2027-04-03T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2027-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2027-04-03T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2027-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2027-10-02T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2027-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2027-10-02T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2028-04-01T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2028-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2028-04-01T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2028-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2028-09-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2028-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2028-09-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2028-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2028-04-01T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2028-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2028-04-01T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2028-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2028-09-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2028-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2028-09-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2029-03-31T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2029-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2029-03-31T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2029-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2029-10-06T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2029-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2029-10-06T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2029-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2029-03-31T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2029-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2029-03-31T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2029-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2029-10-06T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2029-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2029-10-06T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2030-04-06T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2030-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2030-04-06T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2030-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2030-10-05T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2030-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2030-10-05T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2030-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2030-04-06T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2030-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2030-04-06T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2030-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2030-10-05T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2030-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2030-10-05T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2031-04-05T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2031-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2031-04-05T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2031-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2031-10-04T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2031-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2031-10-04T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2031-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2031-04-05T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2031-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2031-04-05T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2031-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2031-10-04T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2031-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2031-10-04T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2032-04-03T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2032-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2032-04-03T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2032-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2032-10-02T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2032-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2032-10-02T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2032-04-03T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2032-04-03T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2032-04-03T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2032-04-03T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2032-10-02T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2032-10-02T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2032-10-02T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2032-10-02T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2033-04-02T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2033-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2033-04-02T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2033-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2033-10-01T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2033-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2033-10-01T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2033-04-02T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2033-04-02T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2033-04-02T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2033-04-02T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2033-10-01T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2033-10-01T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2033-10-01T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2033-10-01T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2034-04-01T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2034-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2034-04-01T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2034-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2034-09-30T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2034-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2034-09-30T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2034-04-01T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2034-04-01T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2034-04-01T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2034-04-01T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2034-09-30T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2034-09-30T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2034-09-30T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2034-09-30T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2035-03-31T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2035-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2035-03-31T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2035-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2035-10-06T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2035-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2035-10-06T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2035-03-31T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2035-03-31T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2035-03-31T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2035-03-31T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2035-10-06T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2035-10-06T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2035-10-06T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2035-10-06T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2036-04-05T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2036-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2036-04-05T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2036-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2036-10-04T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2036-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2036-10-04T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2036-04-05T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2036-04-05T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2036-04-05T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2036-04-05T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2036-10-04T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2036-10-04T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2036-10-04T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2036-10-04T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2037-04-04T14:59:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2037-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:30:00", "2037-04-04T15:00:00+00:00 should be 01:30:00 LHST");
		t.equal(moment("2037-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "01:59:59", "2037-10-03T15:29:59+00:00 should be 01:59:59 LHST");
		t.equal(moment("2037-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm:ss"), "02:30:00", "2037-10-03T15:30:00+00:00 should be 02:30:00 LHST");

		t.equal(moment("2037-04-04T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2037-04-04T14:59:59+00:00 should be -660 minutes offset in LHST");
		t.equal(moment("2037-04-04T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -630, "2037-04-04T15:00:00+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2037-10-03T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -630, "2037-10-03T15:29:59+00:00 should be -630 minutes offset in LHST");
		t.equal(moment("2037-10-03T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2037-10-03T15:30:00+00:00 should be -660 minutes offset in LHST");

		t.done();
	}
};