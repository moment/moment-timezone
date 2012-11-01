var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {

	"date for year August (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Sunday on or after August 1 should be August 1 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 2 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 3 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 4 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 5 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 6 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 7 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Sunday on or after August 8 should be August 8 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 9 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 10 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 11 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 12 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 13 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 14 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Sunday on or after August 15 should be August 15 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 16 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 17 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 18 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 19 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 20 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 21 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Sunday on or after August 22 should be August 22 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Sunday on or after August 23 should be August 29 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Sunday on or after August 24 should be August 29 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Sunday on or after August 25 should be August 29 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Sunday on or after August 26 should be August 29 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Sunday on or after August 27 should be August 29 2010");

		rule = TZ.addRule("TEST,2008,2010,7,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Sunday on or after August 28 should be August 29 2010");
		test.done();
	},

	"date for year August (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Monday on or after August 1 should be August 2 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Monday on or after August 2 should be August 2 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 3 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 4 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 5 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 6 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 7 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 8 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Monday on or after August 9 should be August 9 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 10 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 11 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 12 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 13 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 14 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 15 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Monday on or after August 16 should be August 16 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 17 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 18 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 19 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 20 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 21 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 22 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Monday on or after August 23 should be August 23 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Monday on or after August 24 should be August 30 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Monday on or after August 25 should be August 30 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Monday on or after August 26 should be August 30 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Monday on or after August 27 should be August 30 2010");

		rule = TZ.addRule("TEST,2008,2010,7,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Monday on or after August 28 should be August 30 2010");
		test.done();
	},

	"date for year August (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Tuesday on or after August 1 should be August 3 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Tuesday on or after August 2 should be August 3 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Tuesday on or after August 3 should be August 3 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 4 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 5 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 6 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 7 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 8 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 9 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Tuesday on or after August 10 should be August 10 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 11 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 12 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 13 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 14 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 15 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 16 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Tuesday on or after August 17 should be August 17 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 18 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 19 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 20 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 21 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 22 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 23 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Tuesday on or after August 24 should be August 24 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Tuesday on or after August 25 should be August 31 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Tuesday on or after August 26 should be August 31 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Tuesday on or after August 27 should be August 31 2010");

		rule = TZ.addRule("TEST,2008,2010,7,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Tuesday on or after August 28 should be August 31 2010");
		test.done();
	},

	"date for year August (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Wednesday on or after August 1 should be August 4 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Wednesday on or after August 2 should be August 4 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Wednesday on or after August 3 should be August 4 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Wednesday on or after August 4 should be August 4 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 5 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 6 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 7 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 8 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 9 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 10 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Wednesday on or after August 11 should be August 11 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 12 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 13 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 14 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 15 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 16 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 17 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Wednesday on or after August 18 should be August 18 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 19 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 20 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 21 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 22 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 23 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 24 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Wednesday on or after August 25 should be August 25 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Wednesday on or after September 26 should be September 1 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Wednesday on or after September 27 should be September 1 2010");

		rule = TZ.addRule("TEST,2008,2010,7,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Wednesday on or after September 28 should be September 1 2010");
		test.done();
	},

	"date for year August (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Thursday on or after August 1 should be August 5 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Thursday on or after August 2 should be August 5 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Thursday on or after August 3 should be August 5 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Thursday on or after August 4 should be August 5 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Thursday on or after August 5 should be August 5 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 6 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 7 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 8 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 9 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 10 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 11 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Thursday on or after August 12 should be August 12 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 13 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 14 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 15 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 16 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 17 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 18 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Thursday on or after August 19 should be August 19 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 20 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 21 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 22 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 23 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 24 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 25 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Thursday on or after August 26 should be August 26 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Thursday on or after September 27 should be September 2 2010");

		rule = TZ.addRule("TEST,2008,2010,7,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Thursday on or after September 28 should be September 2 2010");
		test.done();
	},

	"date for year August (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Friday on or after August 1 should be August 6 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Friday on or after August 2 should be August 6 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Friday on or after August 3 should be August 6 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Friday on or after August 4 should be August 6 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Friday on or after August 5 should be August 6 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Friday on or after August 6 should be August 6 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 7 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 8 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 9 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 10 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 11 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 12 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Friday on or after August 13 should be August 13 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 14 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 15 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 16 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 17 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 18 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 19 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Friday on or after August 20 should be August 20 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 21 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 22 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 23 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 24 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 25 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 26 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Friday on or after August 27 should be August 27 2010");

		rule = TZ.addRule("TEST,2008,2010,7,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Friday on or after September 28 should be September 3 2010");
		test.done();
	},

	"date for year August (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,7,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 1 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 2 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 3 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 4 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 5 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 6 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Saturday on or after August 7 should be August 7 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 8 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 9 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 10 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 11 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 12 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 13 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Saturday on or after August 14 should be August 14 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 15 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 16 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 17 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 18 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 19 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 20 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Saturday on or after August 21 should be August 21 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 22 should be August 28 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 23 should be August 28 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 24 should be August 28 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 25 should be August 28 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 26 should be August 28 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 27 should be August 28 2010");

		rule = TZ.addRule("TEST,2008,2010,7,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Saturday on or after August 28 should be August 28 2010");
		test.done();
	},

	"date for year March (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 1 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 2 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 3 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 4 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 5 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 6 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Sunday on or after March 7 should be March 7 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 8 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 9 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 10 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 11 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 12 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 13 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Sunday on or after March 14 should be March 14 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 15 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 16 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 17 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 18 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 19 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 20 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Sunday on or after March 21 should be March 21 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 22 should be March 28 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 23 should be March 28 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 24 should be March 28 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 25 should be March 28 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 26 should be March 28 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 27 should be March 28 2010");

		rule = TZ.addRule("TEST,2008,2010,2,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Sunday on or after March 28 should be March 28 2010");
		test.done();
	},

	"date for year March (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Monday on or after March 1 should be March 1 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 2 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 3 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 4 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 5 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 6 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 7 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Monday on or after March 8 should be March 8 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 9 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 10 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 11 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 12 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 13 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 14 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Monday on or after March 15 should be March 15 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 16 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 17 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 18 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 19 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 20 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 21 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Monday on or after March 22 should be March 22 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Monday on or after March 23 should be March 29 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Monday on or after March 24 should be March 29 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Monday on or after March 25 should be March 29 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Monday on or after March 26 should be March 29 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Monday on or after March 27 should be March 29 2010");

		rule = TZ.addRule("TEST,2008,2010,2,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Monday on or after March 28 should be March 29 2010");
		test.done();
	},

	"date for year March (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Tuesday on or after March 1 should be March 2 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Tuesday on or after March 2 should be March 2 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 3 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 4 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 5 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 6 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 7 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 8 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Tuesday on or after March 9 should be March 9 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 10 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 11 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 12 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 13 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 14 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 15 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Tuesday on or after March 16 should be March 16 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 17 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 18 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 19 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 20 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 21 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 22 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Tuesday on or after March 23 should be March 23 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Tuesday on or after March 24 should be March 30 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Tuesday on or after March 25 should be March 30 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Tuesday on or after March 26 should be March 30 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Tuesday on or after March 27 should be March 30 2010");

		rule = TZ.addRule("TEST,2008,2010,2,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Tuesday on or after March 28 should be March 30 2010");
		test.done();
	},

	"date for year March (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Wednesday on or after March 1 should be March 3 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Wednesday on or after March 2 should be March 3 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Wednesday on or after March 3 should be March 3 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 4 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 5 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 6 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 7 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 8 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 9 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Wednesday on or after March 10 should be March 10 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 11 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 12 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 13 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 14 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 15 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 16 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Wednesday on or after March 17 should be March 17 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 18 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 19 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 20 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 21 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 22 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 23 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Wednesday on or after March 24 should be March 24 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Wednesday on or after March 25 should be March 31 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Wednesday on or after March 26 should be March 31 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Wednesday on or after March 27 should be March 31 2010");

		rule = TZ.addRule("TEST,2008,2010,2,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Wednesday on or after March 28 should be March 31 2010");
		test.done();
	},

	"date for year March (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Thursday on or after March 1 should be March 4 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Thursday on or after March 2 should be March 4 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Thursday on or after March 3 should be March 4 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Thursday on or after March 4 should be March 4 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 5 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 6 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 7 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 8 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 9 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 10 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Thursday on or after March 11 should be March 11 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 12 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 13 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 14 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 15 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 16 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 17 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Thursday on or after March 18 should be March 18 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 19 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 20 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 21 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 22 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 23 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 24 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Thursday on or after March 25 should be March 25 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Thursday on or after April 26 should be April 1 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Thursday on or after April 27 should be April 1 2010");

		rule = TZ.addRule("TEST,2008,2010,2,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Thursday on or after April 28 should be April 1 2010");
		test.done();
	},

	"date for year March (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Friday on or after March 1 should be March 5 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Friday on or after March 2 should be March 5 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Friday on or after March 3 should be March 5 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Friday on or after March 4 should be March 5 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Friday on or after March 5 should be March 5 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 6 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 7 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 8 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 9 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 10 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 11 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Friday on or after March 12 should be March 12 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 13 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 14 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 15 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 16 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 17 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 18 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Friday on or after March 19 should be March 19 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 20 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 21 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 22 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 23 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 24 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 25 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Friday on or after March 26 should be March 26 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Friday on or after April 27 should be April 2 2010");

		rule = TZ.addRule("TEST,2008,2010,2,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Friday on or after April 28 should be April 2 2010");
		test.done();
	},

	"date for year March (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,2,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Saturday on or after March 1 should be March 6 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Saturday on or after March 2 should be March 6 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Saturday on or after March 3 should be March 6 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Saturday on or after March 4 should be March 6 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Saturday on or after March 5 should be March 6 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Saturday on or after March 6 should be March 6 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 7 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 8 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 9 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 10 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 11 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 12 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Saturday on or after March 13 should be March 13 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 14 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 15 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 16 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 17 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 18 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 19 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Saturday on or after March 20 should be March 20 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 21 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 22 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 23 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 24 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 25 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 26 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Saturday on or after March 27 should be March 27 2010");

		rule = TZ.addRule("TEST,2008,2010,2,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Saturday on or after April 28 should be April 3 2010");
		test.done();
	},

	"date for year June (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Sunday on or after June 1 should be June 6 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Sunday on or after June 2 should be June 6 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Sunday on or after June 3 should be June 6 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Sunday on or after June 4 should be June 6 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Sunday on or after June 5 should be June 6 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Sunday on or after June 6 should be June 6 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 7 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 8 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 9 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 10 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 11 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 12 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Sunday on or after June 13 should be June 13 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 14 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 15 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 16 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 17 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 18 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 19 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Sunday on or after June 20 should be June 20 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 21 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 22 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 23 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 24 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 25 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 26 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Sunday on or after June 27 should be June 27 2010");

		rule = TZ.addRule("TEST,2008,2010,5,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Sunday on or after July 28 should be July 4 2010");
		test.done();
	},

	"date for year June (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 1 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 2 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 3 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 4 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 5 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 6 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Monday on or after June 7 should be June 7 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 8 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 9 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 10 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 11 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 12 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 13 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Monday on or after June 14 should be June 14 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 15 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 16 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 17 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 18 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 19 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 20 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Monday on or after June 21 should be June 21 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 22 should be June 28 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 23 should be June 28 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 24 should be June 28 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 25 should be June 28 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 26 should be June 28 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 27 should be June 28 2010");

		rule = TZ.addRule("TEST,2008,2010,5,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Monday on or after June 28 should be June 28 2010");
		test.done();
	},

	"date for year June (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Tuesday on or after June 1 should be June 1 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 2 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 3 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 4 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 5 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 6 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 7 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Tuesday on or after June 8 should be June 8 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 9 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 10 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 11 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 12 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 13 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 14 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Tuesday on or after June 15 should be June 15 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 16 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 17 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 18 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 19 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 20 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 21 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Tuesday on or after June 22 should be June 22 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Tuesday on or after June 23 should be June 29 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Tuesday on or after June 24 should be June 29 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Tuesday on or after June 25 should be June 29 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Tuesday on or after June 26 should be June 29 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Tuesday on or after June 27 should be June 29 2010");

		rule = TZ.addRule("TEST,2008,2010,5,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Tuesday on or after June 28 should be June 29 2010");
		test.done();
	},

	"date for year June (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Wednesday on or after June 1 should be June 2 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Wednesday on or after June 2 should be June 2 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 3 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 4 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 5 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 6 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 7 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 8 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Wednesday on or after June 9 should be June 9 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 10 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 11 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 12 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 13 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 14 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 15 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Wednesday on or after June 16 should be June 16 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 17 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 18 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 19 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 20 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 21 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 22 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Wednesday on or after June 23 should be June 23 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Wednesday on or after June 24 should be June 30 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Wednesday on or after June 25 should be June 30 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Wednesday on or after June 26 should be June 30 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Wednesday on or after June 27 should be June 30 2010");

		rule = TZ.addRule("TEST,2008,2010,5,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Wednesday on or after June 28 should be June 30 2010");
		test.done();
	},

	"date for year June (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Thursday on or after June 1 should be June 3 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Thursday on or after June 2 should be June 3 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Thursday on or after June 3 should be June 3 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 4 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 5 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 6 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 7 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 8 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 9 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Thursday on or after June 10 should be June 10 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 11 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 12 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 13 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 14 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 15 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 16 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Thursday on or after June 17 should be June 17 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 18 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 19 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 20 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 21 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 22 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 23 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Thursday on or after June 24 should be June 24 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Thursday on or after July 25 should be July 1 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Thursday on or after July 26 should be July 1 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Thursday on or after July 27 should be July 1 2010");

		rule = TZ.addRule("TEST,2008,2010,5,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Thursday on or after July 28 should be July 1 2010");
		test.done();
	},

	"date for year June (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Friday on or after June 1 should be June 4 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Friday on or after June 2 should be June 4 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Friday on or after June 3 should be June 4 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Friday on or after June 4 should be June 4 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 5 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 6 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 7 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 8 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 9 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 10 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Friday on or after June 11 should be June 11 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 12 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 13 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 14 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 15 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 16 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 17 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Friday on or after June 18 should be June 18 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 19 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 20 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 21 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 22 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 23 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 24 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Friday on or after June 25 should be June 25 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Friday on or after July 26 should be July 2 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Friday on or after July 27 should be July 2 2010");

		rule = TZ.addRule("TEST,2008,2010,5,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Friday on or after July 28 should be July 2 2010");
		test.done();
	},

	"date for year June (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,5,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Saturday on or after June 1 should be June 5 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Saturday on or after June 2 should be June 5 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Saturday on or after June 3 should be June 5 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Saturday on or after June 4 should be June 5 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Saturday on or after June 5 should be June 5 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 6 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 7 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 8 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 9 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 10 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 11 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Saturday on or after June 12 should be June 12 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 13 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 14 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 15 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 16 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 17 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 18 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Saturday on or after June 19 should be June 19 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 20 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 21 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 22 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 23 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 24 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 25 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Saturday on or after June 26 should be June 26 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Saturday on or after July 27 should be July 3 2010");

		rule = TZ.addRule("TEST,2008,2010,5,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Saturday on or after July 28 should be July 3 2010");
		test.done();
	},

	"date for year September (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Sunday on or after September 1 should be September 5 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Sunday on or after September 2 should be September 5 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Sunday on or after September 3 should be September 5 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Sunday on or after September 4 should be September 5 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Sunday on or after September 5 should be September 5 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 6 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 7 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 8 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 9 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 10 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 11 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Sunday on or after September 12 should be September 12 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 13 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 14 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 15 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 16 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 17 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 18 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Sunday on or after September 19 should be September 19 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 20 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 21 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 22 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 23 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 24 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 25 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Sunday on or after September 26 should be September 26 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Sunday on or after October 27 should be October 3 2010");

		rule = TZ.addRule("TEST,2008,2010,8,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Sunday on or after October 28 should be October 3 2010");
		test.done();
	},

	"date for year September (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Monday on or after September 1 should be September 6 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Monday on or after September 2 should be September 6 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Monday on or after September 3 should be September 6 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Monday on or after September 4 should be September 6 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Monday on or after September 5 should be September 6 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Monday on or after September 6 should be September 6 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 7 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 8 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 9 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 10 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 11 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 12 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Monday on or after September 13 should be September 13 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 14 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 15 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 16 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 17 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 18 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 19 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Monday on or after September 20 should be September 20 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 21 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 22 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 23 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 24 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 25 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 26 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Monday on or after September 27 should be September 27 2010");

		rule = TZ.addRule("TEST,2008,2010,8,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Monday on or after October 28 should be October 4 2010");
		test.done();
	},

	"date for year September (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 1 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 2 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 3 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 4 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 5 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 6 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Tuesday on or after September 7 should be September 7 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 8 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 9 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 10 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 11 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 12 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 13 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Tuesday on or after September 14 should be September 14 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 15 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 16 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 17 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 18 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 19 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 20 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Tuesday on or after September 21 should be September 21 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 22 should be September 28 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 23 should be September 28 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 24 should be September 28 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 25 should be September 28 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 26 should be September 28 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 27 should be September 28 2010");

		rule = TZ.addRule("TEST,2008,2010,8,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Tuesday on or after September 28 should be September 28 2010");
		test.done();
	},

	"date for year September (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Wednesday on or after September 1 should be September 1 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 2 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 3 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 4 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 5 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 6 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 7 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Wednesday on or after September 8 should be September 8 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 9 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 10 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 11 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 12 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 13 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 14 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Wednesday on or after September 15 should be September 15 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 16 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 17 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 18 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 19 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 20 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 21 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Wednesday on or after September 22 should be September 22 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Wednesday on or after September 23 should be September 29 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Wednesday on or after September 24 should be September 29 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Wednesday on or after September 25 should be September 29 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Wednesday on or after September 26 should be September 29 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Wednesday on or after September 27 should be September 29 2010");

		rule = TZ.addRule("TEST,2008,2010,8,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Wednesday on or after September 28 should be September 29 2010");
		test.done();
	},

	"date for year September (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Thursday on or after September 1 should be September 2 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Thursday on or after September 2 should be September 2 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 3 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 4 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 5 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 6 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 7 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 8 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Thursday on or after September 9 should be September 9 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 10 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 11 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 12 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 13 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 14 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 15 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Thursday on or after September 16 should be September 16 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 17 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 18 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 19 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 20 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 21 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 22 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Thursday on or after September 23 should be September 23 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Thursday on or after September 24 should be September 30 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Thursday on or after September 25 should be September 30 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Thursday on or after September 26 should be September 30 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Thursday on or after September 27 should be September 30 2010");

		rule = TZ.addRule("TEST,2008,2010,8,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Thursday on or after September 28 should be September 30 2010");
		test.done();
	},

	"date for year September (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Friday on or after September 1 should be September 3 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Friday on or after September 2 should be September 3 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Friday on or after September 3 should be September 3 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 4 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 5 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 6 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 7 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 8 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 9 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Friday on or after September 10 should be September 10 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 11 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 12 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 13 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 14 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 15 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 16 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Friday on or after September 17 should be September 17 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 18 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 19 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 20 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 21 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 22 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 23 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Friday on or after September 24 should be September 24 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Friday on or after October 25 should be October 1 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Friday on or after October 26 should be October 1 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Friday on or after October 27 should be October 1 2010");

		rule = TZ.addRule("TEST,2008,2010,8,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Friday on or after October 28 should be October 1 2010");
		test.done();
	},

	"date for year September (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,8,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Saturday on or after September 1 should be September 4 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Saturday on or after September 2 should be September 4 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Saturday on or after September 3 should be September 4 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Saturday on or after September 4 should be September 4 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 5 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 6 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 7 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 8 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 9 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 10 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Saturday on or after September 11 should be September 11 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 12 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 13 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 14 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 15 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 16 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 17 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Saturday on or after September 18 should be September 18 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 19 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 20 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 21 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 22 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 23 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 24 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Saturday on or after September 25 should be September 25 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Saturday on or after October 26 should be October 2 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Saturday on or after October 27 should be October 2 2010");

		rule = TZ.addRule("TEST,2008,2010,8,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Saturday on or after October 28 should be October 2 2010");
		test.done();
	},

	"date for year July (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Sunday on or after July 1 should be July 4 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Sunday on or after July 2 should be July 4 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Sunday on or after July 3 should be July 4 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Sunday on or after July 4 should be July 4 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 5 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 6 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 7 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 8 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 9 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 10 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Sunday on or after July 11 should be July 11 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 12 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 13 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 14 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 15 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 16 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 17 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Sunday on or after July 18 should be July 18 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 19 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 20 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 21 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 22 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 23 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 24 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Sunday on or after July 25 should be July 25 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Sunday on or after August 26 should be August 1 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Sunday on or after August 27 should be August 1 2010");

		rule = TZ.addRule("TEST,2008,2010,6,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Sunday on or after August 28 should be August 1 2010");
		test.done();
	},

	"date for year July (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Monday on or after July 1 should be July 5 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Monday on or after July 2 should be July 5 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Monday on or after July 3 should be July 5 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Monday on or after July 4 should be July 5 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Monday on or after July 5 should be July 5 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 6 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 7 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 8 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 9 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 10 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 11 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Monday on or after July 12 should be July 12 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 13 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 14 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 15 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 16 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 17 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 18 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Monday on or after July 19 should be July 19 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 20 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 21 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 22 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 23 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 24 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 25 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Monday on or after July 26 should be July 26 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Monday on or after August 27 should be August 2 2010");

		rule = TZ.addRule("TEST,2008,2010,6,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Monday on or after August 28 should be August 2 2010");
		test.done();
	},

	"date for year July (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Tuesday on or after July 1 should be July 6 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Tuesday on or after July 2 should be July 6 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Tuesday on or after July 3 should be July 6 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Tuesday on or after July 4 should be July 6 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Tuesday on or after July 5 should be July 6 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Tuesday on or after July 6 should be July 6 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 7 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 8 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 9 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 10 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 11 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 12 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Tuesday on or after July 13 should be July 13 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 14 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 15 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 16 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 17 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 18 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 19 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Tuesday on or after July 20 should be July 20 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 21 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 22 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 23 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 24 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 25 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 26 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Tuesday on or after July 27 should be July 27 2010");

		rule = TZ.addRule("TEST,2008,2010,6,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Tuesday on or after August 28 should be August 3 2010");
		test.done();
	},

	"date for year July (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 1 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 2 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 3 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 4 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 5 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 6 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Wednesday on or after July 7 should be July 7 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 8 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 9 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 10 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 11 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 12 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 13 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Wednesday on or after July 14 should be July 14 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 15 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 16 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 17 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 18 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 19 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 20 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Wednesday on or after July 21 should be July 21 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 22 should be July 28 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 23 should be July 28 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 24 should be July 28 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 25 should be July 28 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 26 should be July 28 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 27 should be July 28 2010");

		rule = TZ.addRule("TEST,2008,2010,6,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Wednesday on or after July 28 should be July 28 2010");
		test.done();
	},

	"date for year July (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Thursday on or after July 1 should be July 1 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 2 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 3 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 4 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 5 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 6 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 7 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Thursday on or after July 8 should be July 8 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 9 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 10 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 11 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 12 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 13 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 14 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Thursday on or after July 15 should be July 15 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 16 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 17 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 18 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 19 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 20 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 21 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Thursday on or after July 22 should be July 22 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Thursday on or after July 23 should be July 29 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Thursday on or after July 24 should be July 29 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Thursday on or after July 25 should be July 29 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Thursday on or after July 26 should be July 29 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Thursday on or after July 27 should be July 29 2010");

		rule = TZ.addRule("TEST,2008,2010,6,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Thursday on or after July 28 should be July 29 2010");
		test.done();
	},

	"date for year July (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Friday on or after July 1 should be July 2 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Friday on or after July 2 should be July 2 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 3 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 4 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 5 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 6 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 7 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 8 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Friday on or after July 9 should be July 9 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 10 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 11 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 12 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 13 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 14 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 15 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Friday on or after July 16 should be July 16 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 17 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 18 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 19 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 20 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 21 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 22 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Friday on or after July 23 should be July 23 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Friday on or after July 24 should be July 30 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Friday on or after July 25 should be July 30 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Friday on or after July 26 should be July 30 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Friday on or after July 27 should be July 30 2010");

		rule = TZ.addRule("TEST,2008,2010,6,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Friday on or after July 28 should be July 30 2010");
		test.done();
	},

	"date for year July (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,6,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Saturday on or after July 1 should be July 3 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Saturday on or after July 2 should be July 3 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Saturday on or after July 3 should be July 3 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 4 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 5 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 6 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 7 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 8 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 9 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Saturday on or after July 10 should be July 10 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 11 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 12 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 13 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 14 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 15 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 16 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Saturday on or after July 17 should be July 17 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 18 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 19 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 20 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 21 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 22 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 23 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Saturday on or after July 24 should be July 24 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Saturday on or after July 25 should be July 31 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Saturday on or after July 26 should be July 31 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Saturday on or after July 27 should be July 31 2010");

		rule = TZ.addRule("TEST,2008,2010,6,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Saturday on or after July 28 should be July 31 2010");
		test.done();
	},

	"date for year October (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Sunday on or after October 1 should be October 3 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Sunday on or after October 2 should be October 3 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Sunday on or after October 3 should be October 3 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 4 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 5 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 6 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 7 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 8 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 9 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Sunday on or after October 10 should be October 10 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 11 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 12 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 13 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 14 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 15 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 16 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Sunday on or after October 17 should be October 17 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 18 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 19 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 20 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 21 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 22 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 23 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Sunday on or after October 24 should be October 24 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Sunday on or after October 25 should be October 31 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Sunday on or after October 26 should be October 31 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Sunday on or after October 27 should be October 31 2010");

		rule = TZ.addRule("TEST,2008,2010,9,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Sunday on or after October 28 should be October 31 2010");
		test.done();
	},

	"date for year October (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Monday on or after October 1 should be October 4 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Monday on or after October 2 should be October 4 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Monday on or after October 3 should be October 4 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Monday on or after October 4 should be October 4 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 5 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 6 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 7 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 8 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 9 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 10 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Monday on or after October 11 should be October 11 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 12 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 13 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 14 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 15 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 16 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 17 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Monday on or after October 18 should be October 18 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 19 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 20 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 21 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 22 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 23 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 24 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Monday on or after October 25 should be October 25 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Monday on or after November 26 should be November 1 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Monday on or after November 27 should be November 1 2010");

		rule = TZ.addRule("TEST,2008,2010,9,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Monday on or after November 28 should be November 1 2010");
		test.done();
	},

	"date for year October (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Tuesday on or after October 1 should be October 5 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Tuesday on or after October 2 should be October 5 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Tuesday on or after October 3 should be October 5 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Tuesday on or after October 4 should be October 5 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Tuesday on or after October 5 should be October 5 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 6 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 7 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 8 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 9 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 10 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 11 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Tuesday on or after October 12 should be October 12 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 13 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 14 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 15 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 16 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 17 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 18 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Tuesday on or after October 19 should be October 19 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 20 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 21 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 22 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 23 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 24 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 25 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Tuesday on or after October 26 should be October 26 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Tuesday on or after November 27 should be November 2 2010");

		rule = TZ.addRule("TEST,2008,2010,9,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Tuesday on or after November 28 should be November 2 2010");
		test.done();
	},

	"date for year October (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Wednesday on or after October 1 should be October 6 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Wednesday on or after October 2 should be October 6 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Wednesday on or after October 3 should be October 6 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Wednesday on or after October 4 should be October 6 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Wednesday on or after October 5 should be October 6 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Wednesday on or after October 6 should be October 6 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 7 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 8 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 9 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 10 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 11 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 12 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Wednesday on or after October 13 should be October 13 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 14 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 15 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 16 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 17 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 18 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 19 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Wednesday on or after October 20 should be October 20 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 21 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 22 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 23 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 24 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 25 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 26 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Wednesday on or after October 27 should be October 27 2010");

		rule = TZ.addRule("TEST,2008,2010,9,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Wednesday on or after November 28 should be November 3 2010");
		test.done();
	},

	"date for year October (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 1 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 2 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 3 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 4 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 5 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 6 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Thursday on or after October 7 should be October 7 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 8 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 9 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 10 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 11 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 12 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 13 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Thursday on or after October 14 should be October 14 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 15 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 16 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 17 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 18 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 19 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 20 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Thursday on or after October 21 should be October 21 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 22 should be October 28 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 23 should be October 28 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 24 should be October 28 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 25 should be October 28 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 26 should be October 28 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 27 should be October 28 2010");

		rule = TZ.addRule("TEST,2008,2010,9,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Thursday on or after October 28 should be October 28 2010");
		test.done();
	},

	"date for year October (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Friday on or after October 1 should be October 1 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 2 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 3 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 4 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 5 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 6 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 7 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Friday on or after October 8 should be October 8 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 9 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 10 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 11 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 12 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 13 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 14 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Friday on or after October 15 should be October 15 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 16 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 17 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 18 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 19 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 20 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 21 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Friday on or after October 22 should be October 22 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Friday on or after October 23 should be October 29 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Friday on or after October 24 should be October 29 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Friday on or after October 25 should be October 29 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Friday on or after October 26 should be October 29 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Friday on or after October 27 should be October 29 2010");

		rule = TZ.addRule("TEST,2008,2010,9,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Friday on or after October 28 should be October 29 2010");
		test.done();
	},

	"date for year October (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,9,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Saturday on or after October 1 should be October 2 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Saturday on or after October 2 should be October 2 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 3 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 4 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 5 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 6 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 7 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 8 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Saturday on or after October 9 should be October 9 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 10 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 11 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 12 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 13 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 14 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 15 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Saturday on or after October 16 should be October 16 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 17 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 18 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 19 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 20 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 21 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 22 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Saturday on or after October 23 should be October 23 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Saturday on or after October 24 should be October 30 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Saturday on or after October 25 should be October 30 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Saturday on or after October 26 should be October 30 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Saturday on or after October 27 should be October 30 2010");

		rule = TZ.addRule("TEST,2008,2010,9,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Saturday on or after October 28 should be October 30 2010");
		test.done();
	},

	"date for year May (Sunday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,0:1,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Sunday on or after May 1 should be May 2 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:2,2:00,1:00,D");
		test.equal(rule.date(2010), 2, "The Sunday on or after May 2 should be May 2 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:3,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 3 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:4,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 4 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:5,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 5 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:6,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 6 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:7,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 7 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:8,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 8 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:9,2:00,1:00,D");
		test.equal(rule.date(2010), 9, "The Sunday on or after May 9 should be May 9 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:10,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 10 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:11,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 11 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:12,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 12 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:13,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 13 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:14,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 14 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:15,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 15 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:16,2:00,1:00,D");
		test.equal(rule.date(2010), 16, "The Sunday on or after May 16 should be May 16 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:17,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 17 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:18,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 18 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:19,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 19 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:20,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 20 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:21,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 21 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:22,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 22 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:23,2:00,1:00,D");
		test.equal(rule.date(2010), 23, "The Sunday on or after May 23 should be May 23 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:24,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Sunday on or after May 24 should be May 30 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:25,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Sunday on or after May 25 should be May 30 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:26,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Sunday on or after May 26 should be May 30 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:27,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Sunday on or after May 27 should be May 30 2010");

		rule = TZ.addRule("TEST,2008,2010,4,0:28,2:00,1:00,D");
		test.equal(rule.date(2010), 30, "The Sunday on or after May 28 should be May 30 2010");
		test.done();
	},

	"date for year May (Monday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,1:1,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Monday on or after May 1 should be May 3 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:2,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Monday on or after May 2 should be May 3 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:3,2:00,1:00,D");
		test.equal(rule.date(2010), 3, "The Monday on or after May 3 should be May 3 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:4,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 4 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:5,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 5 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:6,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 6 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:7,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 7 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:8,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 8 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:9,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 9 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:10,2:00,1:00,D");
		test.equal(rule.date(2010), 10, "The Monday on or after May 10 should be May 10 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:11,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 11 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:12,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 12 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:13,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 13 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:14,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 14 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:15,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 15 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:16,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 16 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:17,2:00,1:00,D");
		test.equal(rule.date(2010), 17, "The Monday on or after May 17 should be May 17 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:18,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 18 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:19,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 19 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:20,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 20 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:21,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 21 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:22,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 22 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:23,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 23 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:24,2:00,1:00,D");
		test.equal(rule.date(2010), 24, "The Monday on or after May 24 should be May 24 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:25,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Monday on or after May 25 should be May 31 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:26,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Monday on or after May 26 should be May 31 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:27,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Monday on or after May 27 should be May 31 2010");

		rule = TZ.addRule("TEST,2008,2010,4,1:28,2:00,1:00,D");
		test.equal(rule.date(2010), 31, "The Monday on or after May 28 should be May 31 2010");
		test.done();
	},

	"date for year May (Tuesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,2:1,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Tuesday on or after May 1 should be May 4 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:2,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Tuesday on or after May 2 should be May 4 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:3,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Tuesday on or after May 3 should be May 4 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:4,2:00,1:00,D");
		test.equal(rule.date(2010), 4, "The Tuesday on or after May 4 should be May 4 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:5,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 5 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:6,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 6 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:7,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 7 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:8,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 8 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:9,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 9 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:10,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 10 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:11,2:00,1:00,D");
		test.equal(rule.date(2010), 11, "The Tuesday on or after May 11 should be May 11 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:12,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 12 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:13,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 13 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:14,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 14 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:15,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 15 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:16,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 16 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:17,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 17 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:18,2:00,1:00,D");
		test.equal(rule.date(2010), 18, "The Tuesday on or after May 18 should be May 18 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:19,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 19 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:20,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 20 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:21,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 21 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:22,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 22 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:23,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 23 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:24,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 24 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:25,2:00,1:00,D");
		test.equal(rule.date(2010), 25, "The Tuesday on or after May 25 should be May 25 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:26,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Tuesday on or after June 26 should be June 1 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:27,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Tuesday on or after June 27 should be June 1 2010");

		rule = TZ.addRule("TEST,2008,2010,4,2:28,2:00,1:00,D");
		test.equal(rule.date(2010), 32, "The Tuesday on or after June 28 should be June 1 2010");
		test.done();
	},

	"date for year May (Wednesday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,3:1,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Wednesday on or after May 1 should be May 5 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:2,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Wednesday on or after May 2 should be May 5 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:3,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Wednesday on or after May 3 should be May 5 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:4,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Wednesday on or after May 4 should be May 5 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:5,2:00,1:00,D");
		test.equal(rule.date(2010), 5, "The Wednesday on or after May 5 should be May 5 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:6,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 6 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:7,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 7 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:8,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 8 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:9,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 9 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:10,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 10 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:11,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 11 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:12,2:00,1:00,D");
		test.equal(rule.date(2010), 12, "The Wednesday on or after May 12 should be May 12 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:13,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 13 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:14,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 14 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:15,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 15 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:16,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 16 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:17,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 17 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:18,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 18 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:19,2:00,1:00,D");
		test.equal(rule.date(2010), 19, "The Wednesday on or after May 19 should be May 19 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:20,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 20 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:21,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 21 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:22,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 22 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:23,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 23 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:24,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 24 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:25,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 25 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:26,2:00,1:00,D");
		test.equal(rule.date(2010), 26, "The Wednesday on or after May 26 should be May 26 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:27,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Wednesday on or after June 27 should be June 2 2010");

		rule = TZ.addRule("TEST,2008,2010,4,3:28,2:00,1:00,D");
		test.equal(rule.date(2010), 33, "The Wednesday on or after June 28 should be June 2 2010");
		test.done();
	},

	"date for year May (Thursday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,4:1,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Thursday on or after May 1 should be May 6 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:2,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Thursday on or after May 2 should be May 6 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:3,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Thursday on or after May 3 should be May 6 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:4,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Thursday on or after May 4 should be May 6 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:5,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Thursday on or after May 5 should be May 6 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:6,2:00,1:00,D");
		test.equal(rule.date(2010), 6, "The Thursday on or after May 6 should be May 6 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:7,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 7 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:8,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 8 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:9,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 9 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:10,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 10 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:11,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 11 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:12,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 12 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:13,2:00,1:00,D");
		test.equal(rule.date(2010), 13, "The Thursday on or after May 13 should be May 13 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:14,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 14 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:15,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 15 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:16,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 16 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:17,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 17 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:18,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 18 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:19,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 19 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:20,2:00,1:00,D");
		test.equal(rule.date(2010), 20, "The Thursday on or after May 20 should be May 20 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:21,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 21 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:22,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 22 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:23,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 23 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:24,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 24 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:25,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 25 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:26,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 26 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:27,2:00,1:00,D");
		test.equal(rule.date(2010), 27, "The Thursday on or after May 27 should be May 27 2010");

		rule = TZ.addRule("TEST,2008,2010,4,4:28,2:00,1:00,D");
		test.equal(rule.date(2010), 34, "The Thursday on or after June 28 should be June 3 2010");
		test.done();
	},

	"date for year May (Friday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,5:1,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 1 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:2,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 2 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:3,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 3 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:4,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 4 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:5,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 5 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:6,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 6 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:7,2:00,1:00,D");
		test.equal(rule.date(2010), 7, "The Friday on or after May 7 should be May 7 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:8,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 8 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:9,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 9 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:10,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 10 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:11,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 11 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:12,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 12 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:13,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 13 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:14,2:00,1:00,D");
		test.equal(rule.date(2010), 14, "The Friday on or after May 14 should be May 14 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:15,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 15 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:16,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 16 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:17,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 17 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:18,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 18 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:19,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 19 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:20,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 20 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:21,2:00,1:00,D");
		test.equal(rule.date(2010), 21, "The Friday on or after May 21 should be May 21 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:22,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 22 should be May 28 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:23,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 23 should be May 28 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:24,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 24 should be May 28 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:25,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 25 should be May 28 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:26,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 26 should be May 28 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:27,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 27 should be May 28 2010");

		rule = TZ.addRule("TEST,2008,2010,4,5:28,2:00,1:00,D");
		test.equal(rule.date(2010), 28, "The Friday on or after May 28 should be May 28 2010");
		test.done();
	},

	"date for year May (Saturday)" : function (test) {
		test.expect(28);
		var rule;

		rule = TZ.addRule("TEST,2008,2010,4,6:1,2:00,1:00,D");
		test.equal(rule.date(2010), 1, "The Saturday on or after May 1 should be May 1 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:2,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 2 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:3,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 3 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:4,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 4 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:5,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 5 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:6,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 6 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:7,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 7 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:8,2:00,1:00,D");
		test.equal(rule.date(2010), 8, "The Saturday on or after May 8 should be May 8 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:9,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 9 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:10,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 10 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:11,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 11 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:12,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 12 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:13,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 13 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:14,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 14 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:15,2:00,1:00,D");
		test.equal(rule.date(2010), 15, "The Saturday on or after May 15 should be May 15 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:16,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 16 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:17,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 17 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:18,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 18 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:19,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 19 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:20,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 20 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:21,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 21 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:22,2:00,1:00,D");
		test.equal(rule.date(2010), 22, "The Saturday on or after May 22 should be May 22 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:23,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Saturday on or after May 23 should be May 29 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:24,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Saturday on or after May 24 should be May 29 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:25,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Saturday on or after May 25 should be May 29 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:26,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Saturday on or after May 26 should be May 29 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:27,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Saturday on or after May 27 should be May 29 2010");

		rule = TZ.addRule("TEST,2008,2010,4,6:28,2:00,1:00,D");
		test.equal(rule.date(2010), 29, "The Saturday on or after May 28 should be May 29 2010");
		test.done();
	}
};
