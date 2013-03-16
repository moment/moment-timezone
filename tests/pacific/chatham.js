var moment = require("../../moment-timezone");

exports["Pacific/Chatham"] = {

	"1956" : function (t) {
		t.equal(moment("1956-12-31T11:46:11+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "23:59:59", "1956-12-31T11:46:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1956-12-31T11:46:12+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "00:31:12", "1956-12-31T11:46:12+00:00 should be 00:31:12 CHAST");

		t.equal(moment("1956-12-31T11:46:11+00:00").tz("Pacific/Chatham").zone(), -733, "1956-12-31T11:46:11+00:00 should be -733 minutes offset in LMT");
		t.equal(moment("1956-12-31T11:46:12+00:00").tz("Pacific/Chatham").zone(), -765, "1956-12-31T11:46:12+00:00 should be -765 minutes offset in CHAST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-11-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1974-11-02T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1974-11-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1974-11-02T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1974-11-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1974-11-02T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1974-11-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1974-11-02T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-22T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1975-02-22T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1975-02-22T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1975-02-22T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1975-10-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1975-10-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1975-10-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1975-10-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1975-02-22T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1975-02-22T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1975-02-22T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1975-02-22T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1975-10-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1975-10-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1975-10-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1975-10-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-03-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1976-03-06T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1976-03-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1976-03-06T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1976-10-30T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1976-10-30T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1976-10-30T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1976-10-30T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1976-03-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1976-03-06T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1976-03-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1976-03-06T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1976-10-30T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1976-10-30T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1976-10-30T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1976-10-30T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1977-03-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1977-03-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1977-03-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1977-10-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1977-10-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1977-10-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1977-10-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1977-03-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1977-03-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1977-03-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1977-03-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1977-10-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1977-10-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1977-10-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1977-10-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1978-03-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1978-03-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1978-03-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1978-10-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1978-10-28T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1978-10-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1978-10-28T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1978-03-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1978-03-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1978-03-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1978-03-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1978-10-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1978-10-28T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1978-10-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1978-10-28T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1979-03-03T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1979-03-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1979-03-03T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1979-10-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1979-10-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1979-10-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1979-10-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1979-03-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1979-03-03T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1979-03-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1979-03-03T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1979-10-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1979-10-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1979-10-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1979-10-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1980-03-01T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1980-03-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1980-03-01T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1980-10-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1980-10-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1980-10-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1980-10-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1980-03-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1980-03-01T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1980-03-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1980-03-01T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1980-10-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1980-10-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1980-10-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1980-10-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-02-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1981-02-28T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1981-02-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1981-02-28T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1981-10-24T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1981-10-24T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1981-10-24T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1981-10-24T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1981-02-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1981-02-28T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1981-02-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1981-02-28T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1981-10-24T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1981-10-24T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1981-10-24T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1981-10-24T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1982-03-06T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1982-03-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1982-03-06T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1982-10-30T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1982-10-30T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1982-10-30T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1982-10-30T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1982-03-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1982-03-06T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1982-03-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1982-03-06T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1982-10-30T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1982-10-30T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1982-10-30T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1982-10-30T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1983-03-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1983-03-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1983-03-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1983-10-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1983-10-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1983-10-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1983-10-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1983-03-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1983-03-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1983-03-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1983-03-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1983-10-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1983-10-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1983-10-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1983-10-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1984-03-03T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1984-03-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1984-03-03T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1984-10-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1984-10-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1984-10-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1984-10-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1984-03-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1984-03-03T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1984-03-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1984-03-03T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1984-10-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1984-10-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1984-10-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1984-10-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1985-03-02T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1985-03-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1985-03-02T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1985-10-26T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1985-10-26T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1985-10-26T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1985-10-26T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1985-03-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1985-03-02T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1985-03-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1985-03-02T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1985-10-26T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1985-10-26T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1985-10-26T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1985-10-26T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1986-03-01T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1986-03-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1986-03-01T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1986-10-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1986-10-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1986-10-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1986-10-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1986-03-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1986-03-01T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1986-03-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1986-03-01T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1986-10-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1986-10-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1986-10-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1986-10-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1987-02-28T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1987-02-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1987-02-28T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1987-10-24T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1987-10-24T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1987-10-24T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1987-10-24T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1987-02-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1987-02-28T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1987-02-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1987-02-28T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1987-10-24T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1987-10-24T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1987-10-24T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1987-10-24T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1988-03-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1988-03-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1988-03-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1988-10-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1988-10-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1988-10-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1988-10-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1988-03-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1988-03-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1988-03-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1988-03-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1988-10-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1988-10-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1988-10-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1988-10-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1989-03-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1989-03-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1989-03-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1989-10-07T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1989-10-07T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1989-10-07T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1989-10-07T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1989-03-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1989-03-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1989-03-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1989-03-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1989-10-07T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1989-10-07T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1989-10-07T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1989-10-07T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-17T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1990-03-17T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1990-03-17T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1990-03-17T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1990-10-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1990-10-06T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1990-10-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1990-10-06T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1990-03-17T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1990-03-17T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1990-03-17T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1990-03-17T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1990-10-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1990-10-06T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1990-10-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1990-10-06T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-16T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1991-03-16T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1991-03-16T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1991-03-16T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1991-10-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1991-10-05T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1991-10-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1991-10-05T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1991-03-16T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1991-03-16T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1991-03-16T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1991-03-16T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1991-10-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1991-10-05T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1991-10-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1991-10-05T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-14T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1992-03-14T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1992-03-14T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1992-03-14T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1992-10-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1992-10-03T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1992-10-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1992-10-03T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1992-03-14T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1992-03-14T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1992-03-14T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1992-03-14T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1992-10-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1992-10-03T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1992-10-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1992-10-03T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-20T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1993-03-20T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1993-03-20T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1993-03-20T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1993-10-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1993-10-02T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1993-10-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1993-10-02T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1993-03-20T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1993-03-20T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1993-03-20T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1993-03-20T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1993-10-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1993-10-02T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1993-10-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1993-10-02T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-19T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1994-03-19T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1994-03-19T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1994-03-19T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1994-10-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1994-10-01T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1994-10-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1994-10-01T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1994-03-19T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1994-03-19T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1994-03-19T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1994-03-19T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1994-10-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1994-10-01T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1994-10-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1994-10-01T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-18T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1995-03-18T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1995-03-18T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1995-03-18T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1995-09-30T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1995-09-30T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1995-09-30T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1995-09-30T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1995-03-18T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1995-03-18T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1995-03-18T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1995-03-18T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1995-09-30T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1995-09-30T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1995-09-30T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1995-09-30T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-16T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1996-03-16T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1996-03-16T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1996-03-16T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1996-10-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1996-10-05T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1996-10-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1996-10-05T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1996-03-16T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1996-03-16T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1996-03-16T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1996-03-16T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1996-10-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1996-10-05T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1996-10-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1996-10-05T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-15T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1997-03-15T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1997-03-15T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1997-03-15T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1997-10-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1997-10-04T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1997-10-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1997-10-04T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1997-03-15T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1997-03-15T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1997-03-15T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1997-03-15T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1997-10-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1997-10-04T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1997-10-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1997-10-04T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-14T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1998-03-14T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1998-03-14T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1998-03-14T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1998-10-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1998-10-03T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1998-10-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1998-10-03T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1998-03-14T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1998-03-14T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1998-03-14T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1998-03-14T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1998-10-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1998-10-03T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1998-10-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1998-10-03T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-20T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "1999-03-20T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("1999-03-20T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "1999-03-20T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("1999-10-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "1999-10-02T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("1999-10-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "1999-10-02T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("1999-03-20T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "1999-03-20T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("1999-03-20T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "1999-03-20T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1999-10-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "1999-10-02T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("1999-10-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "1999-10-02T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-18T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2000-03-18T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2000-03-18T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2000-03-18T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2000-09-30T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2000-09-30T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2000-09-30T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2000-09-30T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2000-03-18T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2000-03-18T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2000-03-18T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2000-03-18T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2000-09-30T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2000-09-30T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2000-09-30T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2000-09-30T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-17T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2001-03-17T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2001-03-17T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2001-03-17T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2001-10-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2001-10-06T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2001-10-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2001-10-06T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2001-03-17T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2001-03-17T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2001-03-17T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2001-03-17T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2001-10-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2001-10-06T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2001-10-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2001-10-06T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-16T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2002-03-16T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2002-03-16T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2002-03-16T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2002-10-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2002-10-05T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2002-10-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2002-10-05T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2002-03-16T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2002-03-16T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2002-03-16T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2002-03-16T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2002-10-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2002-10-05T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2002-10-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2002-10-05T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-15T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2003-03-15T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2003-03-15T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2003-03-15T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2003-10-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2003-10-04T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2003-10-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2003-10-04T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2003-03-15T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2003-03-15T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2003-03-15T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2003-03-15T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2003-10-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2003-10-04T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2003-10-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2003-10-04T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-20T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2004-03-20T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2004-03-20T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2004-03-20T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2004-10-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2004-10-02T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2004-10-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2004-10-02T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2004-03-20T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2004-03-20T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2004-03-20T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2004-03-20T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2004-10-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2004-10-02T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2004-10-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2004-10-02T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-19T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2005-03-19T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2005-03-19T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2005-03-19T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2005-10-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2005-10-01T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2005-10-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2005-10-01T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2005-03-19T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2005-03-19T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2005-03-19T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2005-03-19T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2005-10-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2005-10-01T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2005-10-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2005-10-01T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-18T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2006-03-18T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2006-03-18T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2006-03-18T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2006-09-30T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2006-09-30T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2006-09-30T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2006-09-30T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2006-03-18T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2006-03-18T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2006-03-18T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2006-03-18T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2006-09-30T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2006-09-30T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2006-09-30T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2006-09-30T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-17T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2007-03-17T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2007-03-17T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2007-03-17T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2007-09-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2007-09-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2007-09-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2007-09-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2007-03-17T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2007-03-17T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2007-03-17T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2007-03-17T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2007-09-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2007-09-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2007-09-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2007-09-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2008-04-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2008-04-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2008-04-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2008-09-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2008-09-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2008-09-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2008-09-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2008-04-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2008-04-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2008-04-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2008-04-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2008-09-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2008-09-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2008-09-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2008-09-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2009-04-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2009-04-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2009-04-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2009-09-26T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2009-09-26T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2009-09-26T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2009-09-26T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2009-04-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2009-04-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2009-04-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2009-04-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2009-09-26T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2009-09-26T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2009-09-26T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2009-09-26T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2010-04-03T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2010-04-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2010-04-03T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2010-09-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2010-09-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2010-09-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2010-09-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2010-04-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2010-04-03T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2010-04-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2010-04-03T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2010-09-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2010-09-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2010-09-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2010-09-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2011-04-02T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2011-04-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2011-04-02T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2011-09-24T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2011-09-24T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2011-09-24T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2011-09-24T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2011-04-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2011-04-02T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2011-04-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2011-04-02T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2011-09-24T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2011-09-24T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2011-09-24T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2011-09-24T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-31T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2012-03-31T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2012-03-31T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2012-03-31T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2012-09-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2012-09-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2012-09-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2012-09-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2012-03-31T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2012-03-31T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2012-03-31T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2012-03-31T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2012-09-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2012-09-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2012-09-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2012-09-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2013-04-06T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2013-04-06T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2013-09-28T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2013-09-28T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2013-04-06T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2013-04-06T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2013-09-28T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2013-09-28T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2014-04-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2014-04-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2014-04-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2014-09-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2014-09-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2014-09-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2014-09-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2014-04-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2014-04-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2014-04-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2014-04-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2014-09-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2014-09-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2014-09-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2014-09-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2015-04-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2015-04-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2015-04-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2015-09-26T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2015-09-26T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2015-09-26T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2015-09-26T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2015-04-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2015-04-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2015-04-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2015-04-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2015-09-26T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2015-09-26T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2015-09-26T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2015-09-26T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2016-04-02T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2016-04-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2016-04-02T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2016-09-24T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2016-09-24T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2016-09-24T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2016-09-24T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2016-04-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2016-04-02T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2016-04-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2016-04-02T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2016-09-24T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2016-09-24T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2016-09-24T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2016-09-24T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2017-04-01T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2017-04-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2017-04-01T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2017-09-23T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2017-09-23T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2017-09-23T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2017-09-23T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2017-04-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2017-04-01T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2017-04-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2017-04-01T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2017-09-23T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2017-09-23T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2017-09-23T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2017-09-23T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2018-03-31T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2018-03-31T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2018-03-31T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2018-09-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2018-09-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2018-09-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2018-09-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2018-03-31T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2018-03-31T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2018-03-31T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2018-03-31T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2018-09-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2018-09-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2018-09-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2018-09-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2019-04-06T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2019-04-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2019-04-06T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2019-09-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2019-09-28T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2019-09-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2019-09-28T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2019-04-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2019-04-06T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2019-04-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2019-04-06T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2019-09-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2019-09-28T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2019-09-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2019-09-28T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2020-04-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2020-04-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2020-04-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2020-09-26T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2020-09-26T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2020-09-26T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2020-09-26T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2020-04-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2020-04-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2020-04-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2020-04-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2020-09-26T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2020-09-26T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2020-09-26T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2020-09-26T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2021-04-03T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2021-04-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2021-04-03T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2021-09-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2021-09-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2021-09-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2021-09-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2021-04-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2021-04-03T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2021-04-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2021-04-03T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2021-09-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2021-09-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2021-09-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2021-09-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2022-04-02T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2022-04-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2022-04-02T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2022-09-24T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2022-09-24T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2022-09-24T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2022-09-24T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2022-04-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2022-04-02T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2022-04-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2022-04-02T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2022-09-24T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2022-09-24T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2022-09-24T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2022-09-24T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2023-04-01T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2023-04-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2023-04-01T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2023-09-23T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2023-09-23T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2023-09-23T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2023-09-23T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2023-04-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2023-04-01T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2023-04-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2023-04-01T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2023-09-23T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2023-09-23T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2023-09-23T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2023-09-23T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2024-04-06T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2024-04-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2024-04-06T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2024-09-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2024-09-28T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2024-09-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2024-09-28T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2024-04-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2024-04-06T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2024-04-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2024-04-06T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2024-09-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2024-09-28T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2024-09-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2024-09-28T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2025-04-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2025-04-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2025-04-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2025-09-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2025-09-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2025-09-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2025-09-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2025-04-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2025-04-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2025-04-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2025-04-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2025-09-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2025-09-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2025-09-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2025-09-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2026-04-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2026-04-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2026-04-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2026-09-26T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2026-09-26T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2026-09-26T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2026-09-26T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2026-04-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2026-04-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2026-04-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2026-04-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2026-09-26T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2026-09-26T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2026-09-26T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2026-09-26T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2027-04-03T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2027-04-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2027-04-03T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2027-09-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2027-09-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2027-09-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2027-09-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2027-04-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2027-04-03T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2027-04-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2027-04-03T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2027-09-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2027-09-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2027-09-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2027-09-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2028-04-01T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2028-04-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2028-04-01T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2028-09-23T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2028-09-23T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2028-09-23T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2028-09-23T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2028-04-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2028-04-01T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2028-04-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2028-04-01T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2028-09-23T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2028-09-23T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2028-09-23T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2028-09-23T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2029-03-31T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2029-03-31T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2029-03-31T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2029-09-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2029-09-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2029-09-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2029-09-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2029-03-31T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2029-03-31T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2029-03-31T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2029-03-31T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2029-09-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2029-09-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2029-09-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2029-09-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2030-04-06T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2030-04-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2030-04-06T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2030-09-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2030-09-28T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2030-09-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2030-09-28T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2030-04-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2030-04-06T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2030-04-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2030-04-06T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2030-09-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2030-09-28T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2030-09-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2030-09-28T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2031-04-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2031-04-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2031-04-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2031-09-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2031-09-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2031-09-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2031-09-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2031-04-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2031-04-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2031-04-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2031-04-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2031-09-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2031-09-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2031-09-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2031-09-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2032-04-03T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2032-04-03T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2032-04-03T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2032-09-25T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2032-09-25T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2032-09-25T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2032-09-25T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2032-04-03T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2032-04-03T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2032-04-03T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2032-04-03T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2032-09-25T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2032-09-25T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2032-09-25T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2032-09-25T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2033-04-02T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2033-04-02T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2033-04-02T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2033-09-24T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2033-09-24T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2033-09-24T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2033-09-24T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2033-04-02T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2033-04-02T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2033-04-02T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2033-04-02T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2033-09-24T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2033-09-24T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2033-09-24T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2033-09-24T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2034-04-01T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2034-04-01T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2034-04-01T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2034-09-23T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2034-09-23T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2034-09-23T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2034-09-23T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2034-04-01T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2034-04-01T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2034-04-01T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2034-04-01T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2034-09-23T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2034-09-23T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2034-09-23T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2034-09-23T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2035-03-31T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2035-03-31T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2035-03-31T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2035-09-29T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2035-09-29T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2035-09-29T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2035-09-29T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2035-03-31T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2035-03-31T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2035-03-31T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2035-03-31T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2035-09-29T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2035-09-29T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2035-09-29T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2035-09-29T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2036-04-05T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2036-04-05T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2036-04-05T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2036-09-27T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2036-09-27T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2036-09-27T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2036-09-27T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2036-04-05T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2036-04-05T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2036-04-05T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2036-04-05T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2036-09-27T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2036-09-27T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2036-09-27T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2036-09-27T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:44:59", "2037-04-04T13:59:59+00:00 should be 03:44:59 CHADT");
		t.equal(moment("2037-04-04T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:45:00", "2037-04-04T14:00:00+00:00 should be 02:45:00 CHAST");
		t.equal(moment("2037-09-26T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "02:44:59", "2037-09-26T13:59:59+00:00 should be 02:44:59 CHAST");
		t.equal(moment("2037-09-26T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm:ss"), "03:45:00", "2037-09-26T14:00:00+00:00 should be 03:45:00 CHADT");

		t.equal(moment("2037-04-04T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2037-04-04T13:59:59+00:00 should be -825 minutes offset in CHADT");
		t.equal(moment("2037-04-04T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2037-04-04T14:00:00+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2037-09-26T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2037-09-26T13:59:59+00:00 should be -765 minutes offset in CHAST");
		t.equal(moment("2037-09-26T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2037-09-26T14:00:00+00:00 should be -825 minutes offset in CHADT");

		t.done();
	}
};