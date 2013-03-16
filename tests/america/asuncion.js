var moment = require("../../moment-timezone");

exports["America/Asuncion"] = {

	"1931" : function (t) {
		t.equal(moment("1931-10-10T03:50:39+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1931-10-10T03:50:39+00:00 should be 23:59:59 AMT");
		t.equal(moment("1931-10-10T03:50:40+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:50:40", "1931-10-10T03:50:40+00:00 should be 23:50:40 PYT");

		t.equal(moment("1931-10-10T03:50:39+00:00").tz("America/Asuncion").zone(), 230, "1931-10-10T03:50:39+00:00 should be 230 minutes offset in AMT");
		t.equal(moment("1931-10-10T03:50:40+00:00").tz("America/Asuncion").zone(), 240, "1931-10-10T03:50:40+00:00 should be 240 minutes offset in PYT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1972-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1972-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1972-10-01T04:00:00+00:00 should be 01:00:00 PYT");

		t.equal(moment("1972-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1972-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1972-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1972-10-01T04:00:00+00:00 should be 180 minutes offset in PYT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1974-04-01T02:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1974-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1974-04-01T03:00:00+00:00 should be 23:00:00 PYT");

		t.equal(moment("1974-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1974-04-01T02:59:59+00:00 should be 180 minutes offset in PYT");
		t.equal(moment("1974-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1974-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1975-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1975-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1975-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1975-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1975-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1975-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1975-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-03-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1976-03-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1976-03-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1976-03-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1976-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1976-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1976-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1976-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1976-03-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1976-03-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1976-03-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1976-03-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1976-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1976-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1976-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1976-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1977-03-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1977-03-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1977-03-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1977-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1977-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1977-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1977-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1977-03-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1977-03-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1977-03-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1977-03-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1977-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1977-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1977-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1977-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1978-03-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1978-03-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1978-03-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1978-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1978-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1978-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1978-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1978-03-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1978-03-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1978-03-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1978-03-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1978-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1978-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1978-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1978-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1979-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1979-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1979-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1979-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1979-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1979-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1979-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1979-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1979-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1979-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1979-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1979-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1979-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1979-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1979-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1980-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1980-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1980-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1980-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1980-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1980-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1980-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1980-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1980-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1980-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1980-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1980-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1980-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1980-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1980-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1981-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1981-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1981-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1981-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1981-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1981-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1981-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1981-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1981-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1981-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1981-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1981-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1981-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1981-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1981-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1982-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1982-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1982-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1982-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1982-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1982-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1982-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1982-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1982-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1982-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1982-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1982-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1982-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1982-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1982-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1983-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1983-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1983-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1983-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1983-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1983-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1983-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1983-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1983-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1983-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1983-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1983-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1983-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1983-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1983-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1984-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1984-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1984-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1984-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1984-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1984-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1984-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1984-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1984-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1984-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1984-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1984-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1984-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1984-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1984-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1985-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1985-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1985-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1985-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1985-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1985-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1985-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1985-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1985-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1985-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1985-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1985-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1985-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1985-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1985-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1986-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1986-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1986-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1986-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1986-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1986-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1986-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1986-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1986-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1986-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1986-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1986-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1986-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1986-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1986-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1987-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1987-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1987-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1987-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1987-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1987-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1987-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1987-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1987-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1987-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1987-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1987-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1987-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1987-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1987-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1988-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1988-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1988-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1988-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1988-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1988-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1988-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1988-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1988-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1988-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1988-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1988-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1988-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1988-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1988-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1989-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1989-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1989-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1989-10-22T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1989-10-22T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1989-10-22T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1989-10-22T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1989-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1989-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1989-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1989-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1989-10-22T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1989-10-22T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1989-10-22T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1989-10-22T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1990-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1990-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1990-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1990-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1990-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1990-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1990-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1990-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1990-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1990-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1990-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1990-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1990-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1990-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1990-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1991-04-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1991-04-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1991-04-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1991-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1991-10-06T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1991-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1991-10-06T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1991-04-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1991-04-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1991-04-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1991-04-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1991-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1991-10-06T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1991-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1991-10-06T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1992-03-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1992-03-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1992-03-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1992-10-05T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1992-10-05T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1992-10-05T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1992-10-05T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1992-03-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1992-03-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1992-03-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1992-03-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1992-10-05T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1992-10-05T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1992-10-05T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1992-10-05T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-31T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1993-03-31T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1993-03-31T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1993-03-31T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1993-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1993-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1993-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1993-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1993-03-31T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1993-03-31T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1993-03-31T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1993-03-31T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1993-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1993-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1993-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1993-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-02-27T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1994-02-27T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1994-02-27T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1994-02-27T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1994-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1994-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1994-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1994-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1994-02-27T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1994-02-27T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1994-02-27T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1994-02-27T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1994-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1994-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1994-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1994-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-02-26T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1995-02-26T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1995-02-26T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1995-02-26T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1995-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1995-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1995-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1995-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1995-02-26T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1995-02-26T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1995-02-26T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1995-02-26T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1995-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1995-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1995-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1995-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1996-03-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1996-03-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1996-03-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1996-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1996-10-06T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1996-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1996-10-06T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1996-03-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1996-03-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1996-03-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1996-03-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1996-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1996-10-06T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1996-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1996-10-06T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-02-23T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1997-02-23T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1997-02-23T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1997-02-23T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1997-10-05T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1997-10-05T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1997-10-05T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1997-10-05T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1997-02-23T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1997-02-23T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1997-02-23T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1997-02-23T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1997-10-05T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1997-10-05T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1997-10-05T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1997-10-05T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-01T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1998-03-01T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1998-03-01T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1998-03-01T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1998-10-04T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1998-10-04T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1998-10-04T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1998-10-04T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1998-03-01T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1998-03-01T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1998-03-01T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1998-03-01T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1998-10-04T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1998-10-04T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1998-10-04T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1998-10-04T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-07T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1999-03-07T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("1999-03-07T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "1999-03-07T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("1999-10-03T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "1999-10-03T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("1999-10-03T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "1999-10-03T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("1999-03-07T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "1999-03-07T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("1999-03-07T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "1999-03-07T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1999-10-03T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "1999-10-03T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("1999-10-03T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "1999-10-03T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-05T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2000-03-05T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2000-03-05T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2000-03-05T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2000-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2000-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2000-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2000-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2000-03-05T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2000-03-05T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2000-03-05T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2000-03-05T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2000-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2000-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2000-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2000-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-04T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2001-03-04T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2001-03-04T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2001-03-04T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2001-10-07T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2001-10-07T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2001-10-07T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2001-10-07T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2001-03-04T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2001-03-04T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2001-03-04T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2001-03-04T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2001-10-07T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2001-10-07T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2001-10-07T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2001-10-07T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2002-04-07T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2002-04-07T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2002-04-07T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2002-09-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2002-09-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2002-09-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2002-09-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2002-04-07T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2002-04-07T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2002-04-07T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2002-04-07T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2002-09-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2002-09-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2002-09-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2002-09-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2003-04-06T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2003-04-06T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2003-04-06T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2003-09-07T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2003-09-07T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2003-09-07T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2003-09-07T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2003-04-06T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2003-04-06T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2003-04-06T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2003-04-06T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2003-09-07T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2003-09-07T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2003-09-07T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2003-09-07T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2004-04-04T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2004-04-04T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2004-04-04T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2004-10-17T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2004-10-17T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2004-10-17T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2004-10-17T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2004-04-04T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2004-04-04T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2004-04-04T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2004-04-04T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2004-10-17T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2004-10-17T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2004-10-17T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2004-10-17T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-13T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2005-03-13T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2005-03-13T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2005-03-13T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2005-10-16T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2005-10-16T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2005-10-16T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2005-10-16T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2005-03-13T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2005-03-13T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2005-03-13T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2005-03-13T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2005-10-16T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2005-10-16T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2005-10-16T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2005-10-16T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-12T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2006-03-12T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2006-03-12T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2006-03-12T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2006-10-15T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2006-10-15T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2006-10-15T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2006-10-15T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2006-03-12T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2006-03-12T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2006-03-12T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2006-03-12T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2006-10-15T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2006-10-15T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2006-10-15T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2006-10-15T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2007-03-11T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2007-03-11T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2007-03-11T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2007-10-21T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2007-10-21T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2007-10-21T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2007-10-21T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2007-03-11T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2007-03-11T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2007-03-11T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2007-03-11T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2007-10-21T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2007-10-21T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2007-10-21T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2007-10-21T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2008-03-09T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2008-03-09T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2008-03-09T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2008-10-19T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2008-10-19T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2008-10-19T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2008-10-19T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2008-03-09T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2008-03-09T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2008-03-09T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2008-03-09T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2008-10-19T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2008-10-19T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2008-10-19T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2008-10-19T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2009-03-08T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2009-03-08T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2009-03-08T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2009-10-18T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2009-10-18T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2009-10-18T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2009-10-18T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2009-03-08T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2009-03-08T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2009-03-08T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2009-03-08T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2009-10-18T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2009-10-18T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2009-10-18T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2009-10-18T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-11T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2010-04-11T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2010-04-11T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2010-04-11T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2010-10-03T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2010-10-03T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2010-10-03T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2010-10-03T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2010-04-11T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2010-04-11T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2010-04-11T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2010-04-11T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2010-10-03T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2010-10-03T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2010-10-03T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2010-10-03T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-10T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2011-04-10T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2011-04-10T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2011-04-10T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2011-10-02T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2011-10-02T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2011-10-02T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2011-10-02T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2011-04-10T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2011-04-10T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2011-04-10T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2011-04-10T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2011-10-02T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2011-10-02T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2011-10-02T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2011-10-02T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-04-08T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2012-04-08T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2012-04-08T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2012-04-08T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2012-10-07T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2012-10-07T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2012-10-07T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2012-10-07T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2012-04-08T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2012-04-08T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2012-04-08T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2012-04-08T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2012-10-07T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2012-10-07T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2012-10-07T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2012-10-07T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-24T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2013-03-24T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2013-03-24T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2013-03-24T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2013-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2013-10-06T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2013-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2013-10-06T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2013-03-24T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2013-03-24T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2013-03-24T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2013-03-24T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2013-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2013-10-06T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2013-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2013-10-06T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-13T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2014-04-13T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2014-04-13T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2014-04-13T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2014-10-05T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2014-10-05T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2014-10-05T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2014-10-05T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2014-04-13T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2014-04-13T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2014-04-13T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2014-04-13T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2014-10-05T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2014-10-05T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2014-10-05T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2014-10-05T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-12T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2015-04-12T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2015-04-12T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2015-04-12T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2015-10-04T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2015-10-04T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2015-10-04T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2015-10-04T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2015-04-12T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2015-04-12T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2015-04-12T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2015-04-12T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2015-10-04T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2015-10-04T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2015-10-04T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2015-10-04T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-10T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2016-04-10T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2016-04-10T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2016-04-10T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2016-10-02T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2016-10-02T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2016-10-02T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2016-10-02T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2016-04-10T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2016-04-10T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2016-04-10T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2016-04-10T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2016-10-02T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2016-10-02T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2016-10-02T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2016-10-02T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-09T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2017-04-09T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2017-04-09T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2017-04-09T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2017-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2017-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2017-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2017-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2017-04-09T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2017-04-09T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2017-04-09T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2017-04-09T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2017-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2017-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2017-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2017-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-08T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2018-04-08T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2018-04-08T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2018-04-08T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2018-10-07T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2018-10-07T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2018-10-07T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2018-10-07T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2018-04-08T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2018-04-08T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2018-04-08T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2018-04-08T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2018-10-07T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2018-10-07T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2018-10-07T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2018-10-07T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-14T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2019-04-14T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2019-04-14T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2019-04-14T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2019-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2019-10-06T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2019-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2019-10-06T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2019-04-14T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2019-04-14T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2019-04-14T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2019-04-14T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2019-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2019-10-06T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2019-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2019-10-06T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-12T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2020-04-12T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2020-04-12T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2020-04-12T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2020-10-04T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2020-10-04T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2020-10-04T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2020-10-04T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2020-04-12T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2020-04-12T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2020-04-12T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2020-04-12T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2020-10-04T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2020-10-04T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2020-10-04T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2020-10-04T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-11T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2021-04-11T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2021-04-11T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2021-04-11T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2021-10-03T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2021-10-03T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2021-10-03T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2021-10-03T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2021-04-11T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2021-04-11T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2021-04-11T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2021-04-11T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2021-10-03T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2021-10-03T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2021-10-03T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2021-10-03T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-10T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2022-04-10T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2022-04-10T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2022-04-10T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2022-10-02T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2022-10-02T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2022-10-02T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2022-10-02T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2022-04-10T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2022-04-10T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2022-04-10T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2022-04-10T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2022-10-02T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2022-10-02T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2022-10-02T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2022-10-02T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-09T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2023-04-09T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2023-04-09T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2023-04-09T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2023-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2023-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2023-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2023-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2023-04-09T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2023-04-09T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2023-04-09T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2023-04-09T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2023-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2023-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2023-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2023-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-14T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2024-04-14T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2024-04-14T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2024-04-14T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2024-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2024-10-06T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2024-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2024-10-06T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2024-04-14T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2024-04-14T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2024-04-14T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2024-04-14T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2024-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2024-10-06T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2024-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2024-10-06T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-13T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2025-04-13T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2025-04-13T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2025-04-13T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2025-10-05T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2025-10-05T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2025-10-05T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2025-10-05T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2025-04-13T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2025-04-13T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2025-04-13T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2025-04-13T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2025-10-05T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2025-10-05T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2025-10-05T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2025-10-05T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-12T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2026-04-12T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2026-04-12T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2026-04-12T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2026-10-04T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2026-10-04T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2026-10-04T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2026-10-04T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2026-04-12T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2026-04-12T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2026-04-12T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2026-04-12T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2026-10-04T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2026-10-04T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2026-10-04T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2026-10-04T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-11T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2027-04-11T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2027-04-11T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2027-04-11T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2027-10-03T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2027-10-03T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2027-10-03T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2027-10-03T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2027-04-11T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2027-04-11T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2027-04-11T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2027-04-11T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2027-10-03T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2027-10-03T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2027-10-03T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2027-10-03T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-09T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2028-04-09T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2028-04-09T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2028-04-09T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2028-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2028-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2028-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2028-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2028-04-09T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2028-04-09T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2028-04-09T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2028-04-09T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2028-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2028-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2028-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2028-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-08T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2029-04-08T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2029-04-08T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2029-04-08T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2029-10-07T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2029-10-07T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2029-10-07T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2029-10-07T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2029-04-08T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2029-04-08T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2029-04-08T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2029-04-08T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2029-10-07T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2029-10-07T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2029-10-07T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2029-10-07T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-14T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2030-04-14T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2030-04-14T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2030-04-14T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2030-10-06T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2030-10-06T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2030-10-06T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2030-10-06T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2030-04-14T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2030-04-14T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2030-04-14T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2030-04-14T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2030-10-06T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2030-10-06T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2030-10-06T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2030-10-06T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-13T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2031-04-13T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2031-04-13T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2031-04-13T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2031-10-05T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2031-10-05T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2031-10-05T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2031-10-05T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2031-04-13T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2031-04-13T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2031-04-13T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2031-04-13T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2031-10-05T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2031-10-05T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2031-10-05T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2031-10-05T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-11T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2032-04-11T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2032-04-11T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2032-04-11T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2032-10-03T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2032-10-03T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2032-10-03T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2032-10-03T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2032-04-11T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2032-04-11T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2032-04-11T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2032-04-11T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2032-10-03T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2032-10-03T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2032-10-03T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2032-10-03T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-10T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2033-04-10T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2033-04-10T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2033-04-10T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2033-10-02T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2033-10-02T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2033-10-02T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2033-10-02T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2033-04-10T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2033-04-10T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2033-04-10T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2033-04-10T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2033-10-02T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2033-10-02T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2033-10-02T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2033-10-02T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-09T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2034-04-09T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2034-04-09T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2034-04-09T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2034-10-01T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2034-10-01T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2034-10-01T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2034-10-01T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2034-04-09T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2034-04-09T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2034-04-09T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2034-04-09T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2034-10-01T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2034-10-01T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2034-10-01T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2034-10-01T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-08T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2035-04-08T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2035-04-08T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2035-04-08T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2035-10-07T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2035-10-07T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2035-10-07T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2035-10-07T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2035-04-08T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2035-04-08T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2035-04-08T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2035-04-08T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2035-10-07T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2035-10-07T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2035-10-07T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2035-10-07T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-13T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2036-04-13T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2036-04-13T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2036-04-13T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2036-10-05T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2036-10-05T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2036-10-05T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2036-10-05T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2036-04-13T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2036-04-13T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2036-04-13T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2036-04-13T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2036-10-05T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2036-10-05T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2036-10-05T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2036-10-05T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-12T02:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2037-04-12T02:59:59+00:00 should be 23:59:59 PYST");
		t.equal(moment("2037-04-12T03:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:00:00", "2037-04-12T03:00:00+00:00 should be 23:00:00 PYT");
		t.equal(moment("2037-10-04T03:59:59+00:00").tz("America/Asuncion").format("HH:mm:ss"), "23:59:59", "2037-10-04T03:59:59+00:00 should be 23:59:59 PYT");
		t.equal(moment("2037-10-04T04:00:00+00:00").tz("America/Asuncion").format("HH:mm:ss"), "01:00:00", "2037-10-04T04:00:00+00:00 should be 01:00:00 PYST");

		t.equal(moment("2037-04-12T02:59:59+00:00").tz("America/Asuncion").zone(), 180, "2037-04-12T02:59:59+00:00 should be 180 minutes offset in PYST");
		t.equal(moment("2037-04-12T03:00:00+00:00").tz("America/Asuncion").zone(), 240, "2037-04-12T03:00:00+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2037-10-04T03:59:59+00:00").tz("America/Asuncion").zone(), 240, "2037-10-04T03:59:59+00:00 should be 240 minutes offset in PYT");
		t.equal(moment("2037-10-04T04:00:00+00:00").tz("America/Asuncion").zone(), 180, "2037-10-04T04:00:00+00:00 should be 180 minutes offset in PYST");

		t.done();
	}
};