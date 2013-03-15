var moment = require("../../moment-timezone");

exports["Africa/Casablanca"] = {

	"2013" : function (t) {
		t.equal(moment("2013-04-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2013-04-28T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2013-04-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2013-04-28T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2013-07-09T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2013-07-09T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2013-07-09T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2013-07-09T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2013-08-08T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2013-08-08T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2013-08-08T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2013-08-08T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2013-09-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2013-09-29T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2013-09-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2013-09-29T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2013-04-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2013-04-28T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2013-04-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2013-04-28T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2013-07-09T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2013-07-09T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2013-07-09T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2013-07-09T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2013-08-08T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2013-08-08T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2013-08-08T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2013-08-08T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2013-09-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2013-09-29T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2013-09-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2013-09-29T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2014-04-27T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2014-04-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2014-04-27T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2014-06-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2014-06-29T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2014-06-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2014-06-29T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2014-07-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2014-07-29T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2014-07-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2014-07-29T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2014-09-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2014-09-28T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2014-09-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2014-09-28T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2014-04-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2014-04-27T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2014-04-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2014-04-27T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2014-06-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2014-06-29T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2014-06-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2014-06-29T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2014-07-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2014-07-29T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2014-07-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2014-07-29T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2014-09-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2014-09-28T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2014-09-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2014-09-28T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2015-04-26T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2015-04-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2015-04-26T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2015-06-18T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2015-06-18T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2015-06-18T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2015-06-18T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2015-07-18T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2015-07-18T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2015-07-18T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2015-07-18T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2015-09-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2015-09-27T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2015-09-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2015-09-27T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2015-04-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2015-04-26T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2015-04-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2015-04-26T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2015-06-18T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2015-06-18T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2015-06-18T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2015-06-18T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2015-07-18T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2015-07-18T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2015-07-18T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2015-07-18T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2015-09-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2015-09-27T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2015-09-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2015-09-27T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2016-04-24T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2016-04-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2016-04-24T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2016-06-07T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2016-06-07T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2016-06-07T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2016-06-07T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2016-07-07T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2016-07-07T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2016-07-07T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2016-07-07T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2016-09-25T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2016-09-25T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2016-09-25T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2016-09-25T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2016-04-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2016-04-24T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2016-04-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2016-04-24T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2016-06-07T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2016-06-07T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2016-06-07T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2016-06-07T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2016-07-07T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2016-07-07T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2016-07-07T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2016-07-07T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2016-09-25T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2016-09-25T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2016-09-25T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2016-09-25T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2017-04-30T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2017-04-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2017-04-30T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2017-05-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2017-05-27T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2017-05-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2017-05-27T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2017-06-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2017-06-26T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2017-06-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2017-06-26T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2017-09-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2017-09-24T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2017-09-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2017-09-24T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2017-04-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2017-04-30T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2017-04-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2017-04-30T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2017-05-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2017-05-27T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2017-05-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2017-05-27T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2017-06-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2017-06-26T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2017-06-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2017-06-26T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2017-09-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2017-09-24T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2017-09-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2017-09-24T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2018-04-29T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2018-04-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2018-04-29T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2018-05-16T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2018-05-16T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2018-05-16T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2018-05-16T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2018-06-15T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2018-06-15T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2018-06-15T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2018-06-15T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2018-09-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2018-09-30T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2018-09-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2018-09-30T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2018-04-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2018-04-29T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2018-04-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2018-04-29T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2018-05-16T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2018-05-16T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2018-05-16T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2018-05-16T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2018-06-15T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2018-06-15T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2018-06-15T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2018-06-15T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2018-09-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2018-09-30T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2018-09-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2018-09-30T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2019-04-28T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2019-04-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2019-04-28T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2019-05-06T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2019-05-06T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2019-05-06T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2019-05-06T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");
		t.equal(moment("2019-06-05T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2019-06-05T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2019-06-05T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2019-06-05T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2019-09-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2019-09-29T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2019-09-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2019-09-29T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2019-04-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2019-04-28T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2019-04-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2019-04-28T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2019-05-06T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2019-05-06T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2019-05-06T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2019-05-06T02:00:00+00:00 should be 0 minutes offset");
		t.equal(moment("2019-06-05T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2019-06-05T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2019-06-05T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2019-06-05T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2019-09-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2019-09-29T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2019-09-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2019-09-29T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-05-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2020-05-24T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2020-05-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2020-05-24T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2020-09-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2020-09-27T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2020-09-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2020-09-27T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2020-05-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2020-05-24T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2020-05-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2020-05-24T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2020-09-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2020-09-27T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2020-09-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2020-09-27T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-05-13T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2021-05-13T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2021-05-13T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2021-05-13T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2021-09-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2021-09-26T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2021-09-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2021-09-26T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2021-05-13T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2021-05-13T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2021-05-13T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2021-05-13T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2021-09-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2021-09-26T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2021-09-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2021-09-26T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-05-03T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2022-05-03T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2022-05-03T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2022-05-03T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2022-09-25T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2022-09-25T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2022-09-25T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2022-09-25T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2022-05-03T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2022-05-03T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2022-05-03T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2022-05-03T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2022-09-25T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2022-09-25T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2022-09-25T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2022-09-25T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2023-04-30T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2023-04-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2023-04-30T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2023-09-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2023-09-24T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2023-09-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2023-09-24T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2023-04-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2023-04-30T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2023-04-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2023-04-30T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2023-09-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2023-09-24T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2023-09-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2023-09-24T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2024-04-28T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2024-04-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2024-04-28T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2024-09-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2024-09-29T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2024-09-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2024-09-29T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2024-04-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2024-04-28T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2024-04-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2024-04-28T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2024-09-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2024-09-29T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2024-09-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2024-09-29T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2025-04-27T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2025-04-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2025-04-27T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2025-09-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2025-09-28T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2025-09-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2025-09-28T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2025-04-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2025-04-27T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2025-04-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2025-04-27T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2025-09-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2025-09-28T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2025-09-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2025-09-28T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2026-04-26T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2026-04-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2026-04-26T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2026-09-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2026-09-27T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2026-09-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2026-09-27T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2026-04-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2026-04-26T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2026-04-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2026-04-26T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2026-09-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2026-09-27T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2026-09-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2026-09-27T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-25T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2027-04-25T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2027-04-25T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2027-04-25T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2027-09-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2027-09-26T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2027-09-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2027-09-26T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2027-04-25T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2027-04-25T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2027-04-25T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2027-04-25T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2027-09-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2027-09-26T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2027-09-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2027-09-26T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2028-04-30T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2028-04-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2028-04-30T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2028-09-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2028-09-24T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2028-09-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2028-09-24T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2028-04-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2028-04-30T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2028-04-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2028-04-30T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2028-09-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2028-09-24T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2028-09-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2028-09-24T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2029-04-29T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2029-04-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2029-04-29T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2029-09-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2029-09-30T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2029-09-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2029-09-30T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2029-04-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2029-04-29T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2029-04-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2029-04-29T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2029-09-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2029-09-30T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2029-09-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2029-09-30T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2030-04-28T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2030-04-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2030-04-28T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2030-09-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2030-09-29T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2030-09-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2030-09-29T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2030-04-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2030-04-28T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2030-04-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2030-04-28T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2030-09-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2030-09-29T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2030-09-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2030-09-29T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2031-04-27T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2031-04-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2031-04-27T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2031-09-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2031-09-28T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2031-09-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2031-09-28T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2031-04-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2031-04-27T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2031-04-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2031-04-27T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2031-09-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2031-09-28T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2031-09-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2031-09-28T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-25T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2032-04-25T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2032-04-25T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2032-04-25T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2032-09-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2032-09-26T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2032-09-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2032-09-26T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2032-04-25T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2032-04-25T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2032-04-25T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2032-04-25T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2032-09-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2032-09-26T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2032-09-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2032-09-26T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2033-04-24T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2033-04-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2033-04-24T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2033-09-25T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2033-09-25T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2033-09-25T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2033-09-25T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2033-04-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2033-04-24T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2033-04-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2033-04-24T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2033-09-25T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2033-09-25T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2033-09-25T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2033-09-25T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2034-04-30T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2034-04-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2034-04-30T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2034-09-24T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2034-09-24T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2034-09-24T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2034-09-24T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2034-04-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2034-04-30T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2034-04-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2034-04-30T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2034-09-24T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2034-09-24T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2034-09-24T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2034-09-24T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2035-04-29T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2035-04-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2035-04-29T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2035-09-30T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2035-09-30T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2035-09-30T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2035-09-30T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2035-04-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2035-04-29T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2035-04-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2035-04-29T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2035-09-30T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2035-09-30T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2035-09-30T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2035-09-30T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2036-04-27T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2036-04-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2036-04-27T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2036-09-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2036-09-28T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2036-09-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2036-09-28T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2036-04-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2036-04-27T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2036-04-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2036-04-27T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2036-09-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2036-09-28T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2036-09-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2036-09-28T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-26T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "01:59:59", "2037-04-26T01:59:59+00:00 should be 01:59:59 in Africa/Casablanca");
		t.equal(moment("2037-04-26T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "03:00:00", "2037-04-26T02:00:00+00:00 should be 03:00:00 in Africa/Casablanca");
		t.equal(moment("2037-09-27T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:59:59", "2037-09-27T01:59:59+00:00 should be 02:59:59 in Africa/Casablanca");
		t.equal(moment("2037-09-27T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm:ss"), "02:00:00", "2037-09-27T02:00:00+00:00 should be 02:00:00 in Africa/Casablanca");

		t.equal(moment("2037-04-26T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2037-04-26T01:59:59+00:00 should be 0 minutes offset");
		t.equal(moment("2037-04-26T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2037-04-26T02:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2037-09-27T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2037-09-27T01:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2037-09-27T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2037-09-27T02:00:00+00:00 should be 0 minutes offset");

		t.done();
	}
};