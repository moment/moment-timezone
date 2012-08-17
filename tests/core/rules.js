var TZ = require("../../moment-timezone"),
    moment = require("moment");

exports.rules = {
    "setUp" : function (cb) {
        cb();
    },

    "contains year" : function (test) {
        test.expect(3);

        var exact = TZ.addRule("TEST,2008,2010,,2,e:1,2:00,1:00,D");

        test.ok(exact.contains(moment([2010, 2])), "Rule should contain year");
        test.ok(!exact.contains(moment([2007, 2])), "Rule should not contain year too low");
        test.ok(!exact.contains(moment([2011, 2])), "Rule should not contain year too high");

        test.done();
    },

    "contains month" : function (test) {
        test.expect(2);

        var exact = TZ.addRule("TEST,2008,2010,,2,e:1,2:00,1:00,D");

        test.ok(exact.contains(moment([2010, 2])), "Rule should contain month");
        test.ok(!exact.contains(moment([2010, 1])), "Rule should not contain if month is too low");

        test.done();
    },

    "contains date equal" : function (test) {
        test.expect(2);

        var exact = TZ.addRule("TEST,2008,2010,,2,e:2,2:00,1:00,D");

        test.ok(exact.contains(moment([2010, 2, 2])), "Rule should contain date");
        test.ok(!exact.contains(moment([2010, 2, 1])), "Rule should not contain if date is too low");

        test.done();
    }
};