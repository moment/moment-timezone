var moment = require("../index");

exports["parse"] = {
  "parse" : function (t) {
    t.equal(moment.tz("2013-01-01T00:00:00", "America/New_York").format(), "2013-01-01T00:00:00-05:00", "2013-01-01T00:00:00 in America/New_York should be 2013-01-01T00:00:00-05:00");
    t.equal(moment.tz("2013-01-01T00:00:00", "America/Los_Angeles").format(), "2013-01-01T00:00:00-08:00", "2013-01-01T00:00:00 in America/Los_Angeles should be 2013-01-01T00:00:00-08:00");
    t.equal(moment.tz("2013-01-01T00:00:00", "Europe/Paris").format(), "2013-01-01T00:00:00+01:00", "2013-01-01T00:00:00 in Europe/Paris should be 2013-01-01T00:00:00+01:00");
    t.equal(moment.tz("2013-01-01T00:00:00", "Asia/Seoul").format(), "2013-01-01T00:00:00+09:00", "2013-01-01T00:00:00 in Asia/Seoul should be 2013-01-01T00:00:00+09:00");

    t.equal(moment.tz([2013, 0, 1, 0, 0, 0], "America/New_York").format(), "2013-01-01T00:00:00-05:00", "Array constructor respects argument tzid");
    t.done();
  }
};