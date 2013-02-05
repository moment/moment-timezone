var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
    "America/Los_Angeles z format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/Los_Angeles").format("MMM D, YYYY h:mm A z"), "Dec 31, 2010 8:59 PM PST");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/Los_Angeles").format("MMM D, YYYY h:mm A z"), "May 10, 2012 9:00 PM PDT");

        test.done();
    },
    "America/New_York z format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/New_York").format("MMM D, YYYY h:mm A z"), "Dec 31, 2010 11:59 PM EST");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/New_York").format("MMM D, YYYY h:mm A z"), "May 11, 2012 12:00 AM EDT");

        test.done();
    },
    "America/Los_Angeles Z format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/Los_Angeles").format("YYYY-MM-DDTHH:mm:ssZ"), "2010-12-31T20:59:59-08:00");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/Los_Angeles").format("YYYY-MM-DDTHH:mm:ssZ"), "2012-05-10T21:00:00-07:00");

        test.done();
    },
    "America/New_York Z format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/New_York").format("YYYY-MM-DDTHH:mm:ssZ"), "2010-12-31T23:59:59-05:00");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/New_York").format("YYYY-MM-DDTHH:mm:ssZ"), "2012-05-11T00:00:00-04:00");

        test.done();
    },
    "America/Los_Angeles ZZ format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/Los_Angeles").format("YYYY-MM-DDTHH:mm:ssZZ"), "2010-12-31T20:59:59-0800");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/Los_Angeles").format("YYYY-MM-DDTHH:mm:ssZZ"), "2012-05-10T21:00:00-0700");

        test.done();
    },
    "America/New_York ZZ format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/New_York").format("YYYY-MM-DDTHH:mm:ssZZ"), "2010-12-31T23:59:59-0500");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/New_York").format("YYYY-MM-DDTHH:mm:ssZZ"), "2012-05-11T00:00:00-0400");

        test.done();
    }
};