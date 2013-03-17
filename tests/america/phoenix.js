var moment = require("../../moment-timezone");

exports["America/Phoenix"] = {

	"1918" : function (t) {
		t.equal(moment("1918-03-31T08:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1918-03-31T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1918-03-31T09:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "03:00:00", "1918-03-31T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1918-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:00:00", "1918-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1918-03-31T08:59:59+00:00").tz("America/Phoenix").zone(), 420, "1918-03-31T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1918-03-31T09:00:00+00:00").tz("America/Phoenix").zone(), 360, "1918-03-31T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/Phoenix").zone(), 360, "1918-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/Phoenix").zone(), 420, "1918-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-03-30T08:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1919-03-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1919-03-30T09:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "03:00:00", "1919-03-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1919-10-26T07:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1919-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1919-10-26T08:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:00:00", "1919-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1919-03-30T08:59:59+00:00").tz("America/Phoenix").zone(), 420, "1919-03-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1919-03-30T09:00:00+00:00").tz("America/Phoenix").zone(), 360, "1919-03-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1919-10-26T07:59:59+00:00").tz("America/Phoenix").zone(), 360, "1919-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1919-10-26T08:00:00+00:00").tz("America/Phoenix").zone(), 420, "1919-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1942-02-09T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "03:00:00", "1942-02-09T09:00:00+00:00 should be 03:00:00 MWT");

		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/Phoenix").zone(), 420, "1942-02-09T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/Phoenix").zone(), 360, "1942-02-09T09:00:00+00:00 should be 360 minutes offset in MWT");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-01-01T06:00:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "00:00:59", "1944-01-01T06:00:59+00:00 should be 00:00:59 MWT");
		t.equal(moment("1944-01-01T06:01:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "23:01:00", "1944-01-01T06:01:00+00:00 should be 23:01:00 MST");
		t.equal(moment("1944-04-01T07:00:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "00:00:59", "1944-04-01T07:00:59+00:00 should be 00:00:59 MST");
		t.equal(moment("1944-04-01T07:01:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:01:00", "1944-04-01T07:01:00+00:00 should be 01:01:00 MWT");
		t.equal(moment("1944-10-01T06:00:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "00:00:59", "1944-10-01T06:00:59+00:00 should be 00:00:59 MWT");
		t.equal(moment("1944-10-01T06:01:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "23:01:00", "1944-10-01T06:01:00+00:00 should be 23:01:00 MST");

		t.equal(moment("1944-01-01T06:00:59+00:00").tz("America/Phoenix").zone(), 360, "1944-01-01T06:00:59+00:00 should be 360 minutes offset in MWT");
		t.equal(moment("1944-01-01T06:01:00+00:00").tz("America/Phoenix").zone(), 420, "1944-01-01T06:01:00+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1944-04-01T07:00:59+00:00").tz("America/Phoenix").zone(), 420, "1944-04-01T07:00:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1944-04-01T07:01:00+00:00").tz("America/Phoenix").zone(), 360, "1944-04-01T07:01:00+00:00 should be 360 minutes offset in MWT");
		t.equal(moment("1944-10-01T06:00:59+00:00").tz("America/Phoenix").zone(), 360, "1944-10-01T06:00:59+00:00 should be 360 minutes offset in MWT");
		t.equal(moment("1944-10-01T06:01:00+00:00").tz("America/Phoenix").zone(), 420, "1944-10-01T06:01:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T08:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1967-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1967-04-30T09:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "03:00:00", "1967-04-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1967-10-29T07:59:59+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:59:59", "1967-10-29T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1967-10-29T08:00:00+00:00").tz("America/Phoenix").format("HH:mm:ss"), "01:00:00", "1967-10-29T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1967-04-30T08:59:59+00:00").tz("America/Phoenix").zone(), 420, "1967-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1967-04-30T09:00:00+00:00").tz("America/Phoenix").zone(), 360, "1967-04-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1967-10-29T07:59:59+00:00").tz("America/Phoenix").zone(), 360, "1967-10-29T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1967-10-29T08:00:00+00:00").tz("America/Phoenix").zone(), 420, "1967-10-29T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	}
};