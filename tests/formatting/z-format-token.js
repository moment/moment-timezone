var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
    "America/Los_Angeles z format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/Los_Angeles").format("MMM D, YYYY h:mm A z"), "Dec 31, 2010 8:59 PM PST", "2011-01-01T04:59:59+00:00 should be Dec 31, 2010 8:59 PM PST in America/Los_Angeles");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/Los_Angeles").format("MMM D, YYYY h:mm A z"), "May 10, 2012 9:00 PM PDT", "2011-01-01T04:59:59+00:00 should be May 10, 2012 9:00 PM PDT in America/Los_Angeles");

        test.done();
    },
    "America/New_York z format token" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/New_York").format("MMM D, YYYY h:mm A z"), "Dec 31, 2010 11:59 PM EST", "2011-01-01T04:59:59+00:00 should be Dec 31, 2010 11:59 PM EST in America/New_York");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/New_York").format("MMM D, YYYY h:mm A z"), "May 11, 2012 12:00 AM EDT", "2011-01-01T04:59:59+00:00 should be May 11, 2012 12:00 AM EDT in America/New_York");

        test.done();
    }
};