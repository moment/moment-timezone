var moment = require("../../moment-timezone");

exports.rules = {
	"setUp" : function (cb) {
		cb();
	},

	"contains year" : function (test) {
		test.expect(5);

		var rule = moment.tz.addRule("TEST,2008,2010,2,1,0,0,D");

		test.ok(!rule.contains(moment.utc([2007, 2])), "Rule should not contain year that is too low (2007)");
		test.ok( rule.contains(moment.utc([2008, 2])), "Rule should contain year (2008)");
		test.ok( rule.contains(moment.utc([2009, 2])), "Rule should contain year (2009)");
		test.ok( rule.contains(moment.utc([2010, 2])), "Rule should contain year (2010)");
		test.ok(!rule.contains(moment.utc([2011])), "Rule should not contain year that is too high (2011)");

		test.done();
	},

	"contains month" : function (test) {
		test.expect(2);

		var rule = moment.tz.addRule("TEST,2009,2009,2,1,0,0,D");

		test.ok(!rule.contains(moment.utc([2009, 1])), "Rule should not contain month that is too low");
		test.ok( rule.contains(moment.utc([2009, 2])), "Rule should contain month");

		test.done();
	},

	"contains date equal" : function (test) {
		test.expect(2);

		var rule = moment.tz.addRule("TEST,2009,2009,2,2,0,0,D");

		test.ok(!rule.contains(moment.utc([2009, 2, 1])), "Rule should not contain date that is too low");
		test.ok( rule.contains(moment.utc([2009, 2, 2])), "Rule should contain date");

		test.done();
	},

	"contains minutes" : function (test) {
		test.expect(2);

		var rule = moment.tz.addRule("TEST,2009,2009,2,2,60,0,D");

		test.ok(!rule.contains(moment.utc([2009, 2, 2, 0, 59])), "Rule should not contain minutes that is too low");
		test.ok( rule.contains(moment.utc([2009, 2, 2, 0, 60])), "Rule should contain minutes");

		test.done();
	},

	"utc at hour" : function (test) {
		test.expect(4);

		moment.tz.addRule("TEST_UTC_AT,2009,2009,2,2,60u,60,D");
		var zone = moment.tz.addZone("TEST_UTC_AT,60,TEST_UTC_AT,TST");

		test.equal(zone.offset(moment.utc([2009, 2, 2, 0, 59])),  60, "A trailing 'u' should use utc offset for the 'at'");
		test.equal(zone.offset(moment.utc([2009, 2, 2, 0, 60])), 120, "A trailing 'u' should use utc offset for the 'at'");
		test.equal(zone.offset(moment.utc([2009, 2, 2, 1, 59])), 120, "A trailing 'u' should use utc offset for the 'at'");
		test.equal(zone.offset(moment.utc([2009, 2, 2, 2, 60])), 120, "A trailing 'u' should use utc offset for the 'at'");

		test.done();
	}
};
