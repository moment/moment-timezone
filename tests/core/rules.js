var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		cb();
	},

	"contains year" : function (test) {
		test.expect(6);

		var exact = TZ.addRule("TEST,2008,2010,2,1,0,0,D");

		test.ok(!exact.contains(2007, 2, 1, 0), "Rule should not contain year that is too low (2007)");
		test.ok( exact.contains(2008, 2, 1, 0), "Rule should contain year (2008)");
		test.ok( exact.contains(2009, 2, 1, 0), "Rule should contain year (2009)");
		test.ok( exact.contains(2010, 2, 1, 0), "Rule should contain year (2010)");
		test.ok( exact.contains(2011, 2, 1, 0), "Rule should contain year that is too high if it applied the year before (2011)");
		test.ok(!exact.contains(2012, 2, 1, 0), "Rule should not contain year that is too high (2012)");

		test.done();
	},

	"contains month" : function (test) {
		test.expect(5);

		var exact = TZ.addRule("TEST,2009,2009,2,1,0,0,D");

		test.ok(!exact.contains(2009, 1, 1, 0), "Rule should not contain month that is too low");
		test.ok( exact.contains(2009, 2, 1, 0), "Rule should contain month");
		test.ok( exact.contains(2009, 3, 1, 0), "Rule should contain month");
		test.ok( exact.contains(2010, 2, 1, 0), "Rule should contain month");
		test.ok(!exact.contains(2010, 3, 1, 0), "Rule should not contain month that is too high");

		test.done();
	},

	"contains date equal" : function (test) {
		test.expect(5);

		var exact = TZ.addRule("TEST,2009,2009,2,2,0,0,D");

		test.ok(!exact.contains(2009, 2, 1, 0), "Rule should not contain date that is too low");
		test.ok( exact.contains(2009, 2, 2, 0), "Rule should contain date");
		test.ok( exact.contains(2009, 2, 3, 0), "Rule should contain date");
		test.ok( exact.contains(2010, 2, 2, 0), "Rule should contain date");
		test.ok(!exact.contains(2010, 2, 3, 0), "Rule should not contain date that is too high");

		test.done();
	},

	"contains minutes" : function (test) {
		test.expect(5);

		var exact = TZ.addRule("TEST,2009,2009,2,2,60,0,D");

		test.ok(!exact.contains(2009, 2, 2, 59), "Rule should not contain minutes that is too low");
		test.ok( exact.contains(2009, 2, 2, 60), "Rule should contain minutes");
		test.ok( exact.contains(2009, 2, 2, 61), "Rule should contain minutes");
		test.ok( exact.contains(2010, 2, 2, 60), "Rule should contain minutes");
		test.ok(!exact.contains(2010, 2, 2, 61), "Rule should not contain minutes that is too high");

		test.done();
	}
};
