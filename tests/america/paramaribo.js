var moment = require("../../moment-timezone");

exports["America/Paramaribo"] = {

	"1911" : function (t) {
		t.equal(moment("1911-01-01T03:40:39+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "23:59:59", "1911-01-01T03:40:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-01-01T03:40:40+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "23:59:48", "1911-01-01T03:40:40+00:00 should be 23:59:48 PMT");

		t.equal(moment("1911-01-01T03:40:39+00:00").tz("America/Paramaribo").zone(), 220, "1911-01-01T03:40:39+00:00 should be 220 minutes offset in LMT");
		t.equal(moment("1911-01-01T03:40:40+00:00").tz("America/Paramaribo").zone(), 220, "1911-01-01T03:40:40+00:00 should be 220 minutes offset in PMT");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-01-01T03:40:51+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "23:59:59", "1935-01-01T03:40:51+00:00 should be 23:59:59 PMT");
		t.equal(moment("1935-01-01T03:40:52+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "00:00:16", "1935-01-01T03:40:52+00:00 should be 00:00:16 PMT");

		t.equal(moment("1935-01-01T03:40:51+00:00").tz("America/Paramaribo").zone(), 220, "1935-01-01T03:40:51+00:00 should be 220 minutes offset in PMT");
		t.equal(moment("1935-01-01T03:40:52+00:00").tz("America/Paramaribo").zone(), 220, "1935-01-01T03:40:52+00:00 should be 220 minutes offset in PMT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-10-01T03:40:35+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "23:59:59", "1945-10-01T03:40:35+00:00 should be 23:59:59 PMT");
		t.equal(moment("1945-10-01T03:40:36+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "00:10:36", "1945-10-01T03:40:36+00:00 should be 00:10:36 NEGT");

		t.equal(moment("1945-10-01T03:40:35+00:00").tz("America/Paramaribo").zone(), 220, "1945-10-01T03:40:35+00:00 should be 220 minutes offset in PMT");
		t.equal(moment("1945-10-01T03:40:36+00:00").tz("America/Paramaribo").zone(), 210, "1945-10-01T03:40:36+00:00 should be 210 minutes offset in NEGT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-11-20T03:29:59+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "23:59:59", "1975-11-20T03:29:59+00:00 should be 23:59:59 NEGT");
		t.equal(moment("1975-11-20T03:30:00+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "00:00:00", "1975-11-20T03:30:00+00:00 should be 00:00:00 SRT");

		t.equal(moment("1975-11-20T03:29:59+00:00").tz("America/Paramaribo").zone(), 210, "1975-11-20T03:29:59+00:00 should be 210 minutes offset in NEGT");
		t.equal(moment("1975-11-20T03:30:00+00:00").tz("America/Paramaribo").zone(), 210, "1975-11-20T03:30:00+00:00 should be 210 minutes offset in SRT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-10-01T03:29:59+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "23:59:59", "1984-10-01T03:29:59+00:00 should be 23:59:59 SRT");
		t.equal(moment("1984-10-01T03:30:00+00:00").tz("America/Paramaribo").format("HH:mm:ss"), "00:30:00", "1984-10-01T03:30:00+00:00 should be 00:30:00 SRT");

		t.equal(moment("1984-10-01T03:29:59+00:00").tz("America/Paramaribo").zone(), 210, "1984-10-01T03:29:59+00:00 should be 210 minutes offset in SRT");
		t.equal(moment("1984-10-01T03:30:00+00:00").tz("America/Paramaribo").zone(), 180, "1984-10-01T03:30:00+00:00 should be 180 minutes offset in SRT");

		t.done();
	}
};