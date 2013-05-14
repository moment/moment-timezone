var moment = require("../../index");

exports["last-weekday"] = {

	"last weekday (January 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	0	0	8	0	0	0");
		t.equal(rule.date(2010), 31, "The first from last Sunday in January should be January 31 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	1	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Monday in January should be January 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	2	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Tuesday in January should be January 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	3	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Wednesday in January should be January 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	4	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Thursday in January should be January 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	5	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Friday in January should be January 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	6	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Saturday in January should be January 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	7	8	0	0	0");
		t.equal(rule.date(2010), 24, "The second from last Sunday in January should be January 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	8	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Monday in January should be January 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	9	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Tuesday in January should be January 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	10	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Wednesday in January should be January 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	11	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Thursday in January should be January 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	12	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Friday in January should be January 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	13	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Saturday in January should be January 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	14	8	0	0	0");
		t.equal(rule.date(2010), 17, "The third from last Sunday in January should be January 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	15	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Monday in January should be January 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	16	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Tuesday in January should be January 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	17	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Wednesday in January should be January 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	18	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Thursday in January should be January 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	19	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Friday in January should be January 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	20	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Saturday in January should be January 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	21	8	0	0	0");
		t.equal(rule.date(2010), 10, "The fourth from last Sunday in January should be January 10 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	22	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Monday in January should be January 4 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	23	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Tuesday in January should be January 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	24	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Wednesday in January should be January 6 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	25	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Thursday in January should be January 7 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	26	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Friday in January should be January 8 2010");

		rule = moment.tz.addRule("TEST	2008	2010	0	27	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Saturday in January should be January 9 2010");

		t.done();
	},

	"last weekday (May 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	0	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Sunday in May should be May 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	1	8	0	0	0");
		t.equal(rule.date(2010), 31, "The first from last Monday in May should be May 31 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Tuesday in May should be May 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Wednesday in May should be May 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Thursday in May should be May 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Friday in May should be May 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Saturday in May should be May 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Sunday in May should be May 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	8	0	0	0");
		t.equal(rule.date(2010), 24, "The second from last Monday in May should be May 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Tuesday in May should be May 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Wednesday in May should be May 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Thursday in May should be May 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Friday in May should be May 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Saturday in May should be May 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Sunday in May should be May 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	8	0	0	0");
		t.equal(rule.date(2010), 17, "The third from last Monday in May should be May 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Tuesday in May should be May 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Wednesday in May should be May 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Thursday in May should be May 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Friday in May should be May 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Saturday in May should be May 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Sunday in May should be May 9 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	8	0	0	0");
		t.equal(rule.date(2010), 10, "The fourth from last Monday in May should be May 10 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Tuesday in May should be May 4 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Wednesday in May should be May 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Thursday in May should be May 6 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Friday in May should be May 7 2010");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Saturday in May should be May 8 2010");

		t.done();
	},

	"last weekday (August 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	0	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Sunday in August should be August 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	1	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Monday in August should be August 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	8	0	0	0");
		t.equal(rule.date(2010), 31, "The first from last Tuesday in August should be August 31 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Wednesday in August should be August 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Thursday in August should be August 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Friday in August should be August 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Saturday in August should be August 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Sunday in August should be August 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Monday in August should be August 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	8	0	0	0");
		t.equal(rule.date(2010), 24, "The second from last Tuesday in August should be August 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Wednesday in August should be August 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Thursday in August should be August 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Friday in August should be August 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Saturday in August should be August 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Sunday in August should be August 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Monday in August should be August 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	8	0	0	0");
		t.equal(rule.date(2010), 17, "The third from last Tuesday in August should be August 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Wednesday in August should be August 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Thursday in August should be August 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Friday in August should be August 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Saturday in August should be August 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Sunday in August should be August 8 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Monday in August should be August 9 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	8	0	0	0");
		t.equal(rule.date(2010), 10, "The fourth from last Tuesday in August should be August 10 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Wednesday in August should be August 4 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Thursday in August should be August 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Friday in August should be August 6 2010");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Saturday in August should be August 7 2010");

		t.done();
	},

	"last weekday (March 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	0	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Sunday in March should be March 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	1	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Monday in March should be March 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Tuesday in March should be March 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	8	0	0	0");
		t.equal(rule.date(2010), 31, "The first from last Wednesday in March should be March 31 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Thursday in March should be March 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Friday in March should be March 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Saturday in March should be March 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Sunday in March should be March 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Monday in March should be March 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Tuesday in March should be March 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	8	0	0	0");
		t.equal(rule.date(2010), 24, "The second from last Wednesday in March should be March 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Thursday in March should be March 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Friday in March should be March 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Saturday in March should be March 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Sunday in March should be March 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Monday in March should be March 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Tuesday in March should be March 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	8	0	0	0");
		t.equal(rule.date(2010), 17, "The third from last Wednesday in March should be March 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Thursday in March should be March 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Friday in March should be March 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Saturday in March should be March 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Sunday in March should be March 7 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Monday in March should be March 8 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Tuesday in March should be March 9 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	8	0	0	0");
		t.equal(rule.date(2010), 10, "The fourth from last Wednesday in March should be March 10 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Thursday in March should be March 4 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Friday in March should be March 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Saturday in March should be March 6 2010");

		t.done();
	},

	"last weekday (September 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	0	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Sunday in September should be September 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	1	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Monday in September should be September 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Tuesday in September should be September 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Wednesday in September should be September 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Thursday in September should be September 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	8	0	0	0");
		t.equal(rule.date(2010), 24, "The first from last Friday in September should be September 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Saturday in September should be September 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Sunday in September should be September 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Monday in September should be September 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Tuesday in September should be September 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Wednesday in September should be September 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Thursday in September should be September 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	8	0	0	0");
		t.equal(rule.date(2010), 17, "The second from last Friday in September should be September 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Saturday in September should be September 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Sunday in September should be September 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Monday in September should be September 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Tuesday in September should be September 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Wednesday in September should be September 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Thursday in September should be September 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	8	0	0	0");
		t.equal(rule.date(2010), 10, "The third from last Friday in September should be September 10 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Saturday in September should be September 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Sunday in September should be September 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Monday in September should be September 6 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Tuesday in September should be September 7 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Wednesday in September should be September 8 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Thursday in September should be September 9 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	8	0	0	0");
		t.equal(rule.date(2010), 3, "The fourth from last Friday in September should be September 3 2010");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Saturday in September should be September 4 2010");

		t.done();
	},

	"last weekday (April 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	3	0	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Sunday in April should be April 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	1	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Monday in April should be April 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	2	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Tuesday in April should be April 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	3	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Wednesday in April should be April 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	4	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Thursday in April should be April 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	5	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Friday in April should be April 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	6	8	0	0	0");
		t.equal(rule.date(2010), 24, "The first from last Saturday in April should be April 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	7	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Sunday in April should be April 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	8	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Monday in April should be April 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	9	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Tuesday in April should be April 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	10	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Wednesday in April should be April 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	11	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Thursday in April should be April 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	12	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Friday in April should be April 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	13	8	0	0	0");
		t.equal(rule.date(2010), 17, "The second from last Saturday in April should be April 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	14	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Sunday in April should be April 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	15	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Monday in April should be April 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	16	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Tuesday in April should be April 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	17	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Wednesday in April should be April 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	18	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Thursday in April should be April 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	19	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Friday in April should be April 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	20	8	0	0	0");
		t.equal(rule.date(2010), 10, "The third from last Saturday in April should be April 10 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	21	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Sunday in April should be April 4 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	22	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Monday in April should be April 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	23	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Tuesday in April should be April 6 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	24	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Wednesday in April should be April 7 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	25	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Thursday in April should be April 8 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	26	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Friday in April should be April 9 2010");

		rule = moment.tz.addRule("TEST	2008	2010	3	27	8	0	0	0");
		t.equal(rule.date(2010), 3, "The fourth from last Saturday in April should be April 3 2010");

		t.done();
	},

	"last weekday (July 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	0	8	0	0	0");
		t.equal(rule.date(2010), 25, "The first from last Sunday in July should be July 25 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	1	8	0	0	0");
		t.equal(rule.date(2010), 26, "The first from last Monday in July should be July 26 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	8	0	0	0");
		t.equal(rule.date(2010), 27, "The first from last Tuesday in July should be July 27 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	8	0	0	0");
		t.equal(rule.date(2010), 28, "The first from last Wednesday in July should be July 28 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	8	0	0	0");
		t.equal(rule.date(2010), 29, "The first from last Thursday in July should be July 29 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	8	0	0	0");
		t.equal(rule.date(2010), 30, "The first from last Friday in July should be July 30 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	8	0	0	0");
		t.equal(rule.date(2010), 31, "The first from last Saturday in July should be July 31 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	8	0	0	0");
		t.equal(rule.date(2010), 18, "The second from last Sunday in July should be July 18 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	8	0	0	0");
		t.equal(rule.date(2010), 19, "The second from last Monday in July should be July 19 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	8	0	0	0");
		t.equal(rule.date(2010), 20, "The second from last Tuesday in July should be July 20 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	8	0	0	0");
		t.equal(rule.date(2010), 21, "The second from last Wednesday in July should be July 21 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	8	0	0	0");
		t.equal(rule.date(2010), 22, "The second from last Thursday in July should be July 22 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	8	0	0	0");
		t.equal(rule.date(2010), 23, "The second from last Friday in July should be July 23 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	8	0	0	0");
		t.equal(rule.date(2010), 24, "The second from last Saturday in July should be July 24 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	8	0	0	0");
		t.equal(rule.date(2010), 11, "The third from last Sunday in July should be July 11 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	8	0	0	0");
		t.equal(rule.date(2010), 12, "The third from last Monday in July should be July 12 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	8	0	0	0");
		t.equal(rule.date(2010), 13, "The third from last Tuesday in July should be July 13 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	8	0	0	0");
		t.equal(rule.date(2010), 14, "The third from last Wednesday in July should be July 14 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	8	0	0	0");
		t.equal(rule.date(2010), 15, "The third from last Thursday in July should be July 15 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	8	0	0	0");
		t.equal(rule.date(2010), 16, "The third from last Friday in July should be July 16 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	8	0	0	0");
		t.equal(rule.date(2010), 17, "The third from last Saturday in July should be July 17 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	8	0	0	0");
		t.equal(rule.date(2010), 4, "The fourth from last Sunday in July should be July 4 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	8	0	0	0");
		t.equal(rule.date(2010), 5, "The fourth from last Monday in July should be July 5 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	8	0	0	0");
		t.equal(rule.date(2010), 6, "The fourth from last Tuesday in July should be July 6 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	8	0	0	0");
		t.equal(rule.date(2010), 7, "The fourth from last Wednesday in July should be July 7 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	8	0	0	0");
		t.equal(rule.date(2010), 8, "The fourth from last Thursday in July should be July 8 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	8	0	0	0");
		t.equal(rule.date(2010), 9, "The fourth from last Friday in July should be July 9 2010");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	8	0	0	0");
		t.equal(rule.date(2010), 10, "The fourth from last Saturday in July should be July 10 2010");

		t.done();
	}
};