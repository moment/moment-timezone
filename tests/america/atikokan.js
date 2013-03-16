var moment = require("../../moment-timezone");

exports["America/Atikokan"] = {

	"1918" : function (t) {
		t.equal(moment("1918-04-14T07:59:59+00:00").tz("America/Atikokan").format("HH:mm:ss"), "01:59:59", "1918-04-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1918-04-14T08:00:00+00:00").tz("America/Atikokan").format("HH:mm:ss"), "03:00:00", "1918-04-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1918-10-27T06:59:59+00:00").tz("America/Atikokan").format("HH:mm:ss"), "01:59:59", "1918-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1918-10-27T07:00:00+00:00").tz("America/Atikokan").format("HH:mm:ss"), "01:00:00", "1918-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1918-04-14T07:59:59+00:00").tz("America/Atikokan").zone(), 360, "1918-04-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1918-04-14T08:00:00+00:00").tz("America/Atikokan").zone(), 300, "1918-04-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1918-10-27T06:59:59+00:00").tz("America/Atikokan").zone(), 300, "1918-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1918-10-27T07:00:00+00:00").tz("America/Atikokan").zone(), 360, "1918-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-09-29T05:59:59+00:00").tz("America/Atikokan").format("HH:mm:ss"), "23:59:59", "1940-09-29T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1940-09-29T06:00:00+00:00").tz("America/Atikokan").format("HH:mm:ss"), "01:00:00", "1940-09-29T06:00:00+00:00 should be 01:00:00 CDT");

		t.equal(moment("1940-09-29T05:59:59+00:00").tz("America/Atikokan").zone(), 360, "1940-09-29T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1940-09-29T06:00:00+00:00").tz("America/Atikokan").zone(), 300, "1940-09-29T06:00:00+00:00 should be 300 minutes offset in CDT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T07:59:59+00:00").tz("America/Atikokan").format("HH:mm:ss"), "02:59:59", "1942-02-09T07:59:59+00:00 should be 02:59:59 CDT");
		t.equal(moment("1942-02-09T08:00:00+00:00").tz("America/Atikokan").format("HH:mm:ss"), "03:00:00", "1942-02-09T08:00:00+00:00 should be 03:00:00 CWT");

		t.equal(moment("1942-02-09T07:59:59+00:00").tz("America/Atikokan").zone(), 300, "1942-02-09T07:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1942-02-09T08:00:00+00:00").tz("America/Atikokan").zone(), 300, "1942-02-09T08:00:00+00:00 should be 300 minutes offset in CWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Atikokan").format("HH:mm:ss"), "17:59:59", "1945-08-14T22:59:59+00:00 should be 17:59:59 CWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Atikokan").format("HH:mm:ss"), "18:00:00", "1945-08-14T23:00:00+00:00 should be 18:00:00 CPT");
		t.equal(moment("1945-09-30T06:59:59+00:00").tz("America/Atikokan").format("HH:mm:ss"), "01:59:59", "1945-09-30T06:59:59+00:00 should be 01:59:59 CPT");
		t.equal(moment("1945-09-30T07:00:00+00:00").tz("America/Atikokan").format("HH:mm:ss"), "02:00:00", "1945-09-30T07:00:00+00:00 should be 02:00:00 EST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Atikokan").zone(), 300, "1945-08-14T22:59:59+00:00 should be 300 minutes offset in CWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Atikokan").zone(), 300, "1945-08-14T23:00:00+00:00 should be 300 minutes offset in CPT");
		t.equal(moment("1945-09-30T06:59:59+00:00").tz("America/Atikokan").zone(), 300, "1945-09-30T06:59:59+00:00 should be 300 minutes offset in CPT");
		t.equal(moment("1945-09-30T07:00:00+00:00").tz("America/Atikokan").zone(), 300, "1945-09-30T07:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	}
};