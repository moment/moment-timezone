var TZ = require("../../moment-timezone"),
    moment = require("moment");

function dayOfWeek (week) {
    return moment().day(week).format("dddd");
}

function count (number) {
    return ["first", "second", "third", "fourth"][~~number];
}

function dateForYearTests (dow, month, test) {
    var i,
        rule,
        target,
        format;

    for (i = 0; i < 28; i++) {
        rule = TZ.addRule("TEST,2008,2010,," + month +  ",f:" + i + ",2:00,1:00,D");
        target = i + 1 - dow;
        if (i % 7 < dow) {
            target += 7;
        }

        format = moment([2010, month, target]).format("MMMM D YYYY");

        test.equal(rule._dateForYear(2010), target, "The " + count(i / 7) + ' ' + dayOfWeek(i) + " should be " +format);
    }
}

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
    },

    "_dateForYear (Sunday)" : function (test) {
        test.expect(28);

        dateForYearTests(0, 7, test); // in august 2010, the month starts with sunday

        test.done();
    },

    "_dateForYear (Monday)" : function (test) {
        test.expect(28);

        dateForYearTests(1, 2, test); // in march 2010, the month starts with monday

        test.done();
    },

    "_dateForYear (Tuesday)" : function (test) {
        test.expect(28);

        dateForYearTests(2, 5, test); // in june 2010, the month starts with tuesday

        test.done();
    },

    "_dateForYear (Wednesday)" : function (test) {
        test.expect(28);

        dateForYearTests(3, 8, test); // in september 2010, the month starts with wednesday

        test.done();
    },

    "_dateForYear (Thursday)" : function (test) {
        test.expect(28);

        dateForYearTests(4, 6, test); // in july 2010, the month starts with thursday

        test.done();
    },

    "_dateForYear (Friday)" : function (test) {
        test.expect(28);

        dateForYearTests(5, 9, test); // in october 2010, the month starts with friday

        test.done();
    },

    "_dateForYear (Saturday)" : function (test) {
        test.expect(28);

        dateForYearTests(6, 4, test); // in may 2010, the month starts with saturday

        test.done();
    }
};