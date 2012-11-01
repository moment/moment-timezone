var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		cb();
	},

	// "contains month" : function (test) {
	// 	test.expect(6);

	// 	TZ.addRule("RULESET1,2000,2008,2,2,120,60,D");
	// 	TZ.addRule("RULESET1,2000,2008,6,3,120,0,D");
	// 	TZ.addRule("RULESET1,2009,2010,2,4,120,60,D");

	// 	var ruleset = TZ.getRuleSet('RULESET1');

	// 	test.equal(ruleset.rule(moment.utc([2007, 1, 2]))._dayVal, 3, "Ruleset should get correct rule on earlier month");
	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 2]))._dayVal, 2, "Ruleset should get correct rule on exact month");
	// 	test.equal(ruleset.rule(moment.utc([2007, 3, 2]))._dayVal, 2, "Ruleset should get correct rule on later month");
	// 	test.equal(ruleset.rule(moment.utc([2007, 5, 3]))._dayVal, 2, "Ruleset should get correct rule on earlier month");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 3]))._dayVal, 3, "Ruleset should get correct rule on exact month");
	// 	test.equal(ruleset.rule(moment.utc([2007, 7, 3]))._dayVal, 3, "Ruleset should get correct rule on later month");

	// 	test.done();
	// },

	// "contains day" : function (test) {
	// 	test.expect(6);

	// 	TZ.addRule("RULESET2,2000,2008,2,2,120,60,D");
	// 	TZ.addRule("RULESET2,2000,2008,6,3,120,0,D");
	// 	TZ.addRule("RULESET2,2009,2010,2,4,120,60,D");

	// 	var ruleset = TZ.getRuleSet('RULESET2');

	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 1]))._dayVal, 3, "Ruleset should get correct rule on earlier day");
	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 2]))._dayVal, 2, "Ruleset should get correct rule on exact day");
	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 3]))._dayVal, 2, "Ruleset should get correct rule on later day");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 2]))._dayVal, 2, "Ruleset should get correct rule on earlier day");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 3]))._dayVal, 3, "Ruleset should get correct rule on exact day");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 4]))._dayVal, 3, "Ruleset should get correct rule on later day");

	// 	test.done();
	// },

	// "contains hour" : function (test) {
	// 	test.expect(6);

	// 	TZ.addRule("RULESET3,2000,2008,2,2,120,60,D");
	// 	TZ.addRule("RULESET3,2000,2008,6,3,120,0,D");
	// 	TZ.addRule("RULESET3,2009,2010,2,4,120,60,D");

	// 	var ruleset = TZ.getRuleSet('RULESET3');

	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 2, 1]))._dayVal, 3, "Ruleset should get correct rule on earlier hour");
	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 2, 2]))._dayVal, 2, "Ruleset should get correct rule on exact hour");
	// 	test.equal(ruleset.rule(moment.utc([2007, 2, 2, 3]))._dayVal, 2, "Ruleset should get correct rule on later hour");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 3, 1]))._dayVal, 2, "Ruleset should get correct rule on earlier hour");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 3, 2]))._dayVal, 3, "Ruleset should get correct rule on exact hour");
	// 	test.equal(ruleset.rule(moment.utc([2007, 6, 3, 3]))._dayVal, 3, "Ruleset should get correct rule on later hour");

	// 	test.done();
	// },

	// "out of range" : function (test) {
	// 	test.expect(6);

	// 	TZ.addRule("RULESET2,2000,2008,2,2,120,60,D");
	// 	TZ.addRule("RULESET2,2000,2008,6,3,120,0,D");
	// 	TZ.addRule("RULESET2,2009,2010,2,4,120,60,D");

	// 	var ruleset = TZ.getRuleSet('RULESET2');

	// 	test.equal(ruleset.rule(moment([2007, 2, 1]))._dayVal, 3, "Ruleset should get correct rule on earlier day");
	// 	test.equal(ruleset.rule(moment([2007, 2, 2]))._dayVal, 2, "Ruleset should get correct rule on exact day");
	// 	test.equal(ruleset.rule(moment([2007, 2, 3]))._dayVal, 2, "Ruleset should get correct rule on later day");
	// 	test.equal(ruleset.rule(moment([2007, 6, 2]))._dayVal, 2, "Ruleset should get correct rule on earlier day");
	// 	test.equal(ruleset.rule(moment([2007, 6, 3]))._dayVal, 3, "Ruleset should get correct rule on exact day");
	// 	test.equal(ruleset.rule(moment([2007, 6, 4]))._dayVal, 3, "Ruleset should get correct rule on later day");

	// 	test.done();
	// },

	// "contains day hour" : function (test) {
	// 	test.expect(6);

	// 		"1918,1919,2,0,120,60,D",
	// 		"1918,1919,9,0,120,0,S",
	// 		"1942,1942,1,9,120,60,W",
	// 		"1945,1945,7,14,1380,60,P",
	// 		"1945,1945,8,30,120,0,S",
	// 		"1967,2006,9,0,120,0,S",
	// 		"1967,1973,3,0,120,60,D",
	// 		"1974,1974,0,6,120,60,D",
	// 		"1975,1975,1,23,120,60,D",
	// 		"1976,1986,3,0,120,60,D",
	// 		"1987,2006,3,0:1,120,60,D",
	// 		"2007,9999,2,0:8,120,60,D",
	// 		"2007,9999,10,0:1,120,0,S"

	// 	TZ.addRule("RULESET3,2000,2004,6,2,120,0,D");
	// 	TZ.addRule("RULESET3,2000,2002,2,3,120,60,D");
	// 	TZ.addRule("RULESET3,2003,2003,2,4,120,60,D");
	// 	TZ.addRule("RULESET3,2004,2004,2,5,120,60,D");

	// 	var ruleset = TZ.getRuleSet('RULESET3');

	// 	test.equal(ruleset.rule(moment([2000, 2, 1, ]))._dayVal, 3, "Ruleset should get correct rule on earlier day");
	// 	test.equal(ruleset.rule(moment([2007, 2, 2]))._dayVal, 2, "Ruleset should get correct rule on exact day");
	// 	test.equal(ruleset.rule(moment([2007, 2, 3]))._dayVal, 2, "Ruleset should get correct rule on later day");
	// 	test.equal(ruleset.rule(moment([2007, 6, 2]))._dayVal, 2, "Ruleset should get correct rule on earlier day");
	// 	test.equal(ruleset.rule(moment([2007, 6, 3]))._dayVal, 3, "Ruleset should get correct rule on exact day");
	// 	test.equal(ruleset.rule(moment([2007, 6, 4]))._dayVal, 3, "Ruleset should get correct rule on later day");

	// 	test.done();
	// }
};
