var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		cb();
	},

	"contains month" : function (test) {
		test.expect(6);

		TZ.addRule("RULESET,2000,2008,,2,e:2,2:00,1:00,D");
		TZ.addRule("RULESET,2000,2008,,6,e:3,2:00,0:00,D");
		TZ.addRule("RULESET,2009,2010,,2,e:4,2:00,1:00,D");

		var ruleset = TZ.getRuleSet('RULESET');

		test.equal(ruleset.rule(moment([2007, 1, 2]))._dayVal, 3, "Ruleset should get correct rule on earlier month");
		test.equal(ruleset.rule(moment([2007, 2, 2]))._dayVal, 2, "Ruleset should get correct rule on exact month");
		test.equal(ruleset.rule(moment([2007, 3, 2]))._dayVal, 2, "Ruleset should get correct rule on later month");
		test.equal(ruleset.rule(moment([2007, 5, 3]))._dayVal, 2, "Ruleset should get correct rule on earlier month");
		test.equal(ruleset.rule(moment([2007, 6, 3]))._dayVal, 3, "Ruleset should get correct rule on exact month");
		test.equal(ruleset.rule(moment([2007, 7, 3]))._dayVal, 3, "Ruleset should get correct rule on later month");

		test.done();
	}
};
