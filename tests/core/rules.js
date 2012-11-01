var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		cb();
	},

	"contains year" : function (test) {
		test.expect(5);

		var exact = TZ.addRule("TEST,2008,2010,2,1,0,0,D");

		test.ok(!exact.contains(moment.utc([2007, 2])), "Rule should not contain year that is too low (2007)");
		test.ok( exact.contains(moment.utc([2008, 2])), "Rule should contain year (2008)");
		test.ok( exact.contains(moment.utc([2009, 2])), "Rule should contain year (2009)");
		test.ok( exact.contains(moment.utc([2010, 2])), "Rule should contain year (2010)");
		test.ok(!exact.contains(moment.utc([2011])), "Rule should not contain year that is too high (2011)");

		test.done();
	},

	"contains month" : function (test) {
		test.expect(2);

		var exact = TZ.addRule("TEST,2009,2009,2,1,0,0,D");

		test.ok(!exact.contains(moment.utc([2009, 1])), "Rule should not contain month that is too low");
		test.ok( exact.contains(moment.utc([2009, 2])), "Rule should contain month");

		test.done();
	},

	"contains date equal" : function (test) {
		test.expect(2);

		var exact = TZ.addRule("TEST,2009,2009,2,2,0,0,D");

		test.ok(!exact.contains(moment.utc([2009, 2, 1])), "Rule should not contain date that is too low");
		test.ok( exact.contains(moment.utc([2009, 2, 2])), "Rule should contain date");

		test.done();
	},

	"contains minutes" : function (test) {
		test.expect(2);

		var exact = TZ.addRule("TEST,2009,2009,2,2,60,0,D");

		test.ok(!exact.contains(moment.utc([2009, 2, 2, 0, 59])), "Rule should not contain minutes that is too low");
		test.ok( exact.contains(moment.utc([2009, 2, 2, 0, 60])), "Rule should contain minutes");

		test.done();
	}
};
