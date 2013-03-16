var moment = require("../../moment-timezone");

exports["Asia/Manila"] = {

	"1936" : function (t) {
		t.equal(moment("1936-10-31T15:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1936-10-31T15:59:59+00:00 should be 23:59:59 PHT");
		t.equal(moment("1936-10-31T16:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "01:00:00", "1936-10-31T16:00:00+00:00 should be 01:00:00 PHST");

		t.equal(moment("1936-10-31T15:59:59+00:00").tz("Asia/Manila").zone(), -480, "1936-10-31T15:59:59+00:00 should be -480 minutes offset in PHT");
		t.equal(moment("1936-10-31T16:00:00+00:00").tz("Asia/Manila").zone(), -540, "1936-10-31T16:00:00+00:00 should be -540 minutes offset in PHST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-01-31T14:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1937-01-31T14:59:59+00:00 should be 23:59:59 PHST");
		t.equal(moment("1937-01-31T15:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:00:00", "1937-01-31T15:00:00+00:00 should be 23:00:00 PHT");

		t.equal(moment("1937-01-31T14:59:59+00:00").tz("Asia/Manila").zone(), -540, "1937-01-31T14:59:59+00:00 should be -540 minutes offset in PHST");
		t.equal(moment("1937-01-31T15:00:00+00:00").tz("Asia/Manila").zone(), -480, "1937-01-31T15:00:00+00:00 should be -480 minutes offset in PHT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-04-30T15:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1942-04-30T15:59:59+00:00 should be 23:59:59 PHT");
		t.equal(moment("1942-04-30T16:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "01:00:00", "1942-04-30T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1942-04-30T15:59:59+00:00").tz("Asia/Manila").zone(), -480, "1942-04-30T15:59:59+00:00 should be -480 minutes offset in PHT");
		t.equal(moment("1942-04-30T16:00:00+00:00").tz("Asia/Manila").zone(), -540, "1942-04-30T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-10-31T14:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1944-10-31T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1944-10-31T15:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:00:00", "1944-10-31T15:00:00+00:00 should be 23:00:00 PHT");

		t.equal(moment("1944-10-31T14:59:59+00:00").tz("Asia/Manila").zone(), -540, "1944-10-31T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1944-10-31T15:00:00+00:00").tz("Asia/Manila").zone(), -480, "1944-10-31T15:00:00+00:00 should be -480 minutes offset in PHT");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-11T15:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1954-04-11T15:59:59+00:00 should be 23:59:59 PHT");
		t.equal(moment("1954-04-11T16:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "01:00:00", "1954-04-11T16:00:00+00:00 should be 01:00:00 PHST");
		t.equal(moment("1954-06-30T14:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1954-06-30T14:59:59+00:00 should be 23:59:59 PHST");
		t.equal(moment("1954-06-30T15:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:00:00", "1954-06-30T15:00:00+00:00 should be 23:00:00 PHT");

		t.equal(moment("1954-04-11T15:59:59+00:00").tz("Asia/Manila").zone(), -480, "1954-04-11T15:59:59+00:00 should be -480 minutes offset in PHT");
		t.equal(moment("1954-04-11T16:00:00+00:00").tz("Asia/Manila").zone(), -540, "1954-04-11T16:00:00+00:00 should be -540 minutes offset in PHST");
		t.equal(moment("1954-06-30T14:59:59+00:00").tz("Asia/Manila").zone(), -540, "1954-06-30T14:59:59+00:00 should be -540 minutes offset in PHST");
		t.equal(moment("1954-06-30T15:00:00+00:00").tz("Asia/Manila").zone(), -480, "1954-06-30T15:00:00+00:00 should be -480 minutes offset in PHT");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-21T15:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1978-03-21T15:59:59+00:00 should be 23:59:59 PHT");
		t.equal(moment("1978-03-21T16:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "01:00:00", "1978-03-21T16:00:00+00:00 should be 01:00:00 PHST");
		t.equal(moment("1978-09-20T14:59:59+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:59:59", "1978-09-20T14:59:59+00:00 should be 23:59:59 PHST");
		t.equal(moment("1978-09-20T15:00:00+00:00").tz("Asia/Manila").format("HH:mm:ss"), "23:00:00", "1978-09-20T15:00:00+00:00 should be 23:00:00 PHT");

		t.equal(moment("1978-03-21T15:59:59+00:00").tz("Asia/Manila").zone(), -480, "1978-03-21T15:59:59+00:00 should be -480 minutes offset in PHT");
		t.equal(moment("1978-03-21T16:00:00+00:00").tz("Asia/Manila").zone(), -540, "1978-03-21T16:00:00+00:00 should be -540 minutes offset in PHST");
		t.equal(moment("1978-09-20T14:59:59+00:00").tz("Asia/Manila").zone(), -540, "1978-09-20T14:59:59+00:00 should be -540 minutes offset in PHST");
		t.equal(moment("1978-09-20T15:00:00+00:00").tz("Asia/Manila").zone(), -480, "1978-09-20T15:00:00+00:00 should be -480 minutes offset in PHT");

		t.done();
	}
};