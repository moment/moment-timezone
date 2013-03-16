var moment = require("../../moment-timezone");

exports["America/Danmarkshavn"] = {

	"1916" : function (t) {
		t.equal(moment("1916-07-28T01:14:39+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:59:59", "1916-07-28T01:14:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1916-07-28T01:14:40+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:14:40", "1916-07-28T01:14:40+00:00 should be 22:14:40 WGT");

		t.equal(moment("1916-07-28T01:14:39+00:00").tz("America/Danmarkshavn").zone(), 74, "1916-07-28T01:14:39+00:00 should be 74 minutes offset in LMT");
		t.equal(moment("1916-07-28T01:14:40+00:00").tz("America/Danmarkshavn").zone(), 180, "1916-07-28T01:14:40+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-06T04:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "01:59:59", "1980-04-06T04:59:59+00:00 should be 01:59:59 WGT");
		t.equal(moment("1980-04-06T05:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "03:00:00", "1980-04-06T05:00:00+00:00 should be 03:00:00 WGST");
		t.equal(moment("1980-09-28T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1980-09-28T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1980-09-28T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1980-09-28T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1980-04-06T04:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1980-04-06T04:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1980-04-06T05:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1980-04-06T05:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1980-09-28T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1980-09-28T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1980-09-28T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1980-09-28T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-29T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1981-03-29T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1981-03-29T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1981-03-29T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1981-09-27T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1981-09-27T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1981-09-27T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1981-09-27T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1981-03-29T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1981-03-29T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1981-03-29T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1981-03-29T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1981-09-27T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1981-09-27T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1981-09-27T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1981-09-27T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-28T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1982-03-28T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1982-03-28T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1982-03-28T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1982-09-26T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1982-09-26T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1982-09-26T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1982-09-26T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1982-03-28T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1982-03-28T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1982-03-28T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1982-03-28T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1982-09-26T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1982-09-26T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1982-09-26T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1982-09-26T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-27T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1983-03-27T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1983-03-27T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1983-03-27T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1983-09-25T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1983-09-25T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1983-09-25T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1983-09-25T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1983-03-27T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1983-03-27T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1983-03-27T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1983-03-27T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1983-09-25T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1983-09-25T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1983-09-25T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1983-09-25T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-25T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1984-03-25T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1984-03-25T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1984-03-25T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1984-09-30T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1984-09-30T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1984-09-30T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1984-09-30T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1984-03-25T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1984-03-25T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1984-03-25T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1984-03-25T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1984-09-30T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1984-09-30T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1984-09-30T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1984-09-30T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-31T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1985-03-31T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1985-03-31T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1985-03-31T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1985-09-29T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1985-09-29T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1985-09-29T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1985-09-29T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1985-03-31T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1985-03-31T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1985-03-31T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1985-03-31T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1985-09-29T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1985-09-29T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1985-09-29T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1985-09-29T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-30T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1986-03-30T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1986-03-30T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1986-09-28T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1986-09-28T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1986-03-30T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1986-03-30T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1986-03-30T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1986-09-28T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1986-09-28T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-29T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1987-03-29T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1987-03-29T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1987-09-27T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1987-09-27T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1987-03-29T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1987-03-29T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1987-03-29T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1987-09-27T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1987-09-27T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-27T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1988-03-27T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1988-03-27T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1988-09-25T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1988-09-25T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1988-03-27T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1988-03-27T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1988-03-27T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1988-09-25T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1988-09-25T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-26T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1989-03-26T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1989-03-26T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1989-09-24T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1989-09-24T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1989-03-26T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1989-03-26T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1989-03-26T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1989-09-24T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1989-09-24T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-25T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1990-03-25T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1990-03-25T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1990-09-30T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1990-09-30T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1990-03-25T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1990-03-25T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1990-03-25T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1990-09-30T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1990-09-30T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-31T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1991-03-31T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1991-03-31T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1991-09-29T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1991-09-29T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1991-03-31T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1991-03-31T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1991-03-31T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1991-09-29T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1991-09-29T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-29T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1992-03-29T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1992-03-29T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1992-09-27T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1992-09-27T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1992-03-29T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1992-03-29T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1992-03-29T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1992-09-27T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1992-09-27T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-28T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1993-03-28T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1993-03-28T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1993-09-26T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1993-09-26T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1993-03-28T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1993-03-28T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1993-03-28T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1993-09-26T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1993-09-26T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-27T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1994-03-27T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1994-03-27T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1994-09-25T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1994-09-25T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1994-03-27T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1994-03-27T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1994-03-27T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1994-09-25T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1994-09-25T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-26T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "21:59:59", "1995-03-26T00:59:59+00:00 should be 21:59:59 WGT");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:00:00", "1995-03-26T01:00:00+00:00 should be 23:00:00 WGST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:59:59", "1995-09-24T00:59:59+00:00 should be 22:59:59 WGST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "22:00:00", "1995-09-24T01:00:00+00:00 should be 22:00:00 WGT");

		t.equal(moment("1995-03-26T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1995-03-26T00:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 120, "1995-03-26T01:00:00+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("America/Danmarkshavn").zone(), 120, "1995-09-24T00:59:59+00:00 should be 120 minutes offset in WGST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("America/Danmarkshavn").zone(), 180, "1995-09-24T01:00:00+00:00 should be 180 minutes offset in WGT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-01-01T02:59:59+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "23:59:59", "1996-01-01T02:59:59+00:00 should be 23:59:59 WGT");
		t.equal(moment("1996-01-01T03:00:00+00:00").tz("America/Danmarkshavn").format("HH:mm:ss"), "03:00:00", "1996-01-01T03:00:00+00:00 should be 03:00:00 GMT");

		t.equal(moment("1996-01-01T02:59:59+00:00").tz("America/Danmarkshavn").zone(), 180, "1996-01-01T02:59:59+00:00 should be 180 minutes offset in WGT");
		t.equal(moment("1996-01-01T03:00:00+00:00").tz("America/Danmarkshavn").zone(), 0, "1996-01-01T03:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};