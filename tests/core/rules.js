var TZ = require("../../moment-timezone"),
    moment = require("moment");

exports.rules = {
    "setUp" : function (cb) {
        this.a = new TZ.Rule("US", 1918, 1919, null, 2, "lastSun", "2:00", "1:00", "D");
        cb();
    },

    "contains" : function (test) {
        test.expect(4);

        test.ok(this.a.contains(moment([1918, 4])), "Rule should contain May 1 1918");
        test.ok(!this.a.contains(moment([1920, 4])), "Rule should not contain May 1 1920");

        test.ok(this.a.contains(moment([1918, 4])), "Rule should contain May 1 1918");
        test.ok(!this.a.contains(moment([1918, 1])), "Rule should not contain February 1 1918");

        test.done();
    }
};