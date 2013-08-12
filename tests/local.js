var moment = require("../index");

exports["local"] = {

    "moment.fn.local" : function (t) {
        t.equal(moment.tz("2013-01-01T00:00:00", "America/New_York").local().format(), "2013-01-01T00:00:00-05:00", "2013-01-01T00:00:00 in America/New_York should be 2013-01-01T00:00:00-05:00");
        t.equal(moment.tz("2013-01-01T00:00:00", "America/Los_Angeles").local().format(), "2013-01-01T00:00:00-08:00", "2013-01-01T00:00:00 in America/Los_Angeles should be 2013-01-01T00:00:00-08:00");
        t.equal(moment.tz("2013-01-01T00:00:00", "Europe/Paris").local().format(), "2013-01-01T00:00:00+01:00", "2013-01-01T00:00:00 in Europe/Paris should be 2013-01-01T00:00:00+01:00");
        t.equal(moment.tz("2013-01-01T00:00:00", "Asia/Seoul").local().format(), "2013-01-01T00:00:00+09:00", "2013-01-01T00:00:00 in Asia/Seoul should be 2013-01-01T00:00:00+09:00");

        t.done();
    }
};
