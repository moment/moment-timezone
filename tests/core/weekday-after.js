var moment = require("../../moment-timezone");

exports["weekday-after"] = {

	"weekday after (August 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	0	0	0	0");
		t.equal(rule.date(2010), 1, "The Sunday on or after Aug 1 2010 should be Aug 1");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 2 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 3 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 4 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 5 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 6 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 7 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	0	0	0	0");
		t.equal(rule.date(2010), 8, "The Sunday on or after Aug 8 2010 should be Aug 8");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 9 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 10 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 11 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 12 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 13 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 14 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	0	0	0	0");
		t.equal(rule.date(2010), 15, "The Sunday on or after Aug 15 2010 should be Aug 15");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 16 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 17 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 18 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 19 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 20 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 21 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	0	0	0	0");
		t.equal(rule.date(2010), 22, "The Sunday on or after Aug 22 2010 should be Aug 22");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	0	0	0	0");
		t.equal(rule.date(2010), 29, "The Sunday on or after Aug 23 2010 should be Aug 29");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	0	0	0	0");
		t.equal(rule.date(2010), 29, "The Sunday on or after Aug 24 2010 should be Aug 29");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	0	0	0	0");
		t.equal(rule.date(2010), 29, "The Sunday on or after Aug 25 2010 should be Aug 29");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	0	0	0	0");
		t.equal(rule.date(2010), 29, "The Sunday on or after Aug 26 2010 should be Aug 29");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	0	0	0	0");
		t.equal(rule.date(2010), 29, "The Sunday on or after Aug 27 2010 should be Aug 29");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	0	0	0	0");
		t.equal(rule.date(2010), 29, "The Sunday on or after Aug 28 2010 should be Aug 29");

		t.done();
	},

	"weekday after (August 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	1	0	0	0");
		t.equal(rule.date(2010), 2, "The Monday on or after Aug 1 2010 should be Aug 2");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	1	0	0	0");
		t.equal(rule.date(2010), 2, "The Monday on or after Aug 2 2010 should be Aug 2");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 3 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 4 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 5 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 6 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 7 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 8 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	1	0	0	0");
		t.equal(rule.date(2010), 9, "The Monday on or after Aug 9 2010 should be Aug 9");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 10 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 11 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 12 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 13 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 14 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 15 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	1	0	0	0");
		t.equal(rule.date(2010), 16, "The Monday on or after Aug 16 2010 should be Aug 16");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 17 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 18 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 19 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 20 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 21 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 22 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	1	0	0	0");
		t.equal(rule.date(2010), 23, "The Monday on or after Aug 23 2010 should be Aug 23");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	1	0	0	0");
		t.equal(rule.date(2010), 30, "The Monday on or after Aug 24 2010 should be Aug 30");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	1	0	0	0");
		t.equal(rule.date(2010), 30, "The Monday on or after Aug 25 2010 should be Aug 30");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	1	0	0	0");
		t.equal(rule.date(2010), 30, "The Monday on or after Aug 26 2010 should be Aug 30");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	1	0	0	0");
		t.equal(rule.date(2010), 30, "The Monday on or after Aug 27 2010 should be Aug 30");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	1	0	0	0");
		t.equal(rule.date(2010), 30, "The Monday on or after Aug 28 2010 should be Aug 30");

		t.done();
	},

	"weekday after (August 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	2	0	0	0");
		t.equal(rule.date(2010), 3, "The Tuesday on or after Aug 1 2010 should be Aug 3");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	2	0	0	0");
		t.equal(rule.date(2010), 3, "The Tuesday on or after Aug 2 2010 should be Aug 3");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	2	0	0	0");
		t.equal(rule.date(2010), 3, "The Tuesday on or after Aug 3 2010 should be Aug 3");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 4 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 5 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 6 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 7 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 8 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 9 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	2	0	0	0");
		t.equal(rule.date(2010), 10, "The Tuesday on or after Aug 10 2010 should be Aug 10");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 11 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 12 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 13 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 14 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 15 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 16 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	2	0	0	0");
		t.equal(rule.date(2010), 17, "The Tuesday on or after Aug 17 2010 should be Aug 17");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 18 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 19 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 20 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 21 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 22 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 23 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	2	0	0	0");
		t.equal(rule.date(2010), 24, "The Tuesday on or after Aug 24 2010 should be Aug 24");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	2	0	0	0");
		t.equal(rule.date(2010), 31, "The Tuesday on or after Aug 25 2010 should be Aug 31");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	2	0	0	0");
		t.equal(rule.date(2010), 31, "The Tuesday on or after Aug 26 2010 should be Aug 31");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	2	0	0	0");
		t.equal(rule.date(2010), 31, "The Tuesday on or after Aug 27 2010 should be Aug 31");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	2	0	0	0");
		t.equal(rule.date(2010), 31, "The Tuesday on or after Aug 28 2010 should be Aug 31");

		t.done();
	},

	"weekday after (August 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	3	0	0	0");
		t.equal(rule.date(2010), 4, "The Wednesday on or after Aug 1 2010 should be Aug 4");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	3	0	0	0");
		t.equal(rule.date(2010), 4, "The Wednesday on or after Aug 2 2010 should be Aug 4");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	3	0	0	0");
		t.equal(rule.date(2010), 4, "The Wednesday on or after Aug 3 2010 should be Aug 4");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	3	0	0	0");
		t.equal(rule.date(2010), 4, "The Wednesday on or after Aug 4 2010 should be Aug 4");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 5 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 6 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 7 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 8 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 9 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 10 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	3	0	0	0");
		t.equal(rule.date(2010), 11, "The Wednesday on or after Aug 11 2010 should be Aug 11");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 12 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 13 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 14 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 15 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 16 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 17 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	3	0	0	0");
		t.equal(rule.date(2010), 18, "The Wednesday on or after Aug 18 2010 should be Aug 18");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 19 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 20 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 21 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 22 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 23 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 24 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	3	0	0	0");
		t.equal(rule.date(2010), 25, "The Wednesday on or after Aug 25 2010 should be Aug 25");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	3	0	0	0");
		t.equal(rule.date(2010), 32, "The Wednesday on or after Aug 26 2010 should be Sep 1");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	3	0	0	0");
		t.equal(rule.date(2010), 32, "The Wednesday on or after Aug 27 2010 should be Sep 1");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	3	0	0	0");
		t.equal(rule.date(2010), 32, "The Wednesday on or after Aug 28 2010 should be Sep 1");

		t.done();
	},

	"weekday after (August 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	4	0	0	0");
		t.equal(rule.date(2010), 5, "The Thursday on or after Aug 1 2010 should be Aug 5");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	4	0	0	0");
		t.equal(rule.date(2010), 5, "The Thursday on or after Aug 2 2010 should be Aug 5");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	4	0	0	0");
		t.equal(rule.date(2010), 5, "The Thursday on or after Aug 3 2010 should be Aug 5");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	4	0	0	0");
		t.equal(rule.date(2010), 5, "The Thursday on or after Aug 4 2010 should be Aug 5");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	4	0	0	0");
		t.equal(rule.date(2010), 5, "The Thursday on or after Aug 5 2010 should be Aug 5");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 6 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 7 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 8 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 9 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 10 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 11 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	4	0	0	0");
		t.equal(rule.date(2010), 12, "The Thursday on or after Aug 12 2010 should be Aug 12");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 13 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 14 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 15 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 16 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 17 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 18 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	4	0	0	0");
		t.equal(rule.date(2010), 19, "The Thursday on or after Aug 19 2010 should be Aug 19");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 20 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 21 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 22 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 23 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 24 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 25 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	4	0	0	0");
		t.equal(rule.date(2010), 26, "The Thursday on or after Aug 26 2010 should be Aug 26");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	4	0	0	0");
		t.equal(rule.date(2010), 33, "The Thursday on or after Aug 27 2010 should be Sep 2");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	4	0	0	0");
		t.equal(rule.date(2010), 33, "The Thursday on or after Aug 28 2010 should be Sep 2");

		t.done();
	},

	"weekday after (August 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	5	0	0	0");
		t.equal(rule.date(2010), 6, "The Friday on or after Aug 1 2010 should be Aug 6");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	5	0	0	0");
		t.equal(rule.date(2010), 6, "The Friday on or after Aug 2 2010 should be Aug 6");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	5	0	0	0");
		t.equal(rule.date(2010), 6, "The Friday on or after Aug 3 2010 should be Aug 6");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	5	0	0	0");
		t.equal(rule.date(2010), 6, "The Friday on or after Aug 4 2010 should be Aug 6");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	5	0	0	0");
		t.equal(rule.date(2010), 6, "The Friday on or after Aug 5 2010 should be Aug 6");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	5	0	0	0");
		t.equal(rule.date(2010), 6, "The Friday on or after Aug 6 2010 should be Aug 6");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 7 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 8 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 9 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 10 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 11 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 12 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	5	0	0	0");
		t.equal(rule.date(2010), 13, "The Friday on or after Aug 13 2010 should be Aug 13");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 14 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 15 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 16 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 17 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 18 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 19 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	5	0	0	0");
		t.equal(rule.date(2010), 20, "The Friday on or after Aug 20 2010 should be Aug 20");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 21 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 22 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 23 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 24 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 25 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 26 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	5	0	0	0");
		t.equal(rule.date(2010), 27, "The Friday on or after Aug 27 2010 should be Aug 27");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	5	0	0	0");
		t.equal(rule.date(2010), 34, "The Friday on or after Aug 28 2010 should be Sep 3");

		t.done();
	},

	"weekday after (August 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	7	1	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 1 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	2	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 2 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	3	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 3 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	4	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 4 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	5	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 5 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	6	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 6 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	7	6	0	0	0");
		t.equal(rule.date(2010), 7, "The Saturday on or after Aug 7 2010 should be Aug 7");

		rule = moment.tz.addRule("TEST	2008	2010	7	8	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 8 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	9	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 9 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	10	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 10 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	11	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 11 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	12	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 12 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	13	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 13 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	14	6	0	0	0");
		t.equal(rule.date(2010), 14, "The Saturday on or after Aug 14 2010 should be Aug 14");

		rule = moment.tz.addRule("TEST	2008	2010	7	15	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 15 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	16	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 16 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	17	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 17 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	18	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 18 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	19	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 19 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	20	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 20 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	21	6	0	0	0");
		t.equal(rule.date(2010), 21, "The Saturday on or after Aug 21 2010 should be Aug 21");

		rule = moment.tz.addRule("TEST	2008	2010	7	22	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 22 2010 should be Aug 28");

		rule = moment.tz.addRule("TEST	2008	2010	7	23	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 23 2010 should be Aug 28");

		rule = moment.tz.addRule("TEST	2008	2010	7	24	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 24 2010 should be Aug 28");

		rule = moment.tz.addRule("TEST	2008	2010	7	25	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 25 2010 should be Aug 28");

		rule = moment.tz.addRule("TEST	2008	2010	7	26	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 26 2010 should be Aug 28");

		rule = moment.tz.addRule("TEST	2008	2010	7	27	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 27 2010 should be Aug 28");

		rule = moment.tz.addRule("TEST	2008	2010	7	28	6	0	0	0");
		t.equal(rule.date(2010), 28, "The Saturday on or after Aug 28 2010 should be Aug 28");

		t.done();
	},

	"weekday after (March 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 1 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 2 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 3 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 4 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 5 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 6 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	0	0	0	0");
		t.equal(rule.date(2010), 7, "The Sunday on or after Mar 7 2010 should be Mar 7");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 8 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 9 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 10 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 11 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 12 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 13 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	0	0	0	0");
		t.equal(rule.date(2010), 14, "The Sunday on or after Mar 14 2010 should be Mar 14");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 15 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 16 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 17 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 18 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 19 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 20 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	0	0	0	0");
		t.equal(rule.date(2010), 21, "The Sunday on or after Mar 21 2010 should be Mar 21");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 22 2010 should be Mar 28");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 23 2010 should be Mar 28");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 24 2010 should be Mar 28");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 25 2010 should be Mar 28");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 26 2010 should be Mar 28");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 27 2010 should be Mar 28");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	0	0	0	0");
		t.equal(rule.date(2010), 28, "The Sunday on or after Mar 28 2010 should be Mar 28");

		t.done();
	},

	"weekday after (March 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	1	0	0	0");
		t.equal(rule.date(2010), 1, "The Monday on or after Mar 1 2010 should be Mar 1");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 2 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 3 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 4 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 5 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 6 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 7 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	1	0	0	0");
		t.equal(rule.date(2010), 8, "The Monday on or after Mar 8 2010 should be Mar 8");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 9 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 10 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 11 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 12 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 13 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 14 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	1	0	0	0");
		t.equal(rule.date(2010), 15, "The Monday on or after Mar 15 2010 should be Mar 15");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 16 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 17 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 18 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 19 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 20 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 21 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	1	0	0	0");
		t.equal(rule.date(2010), 22, "The Monday on or after Mar 22 2010 should be Mar 22");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	1	0	0	0");
		t.equal(rule.date(2010), 29, "The Monday on or after Mar 23 2010 should be Mar 29");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	1	0	0	0");
		t.equal(rule.date(2010), 29, "The Monday on or after Mar 24 2010 should be Mar 29");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	1	0	0	0");
		t.equal(rule.date(2010), 29, "The Monday on or after Mar 25 2010 should be Mar 29");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	1	0	0	0");
		t.equal(rule.date(2010), 29, "The Monday on or after Mar 26 2010 should be Mar 29");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	1	0	0	0");
		t.equal(rule.date(2010), 29, "The Monday on or after Mar 27 2010 should be Mar 29");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	1	0	0	0");
		t.equal(rule.date(2010), 29, "The Monday on or after Mar 28 2010 should be Mar 29");

		t.done();
	},

	"weekday after (March 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	2	0	0	0");
		t.equal(rule.date(2010), 2, "The Tuesday on or after Mar 1 2010 should be Mar 2");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	2	0	0	0");
		t.equal(rule.date(2010), 2, "The Tuesday on or after Mar 2 2010 should be Mar 2");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 3 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 4 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 5 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 6 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 7 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 8 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	2	0	0	0");
		t.equal(rule.date(2010), 9, "The Tuesday on or after Mar 9 2010 should be Mar 9");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 10 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 11 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 12 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 13 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 14 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 15 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	2	0	0	0");
		t.equal(rule.date(2010), 16, "The Tuesday on or after Mar 16 2010 should be Mar 16");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 17 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 18 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 19 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 20 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 21 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 22 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	2	0	0	0");
		t.equal(rule.date(2010), 23, "The Tuesday on or after Mar 23 2010 should be Mar 23");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	2	0	0	0");
		t.equal(rule.date(2010), 30, "The Tuesday on or after Mar 24 2010 should be Mar 30");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	2	0	0	0");
		t.equal(rule.date(2010), 30, "The Tuesday on or after Mar 25 2010 should be Mar 30");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	2	0	0	0");
		t.equal(rule.date(2010), 30, "The Tuesday on or after Mar 26 2010 should be Mar 30");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	2	0	0	0");
		t.equal(rule.date(2010), 30, "The Tuesday on or after Mar 27 2010 should be Mar 30");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	2	0	0	0");
		t.equal(rule.date(2010), 30, "The Tuesday on or after Mar 28 2010 should be Mar 30");

		t.done();
	},

	"weekday after (March 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	3	0	0	0");
		t.equal(rule.date(2010), 3, "The Wednesday on or after Mar 1 2010 should be Mar 3");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	3	0	0	0");
		t.equal(rule.date(2010), 3, "The Wednesday on or after Mar 2 2010 should be Mar 3");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	3	0	0	0");
		t.equal(rule.date(2010), 3, "The Wednesday on or after Mar 3 2010 should be Mar 3");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 4 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 5 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 6 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 7 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 8 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 9 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	3	0	0	0");
		t.equal(rule.date(2010), 10, "The Wednesday on or after Mar 10 2010 should be Mar 10");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 11 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 12 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 13 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 14 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 15 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 16 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	3	0	0	0");
		t.equal(rule.date(2010), 17, "The Wednesday on or after Mar 17 2010 should be Mar 17");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 18 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 19 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 20 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 21 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 22 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 23 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	3	0	0	0");
		t.equal(rule.date(2010), 24, "The Wednesday on or after Mar 24 2010 should be Mar 24");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	3	0	0	0");
		t.equal(rule.date(2010), 31, "The Wednesday on or after Mar 25 2010 should be Mar 31");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	3	0	0	0");
		t.equal(rule.date(2010), 31, "The Wednesday on or after Mar 26 2010 should be Mar 31");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	3	0	0	0");
		t.equal(rule.date(2010), 31, "The Wednesday on or after Mar 27 2010 should be Mar 31");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	3	0	0	0");
		t.equal(rule.date(2010), 31, "The Wednesday on or after Mar 28 2010 should be Mar 31");

		t.done();
	},

	"weekday after (March 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	4	0	0	0");
		t.equal(rule.date(2010), 4, "The Thursday on or after Mar 1 2010 should be Mar 4");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	4	0	0	0");
		t.equal(rule.date(2010), 4, "The Thursday on or after Mar 2 2010 should be Mar 4");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	4	0	0	0");
		t.equal(rule.date(2010), 4, "The Thursday on or after Mar 3 2010 should be Mar 4");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	4	0	0	0");
		t.equal(rule.date(2010), 4, "The Thursday on or after Mar 4 2010 should be Mar 4");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 5 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 6 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 7 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 8 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 9 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 10 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	4	0	0	0");
		t.equal(rule.date(2010), 11, "The Thursday on or after Mar 11 2010 should be Mar 11");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 12 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 13 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 14 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 15 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 16 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 17 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	4	0	0	0");
		t.equal(rule.date(2010), 18, "The Thursday on or after Mar 18 2010 should be Mar 18");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 19 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 20 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 21 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 22 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 23 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 24 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	4	0	0	0");
		t.equal(rule.date(2010), 25, "The Thursday on or after Mar 25 2010 should be Mar 25");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	4	0	0	0");
		t.equal(rule.date(2010), 32, "The Thursday on or after Mar 26 2010 should be Apr 1");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	4	0	0	0");
		t.equal(rule.date(2010), 32, "The Thursday on or after Mar 27 2010 should be Apr 1");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	4	0	0	0");
		t.equal(rule.date(2010), 32, "The Thursday on or after Mar 28 2010 should be Apr 1");

		t.done();
	},

	"weekday after (March 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	5	0	0	0");
		t.equal(rule.date(2010), 5, "The Friday on or after Mar 1 2010 should be Mar 5");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	5	0	0	0");
		t.equal(rule.date(2010), 5, "The Friday on or after Mar 2 2010 should be Mar 5");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	5	0	0	0");
		t.equal(rule.date(2010), 5, "The Friday on or after Mar 3 2010 should be Mar 5");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	5	0	0	0");
		t.equal(rule.date(2010), 5, "The Friday on or after Mar 4 2010 should be Mar 5");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	5	0	0	0");
		t.equal(rule.date(2010), 5, "The Friday on or after Mar 5 2010 should be Mar 5");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 6 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 7 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 8 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 9 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 10 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 11 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	5	0	0	0");
		t.equal(rule.date(2010), 12, "The Friday on or after Mar 12 2010 should be Mar 12");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 13 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 14 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 15 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 16 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 17 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 18 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	5	0	0	0");
		t.equal(rule.date(2010), 19, "The Friday on or after Mar 19 2010 should be Mar 19");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 20 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 21 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 22 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 23 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 24 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 25 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	5	0	0	0");
		t.equal(rule.date(2010), 26, "The Friday on or after Mar 26 2010 should be Mar 26");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	5	0	0	0");
		t.equal(rule.date(2010), 33, "The Friday on or after Mar 27 2010 should be Apr 2");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	5	0	0	0");
		t.equal(rule.date(2010), 33, "The Friday on or after Mar 28 2010 should be Apr 2");

		t.done();
	},

	"weekday after (March 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	2	1	6	0	0	0");
		t.equal(rule.date(2010), 6, "The Saturday on or after Mar 1 2010 should be Mar 6");

		rule = moment.tz.addRule("TEST	2008	2010	2	2	6	0	0	0");
		t.equal(rule.date(2010), 6, "The Saturday on or after Mar 2 2010 should be Mar 6");

		rule = moment.tz.addRule("TEST	2008	2010	2	3	6	0	0	0");
		t.equal(rule.date(2010), 6, "The Saturday on or after Mar 3 2010 should be Mar 6");

		rule = moment.tz.addRule("TEST	2008	2010	2	4	6	0	0	0");
		t.equal(rule.date(2010), 6, "The Saturday on or after Mar 4 2010 should be Mar 6");

		rule = moment.tz.addRule("TEST	2008	2010	2	5	6	0	0	0");
		t.equal(rule.date(2010), 6, "The Saturday on or after Mar 5 2010 should be Mar 6");

		rule = moment.tz.addRule("TEST	2008	2010	2	6	6	0	0	0");
		t.equal(rule.date(2010), 6, "The Saturday on or after Mar 6 2010 should be Mar 6");

		rule = moment.tz.addRule("TEST	2008	2010	2	7	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 7 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	8	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 8 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	9	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 9 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	10	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 10 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	11	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 11 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	12	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 12 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	13	6	0	0	0");
		t.equal(rule.date(2010), 13, "The Saturday on or after Mar 13 2010 should be Mar 13");

		rule = moment.tz.addRule("TEST	2008	2010	2	14	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 14 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	15	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 15 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	16	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 16 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	17	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 17 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	18	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 18 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	19	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 19 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	20	6	0	0	0");
		t.equal(rule.date(2010), 20, "The Saturday on or after Mar 20 2010 should be Mar 20");

		rule = moment.tz.addRule("TEST	2008	2010	2	21	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 21 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	22	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 22 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	23	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 23 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	24	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 24 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	25	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 25 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	26	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 26 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	27	6	0	0	0");
		t.equal(rule.date(2010), 27, "The Saturday on or after Mar 27 2010 should be Mar 27");

		rule = moment.tz.addRule("TEST	2008	2010	2	28	6	0	0	0");
		t.equal(rule.date(2010), 34, "The Saturday on or after Mar 28 2010 should be Apr 3");

		t.done();
	},

	"weekday after (June 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	0	0	0	0");
		t.equal(rule.date(2010), 6, "The Sunday on or after Jun 1 2010 should be Jun 6");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	0	0	0	0");
		t.equal(rule.date(2010), 6, "The Sunday on or after Jun 2 2010 should be Jun 6");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	0	0	0	0");
		t.equal(rule.date(2010), 6, "The Sunday on or after Jun 3 2010 should be Jun 6");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	0	0	0	0");
		t.equal(rule.date(2010), 6, "The Sunday on or after Jun 4 2010 should be Jun 6");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	0	0	0	0");
		t.equal(rule.date(2010), 6, "The Sunday on or after Jun 5 2010 should be Jun 6");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	0	0	0	0");
		t.equal(rule.date(2010), 6, "The Sunday on or after Jun 6 2010 should be Jun 6");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 7 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 8 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 9 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 10 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 11 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 12 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	0	0	0	0");
		t.equal(rule.date(2010), 13, "The Sunday on or after Jun 13 2010 should be Jun 13");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 14 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 15 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 16 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 17 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 18 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 19 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	0	0	0	0");
		t.equal(rule.date(2010), 20, "The Sunday on or after Jun 20 2010 should be Jun 20");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 21 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 22 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 23 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 24 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 25 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 26 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	0	0	0	0");
		t.equal(rule.date(2010), 27, "The Sunday on or after Jun 27 2010 should be Jun 27");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	0	0	0	0");
		t.equal(rule.date(2010), 34, "The Sunday on or after Jun 28 2010 should be Jul 4");

		t.done();
	},

	"weekday after (June 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 1 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 2 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 3 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 4 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 5 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 6 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	1	0	0	0");
		t.equal(rule.date(2010), 7, "The Monday on or after Jun 7 2010 should be Jun 7");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 8 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 9 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 10 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 11 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 12 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 13 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	1	0	0	0");
		t.equal(rule.date(2010), 14, "The Monday on or after Jun 14 2010 should be Jun 14");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 15 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 16 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 17 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 18 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 19 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 20 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	1	0	0	0");
		t.equal(rule.date(2010), 21, "The Monday on or after Jun 21 2010 should be Jun 21");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 22 2010 should be Jun 28");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 23 2010 should be Jun 28");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 24 2010 should be Jun 28");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 25 2010 should be Jun 28");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 26 2010 should be Jun 28");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 27 2010 should be Jun 28");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	1	0	0	0");
		t.equal(rule.date(2010), 28, "The Monday on or after Jun 28 2010 should be Jun 28");

		t.done();
	},

	"weekday after (June 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	2	0	0	0");
		t.equal(rule.date(2010), 1, "The Tuesday on or after Jun 1 2010 should be Jun 1");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 2 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 3 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 4 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 5 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 6 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 7 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	2	0	0	0");
		t.equal(rule.date(2010), 8, "The Tuesday on or after Jun 8 2010 should be Jun 8");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 9 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 10 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 11 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 12 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 13 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 14 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	2	0	0	0");
		t.equal(rule.date(2010), 15, "The Tuesday on or after Jun 15 2010 should be Jun 15");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 16 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 17 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 18 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 19 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 20 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 21 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	2	0	0	0");
		t.equal(rule.date(2010), 22, "The Tuesday on or after Jun 22 2010 should be Jun 22");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	2	0	0	0");
		t.equal(rule.date(2010), 29, "The Tuesday on or after Jun 23 2010 should be Jun 29");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	2	0	0	0");
		t.equal(rule.date(2010), 29, "The Tuesday on or after Jun 24 2010 should be Jun 29");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	2	0	0	0");
		t.equal(rule.date(2010), 29, "The Tuesday on or after Jun 25 2010 should be Jun 29");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	2	0	0	0");
		t.equal(rule.date(2010), 29, "The Tuesday on or after Jun 26 2010 should be Jun 29");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	2	0	0	0");
		t.equal(rule.date(2010), 29, "The Tuesday on or after Jun 27 2010 should be Jun 29");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	2	0	0	0");
		t.equal(rule.date(2010), 29, "The Tuesday on or after Jun 28 2010 should be Jun 29");

		t.done();
	},

	"weekday after (June 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	3	0	0	0");
		t.equal(rule.date(2010), 2, "The Wednesday on or after Jun 1 2010 should be Jun 2");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	3	0	0	0");
		t.equal(rule.date(2010), 2, "The Wednesday on or after Jun 2 2010 should be Jun 2");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 3 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 4 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 5 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 6 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 7 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 8 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	3	0	0	0");
		t.equal(rule.date(2010), 9, "The Wednesday on or after Jun 9 2010 should be Jun 9");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 10 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 11 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 12 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 13 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 14 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 15 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	3	0	0	0");
		t.equal(rule.date(2010), 16, "The Wednesday on or after Jun 16 2010 should be Jun 16");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 17 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 18 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 19 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 20 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 21 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 22 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	3	0	0	0");
		t.equal(rule.date(2010), 23, "The Wednesday on or after Jun 23 2010 should be Jun 23");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	3	0	0	0");
		t.equal(rule.date(2010), 30, "The Wednesday on or after Jun 24 2010 should be Jun 30");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	3	0	0	0");
		t.equal(rule.date(2010), 30, "The Wednesday on or after Jun 25 2010 should be Jun 30");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	3	0	0	0");
		t.equal(rule.date(2010), 30, "The Wednesday on or after Jun 26 2010 should be Jun 30");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	3	0	0	0");
		t.equal(rule.date(2010), 30, "The Wednesday on or after Jun 27 2010 should be Jun 30");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	3	0	0	0");
		t.equal(rule.date(2010), 30, "The Wednesday on or after Jun 28 2010 should be Jun 30");

		t.done();
	},

	"weekday after (June 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	4	0	0	0");
		t.equal(rule.date(2010), 3, "The Thursday on or after Jun 1 2010 should be Jun 3");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	4	0	0	0");
		t.equal(rule.date(2010), 3, "The Thursday on or after Jun 2 2010 should be Jun 3");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	4	0	0	0");
		t.equal(rule.date(2010), 3, "The Thursday on or after Jun 3 2010 should be Jun 3");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 4 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 5 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 6 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 7 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 8 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 9 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	4	0	0	0");
		t.equal(rule.date(2010), 10, "The Thursday on or after Jun 10 2010 should be Jun 10");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 11 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 12 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 13 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 14 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 15 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 16 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	4	0	0	0");
		t.equal(rule.date(2010), 17, "The Thursday on or after Jun 17 2010 should be Jun 17");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 18 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 19 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 20 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 21 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 22 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 23 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	4	0	0	0");
		t.equal(rule.date(2010), 24, "The Thursday on or after Jun 24 2010 should be Jun 24");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	4	0	0	0");
		t.equal(rule.date(2010), 31, "The Thursday on or after Jun 25 2010 should be Jul 1");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	4	0	0	0");
		t.equal(rule.date(2010), 31, "The Thursday on or after Jun 26 2010 should be Jul 1");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	4	0	0	0");
		t.equal(rule.date(2010), 31, "The Thursday on or after Jun 27 2010 should be Jul 1");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	4	0	0	0");
		t.equal(rule.date(2010), 31, "The Thursday on or after Jun 28 2010 should be Jul 1");

		t.done();
	},

	"weekday after (June 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	5	0	0	0");
		t.equal(rule.date(2010), 4, "The Friday on or after Jun 1 2010 should be Jun 4");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	5	0	0	0");
		t.equal(rule.date(2010), 4, "The Friday on or after Jun 2 2010 should be Jun 4");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	5	0	0	0");
		t.equal(rule.date(2010), 4, "The Friday on or after Jun 3 2010 should be Jun 4");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	5	0	0	0");
		t.equal(rule.date(2010), 4, "The Friday on or after Jun 4 2010 should be Jun 4");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 5 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 6 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 7 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 8 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 9 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 10 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	5	0	0	0");
		t.equal(rule.date(2010), 11, "The Friday on or after Jun 11 2010 should be Jun 11");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 12 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 13 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 14 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 15 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 16 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 17 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	5	0	0	0");
		t.equal(rule.date(2010), 18, "The Friday on or after Jun 18 2010 should be Jun 18");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 19 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 20 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 21 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 22 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 23 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 24 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	5	0	0	0");
		t.equal(rule.date(2010), 25, "The Friday on or after Jun 25 2010 should be Jun 25");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	5	0	0	0");
		t.equal(rule.date(2010), 32, "The Friday on or after Jun 26 2010 should be Jul 2");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	5	0	0	0");
		t.equal(rule.date(2010), 32, "The Friday on or after Jun 27 2010 should be Jul 2");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	5	0	0	0");
		t.equal(rule.date(2010), 32, "The Friday on or after Jun 28 2010 should be Jul 2");

		t.done();
	},

	"weekday after (June 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	5	1	6	0	0	0");
		t.equal(rule.date(2010), 5, "The Saturday on or after Jun 1 2010 should be Jun 5");

		rule = moment.tz.addRule("TEST	2008	2010	5	2	6	0	0	0");
		t.equal(rule.date(2010), 5, "The Saturday on or after Jun 2 2010 should be Jun 5");

		rule = moment.tz.addRule("TEST	2008	2010	5	3	6	0	0	0");
		t.equal(rule.date(2010), 5, "The Saturday on or after Jun 3 2010 should be Jun 5");

		rule = moment.tz.addRule("TEST	2008	2010	5	4	6	0	0	0");
		t.equal(rule.date(2010), 5, "The Saturday on or after Jun 4 2010 should be Jun 5");

		rule = moment.tz.addRule("TEST	2008	2010	5	5	6	0	0	0");
		t.equal(rule.date(2010), 5, "The Saturday on or after Jun 5 2010 should be Jun 5");

		rule = moment.tz.addRule("TEST	2008	2010	5	6	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 6 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	7	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 7 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	8	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 8 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	9	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 9 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	10	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 10 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	11	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 11 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	12	6	0	0	0");
		t.equal(rule.date(2010), 12, "The Saturday on or after Jun 12 2010 should be Jun 12");

		rule = moment.tz.addRule("TEST	2008	2010	5	13	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 13 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	14	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 14 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	15	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 15 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	16	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 16 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	17	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 17 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	18	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 18 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	19	6	0	0	0");
		t.equal(rule.date(2010), 19, "The Saturday on or after Jun 19 2010 should be Jun 19");

		rule = moment.tz.addRule("TEST	2008	2010	5	20	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 20 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	21	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 21 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	22	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 22 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	23	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 23 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	24	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 24 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	25	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 25 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	26	6	0	0	0");
		t.equal(rule.date(2010), 26, "The Saturday on or after Jun 26 2010 should be Jun 26");

		rule = moment.tz.addRule("TEST	2008	2010	5	27	6	0	0	0");
		t.equal(rule.date(2010), 33, "The Saturday on or after Jun 27 2010 should be Jul 3");

		rule = moment.tz.addRule("TEST	2008	2010	5	28	6	0	0	0");
		t.equal(rule.date(2010), 33, "The Saturday on or after Jun 28 2010 should be Jul 3");

		t.done();
	},

	"weekday after (September 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	0	0	0	0");
		t.equal(rule.date(2010), 5, "The Sunday on or after Sep 1 2010 should be Sep 5");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	0	0	0	0");
		t.equal(rule.date(2010), 5, "The Sunday on or after Sep 2 2010 should be Sep 5");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	0	0	0	0");
		t.equal(rule.date(2010), 5, "The Sunday on or after Sep 3 2010 should be Sep 5");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	0	0	0	0");
		t.equal(rule.date(2010), 5, "The Sunday on or after Sep 4 2010 should be Sep 5");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	0	0	0	0");
		t.equal(rule.date(2010), 5, "The Sunday on or after Sep 5 2010 should be Sep 5");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 6 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 7 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 8 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 9 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 10 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 11 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	0	0	0	0");
		t.equal(rule.date(2010), 12, "The Sunday on or after Sep 12 2010 should be Sep 12");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 13 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 14 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 15 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 16 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 17 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 18 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	0	0	0	0");
		t.equal(rule.date(2010), 19, "The Sunday on or after Sep 19 2010 should be Sep 19");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 20 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 21 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 22 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 23 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 24 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 25 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	0	0	0	0");
		t.equal(rule.date(2010), 26, "The Sunday on or after Sep 26 2010 should be Sep 26");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	0	0	0	0");
		t.equal(rule.date(2010), 33, "The Sunday on or after Sep 27 2010 should be Oct 3");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	0	0	0	0");
		t.equal(rule.date(2010), 33, "The Sunday on or after Sep 28 2010 should be Oct 3");

		t.done();
	},

	"weekday after (September 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	1	0	0	0");
		t.equal(rule.date(2010), 6, "The Monday on or after Sep 1 2010 should be Sep 6");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	1	0	0	0");
		t.equal(rule.date(2010), 6, "The Monday on or after Sep 2 2010 should be Sep 6");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	1	0	0	0");
		t.equal(rule.date(2010), 6, "The Monday on or after Sep 3 2010 should be Sep 6");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	1	0	0	0");
		t.equal(rule.date(2010), 6, "The Monday on or after Sep 4 2010 should be Sep 6");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	1	0	0	0");
		t.equal(rule.date(2010), 6, "The Monday on or after Sep 5 2010 should be Sep 6");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	1	0	0	0");
		t.equal(rule.date(2010), 6, "The Monday on or after Sep 6 2010 should be Sep 6");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 7 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 8 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 9 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 10 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 11 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 12 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	1	0	0	0");
		t.equal(rule.date(2010), 13, "The Monday on or after Sep 13 2010 should be Sep 13");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 14 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 15 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 16 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 17 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 18 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 19 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	1	0	0	0");
		t.equal(rule.date(2010), 20, "The Monday on or after Sep 20 2010 should be Sep 20");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 21 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 22 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 23 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 24 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 25 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 26 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	1	0	0	0");
		t.equal(rule.date(2010), 27, "The Monday on or after Sep 27 2010 should be Sep 27");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	1	0	0	0");
		t.equal(rule.date(2010), 34, "The Monday on or after Sep 28 2010 should be Oct 4");

		t.done();
	},

	"weekday after (September 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 1 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 2 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 3 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 4 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 5 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 6 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	2	0	0	0");
		t.equal(rule.date(2010), 7, "The Tuesday on or after Sep 7 2010 should be Sep 7");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 8 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 9 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 10 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 11 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 12 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 13 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	2	0	0	0");
		t.equal(rule.date(2010), 14, "The Tuesday on or after Sep 14 2010 should be Sep 14");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 15 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 16 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 17 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 18 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 19 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 20 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	2	0	0	0");
		t.equal(rule.date(2010), 21, "The Tuesday on or after Sep 21 2010 should be Sep 21");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 22 2010 should be Sep 28");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 23 2010 should be Sep 28");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 24 2010 should be Sep 28");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 25 2010 should be Sep 28");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 26 2010 should be Sep 28");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 27 2010 should be Sep 28");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	2	0	0	0");
		t.equal(rule.date(2010), 28, "The Tuesday on or after Sep 28 2010 should be Sep 28");

		t.done();
	},

	"weekday after (September 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	3	0	0	0");
		t.equal(rule.date(2010), 1, "The Wednesday on or after Sep 1 2010 should be Sep 1");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 2 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 3 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 4 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 5 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 6 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 7 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	3	0	0	0");
		t.equal(rule.date(2010), 8, "The Wednesday on or after Sep 8 2010 should be Sep 8");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 9 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 10 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 11 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 12 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 13 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 14 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	3	0	0	0");
		t.equal(rule.date(2010), 15, "The Wednesday on or after Sep 15 2010 should be Sep 15");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 16 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 17 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 18 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 19 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 20 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 21 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	3	0	0	0");
		t.equal(rule.date(2010), 22, "The Wednesday on or after Sep 22 2010 should be Sep 22");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	3	0	0	0");
		t.equal(rule.date(2010), 29, "The Wednesday on or after Sep 23 2010 should be Sep 29");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	3	0	0	0");
		t.equal(rule.date(2010), 29, "The Wednesday on or after Sep 24 2010 should be Sep 29");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	3	0	0	0");
		t.equal(rule.date(2010), 29, "The Wednesday on or after Sep 25 2010 should be Sep 29");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	3	0	0	0");
		t.equal(rule.date(2010), 29, "The Wednesday on or after Sep 26 2010 should be Sep 29");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	3	0	0	0");
		t.equal(rule.date(2010), 29, "The Wednesday on or after Sep 27 2010 should be Sep 29");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	3	0	0	0");
		t.equal(rule.date(2010), 29, "The Wednesday on or after Sep 28 2010 should be Sep 29");

		t.done();
	},

	"weekday after (September 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	4	0	0	0");
		t.equal(rule.date(2010), 2, "The Thursday on or after Sep 1 2010 should be Sep 2");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	4	0	0	0");
		t.equal(rule.date(2010), 2, "The Thursday on or after Sep 2 2010 should be Sep 2");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 3 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 4 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 5 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 6 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 7 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 8 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	4	0	0	0");
		t.equal(rule.date(2010), 9, "The Thursday on or after Sep 9 2010 should be Sep 9");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 10 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 11 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 12 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 13 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 14 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 15 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	4	0	0	0");
		t.equal(rule.date(2010), 16, "The Thursday on or after Sep 16 2010 should be Sep 16");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 17 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 18 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 19 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 20 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 21 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 22 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	4	0	0	0");
		t.equal(rule.date(2010), 23, "The Thursday on or after Sep 23 2010 should be Sep 23");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	4	0	0	0");
		t.equal(rule.date(2010), 30, "The Thursday on or after Sep 24 2010 should be Sep 30");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	4	0	0	0");
		t.equal(rule.date(2010), 30, "The Thursday on or after Sep 25 2010 should be Sep 30");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	4	0	0	0");
		t.equal(rule.date(2010), 30, "The Thursday on or after Sep 26 2010 should be Sep 30");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	4	0	0	0");
		t.equal(rule.date(2010), 30, "The Thursday on or after Sep 27 2010 should be Sep 30");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	4	0	0	0");
		t.equal(rule.date(2010), 30, "The Thursday on or after Sep 28 2010 should be Sep 30");

		t.done();
	},

	"weekday after (September 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	5	0	0	0");
		t.equal(rule.date(2010), 3, "The Friday on or after Sep 1 2010 should be Sep 3");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	5	0	0	0");
		t.equal(rule.date(2010), 3, "The Friday on or after Sep 2 2010 should be Sep 3");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	5	0	0	0");
		t.equal(rule.date(2010), 3, "The Friday on or after Sep 3 2010 should be Sep 3");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 4 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 5 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 6 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 7 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 8 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 9 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	5	0	0	0");
		t.equal(rule.date(2010), 10, "The Friday on or after Sep 10 2010 should be Sep 10");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 11 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 12 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 13 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 14 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 15 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 16 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	5	0	0	0");
		t.equal(rule.date(2010), 17, "The Friday on or after Sep 17 2010 should be Sep 17");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 18 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 19 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 20 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 21 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 22 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 23 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	5	0	0	0");
		t.equal(rule.date(2010), 24, "The Friday on or after Sep 24 2010 should be Sep 24");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	5	0	0	0");
		t.equal(rule.date(2010), 31, "The Friday on or after Sep 25 2010 should be Oct 1");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	5	0	0	0");
		t.equal(rule.date(2010), 31, "The Friday on or after Sep 26 2010 should be Oct 1");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	5	0	0	0");
		t.equal(rule.date(2010), 31, "The Friday on or after Sep 27 2010 should be Oct 1");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	5	0	0	0");
		t.equal(rule.date(2010), 31, "The Friday on or after Sep 28 2010 should be Oct 1");

		t.done();
	},

	"weekday after (September 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	8	1	6	0	0	0");
		t.equal(rule.date(2010), 4, "The Saturday on or after Sep 1 2010 should be Sep 4");

		rule = moment.tz.addRule("TEST	2008	2010	8	2	6	0	0	0");
		t.equal(rule.date(2010), 4, "The Saturday on or after Sep 2 2010 should be Sep 4");

		rule = moment.tz.addRule("TEST	2008	2010	8	3	6	0	0	0");
		t.equal(rule.date(2010), 4, "The Saturday on or after Sep 3 2010 should be Sep 4");

		rule = moment.tz.addRule("TEST	2008	2010	8	4	6	0	0	0");
		t.equal(rule.date(2010), 4, "The Saturday on or after Sep 4 2010 should be Sep 4");

		rule = moment.tz.addRule("TEST	2008	2010	8	5	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 5 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	6	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 6 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	7	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 7 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	8	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 8 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	9	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 9 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	10	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 10 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	11	6	0	0	0");
		t.equal(rule.date(2010), 11, "The Saturday on or after Sep 11 2010 should be Sep 11");

		rule = moment.tz.addRule("TEST	2008	2010	8	12	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 12 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	13	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 13 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	14	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 14 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	15	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 15 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	16	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 16 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	17	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 17 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	18	6	0	0	0");
		t.equal(rule.date(2010), 18, "The Saturday on or after Sep 18 2010 should be Sep 18");

		rule = moment.tz.addRule("TEST	2008	2010	8	19	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 19 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	20	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 20 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	21	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 21 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	22	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 22 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	23	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 23 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	24	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 24 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	25	6	0	0	0");
		t.equal(rule.date(2010), 25, "The Saturday on or after Sep 25 2010 should be Sep 25");

		rule = moment.tz.addRule("TEST	2008	2010	8	26	6	0	0	0");
		t.equal(rule.date(2010), 32, "The Saturday on or after Sep 26 2010 should be Oct 2");

		rule = moment.tz.addRule("TEST	2008	2010	8	27	6	0	0	0");
		t.equal(rule.date(2010), 32, "The Saturday on or after Sep 27 2010 should be Oct 2");

		rule = moment.tz.addRule("TEST	2008	2010	8	28	6	0	0	0");
		t.equal(rule.date(2010), 32, "The Saturday on or after Sep 28 2010 should be Oct 2");

		t.done();
	},

	"weekday after (July 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	0	0	0	0");
		t.equal(rule.date(2010), 4, "The Sunday on or after Jul 1 2010 should be Jul 4");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	0	0	0	0");
		t.equal(rule.date(2010), 4, "The Sunday on or after Jul 2 2010 should be Jul 4");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	0	0	0	0");
		t.equal(rule.date(2010), 4, "The Sunday on or after Jul 3 2010 should be Jul 4");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	0	0	0	0");
		t.equal(rule.date(2010), 4, "The Sunday on or after Jul 4 2010 should be Jul 4");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 5 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 6 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 7 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 8 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 9 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 10 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	0	0	0	0");
		t.equal(rule.date(2010), 11, "The Sunday on or after Jul 11 2010 should be Jul 11");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 12 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 13 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 14 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 15 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 16 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 17 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	0	0	0	0");
		t.equal(rule.date(2010), 18, "The Sunday on or after Jul 18 2010 should be Jul 18");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 19 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 20 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 21 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 22 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 23 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 24 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	0	0	0	0");
		t.equal(rule.date(2010), 25, "The Sunday on or after Jul 25 2010 should be Jul 25");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	0	0	0	0");
		t.equal(rule.date(2010), 32, "The Sunday on or after Jul 26 2010 should be Aug 1");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	0	0	0	0");
		t.equal(rule.date(2010), 32, "The Sunday on or after Jul 27 2010 should be Aug 1");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	0	0	0	0");
		t.equal(rule.date(2010), 32, "The Sunday on or after Jul 28 2010 should be Aug 1");

		t.done();
	},

	"weekday after (July 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	1	0	0	0");
		t.equal(rule.date(2010), 5, "The Monday on or after Jul 1 2010 should be Jul 5");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	1	0	0	0");
		t.equal(rule.date(2010), 5, "The Monday on or after Jul 2 2010 should be Jul 5");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	1	0	0	0");
		t.equal(rule.date(2010), 5, "The Monday on or after Jul 3 2010 should be Jul 5");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	1	0	0	0");
		t.equal(rule.date(2010), 5, "The Monday on or after Jul 4 2010 should be Jul 5");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	1	0	0	0");
		t.equal(rule.date(2010), 5, "The Monday on or after Jul 5 2010 should be Jul 5");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 6 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 7 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 8 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 9 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 10 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 11 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	1	0	0	0");
		t.equal(rule.date(2010), 12, "The Monday on or after Jul 12 2010 should be Jul 12");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 13 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 14 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 15 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 16 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 17 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 18 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	1	0	0	0");
		t.equal(rule.date(2010), 19, "The Monday on or after Jul 19 2010 should be Jul 19");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 20 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 21 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 22 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 23 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 24 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 25 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	1	0	0	0");
		t.equal(rule.date(2010), 26, "The Monday on or after Jul 26 2010 should be Jul 26");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	1	0	0	0");
		t.equal(rule.date(2010), 33, "The Monday on or after Jul 27 2010 should be Aug 2");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	1	0	0	0");
		t.equal(rule.date(2010), 33, "The Monday on or after Jul 28 2010 should be Aug 2");

		t.done();
	},

	"weekday after (July 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	2	0	0	0");
		t.equal(rule.date(2010), 6, "The Tuesday on or after Jul 1 2010 should be Jul 6");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	2	0	0	0");
		t.equal(rule.date(2010), 6, "The Tuesday on or after Jul 2 2010 should be Jul 6");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	2	0	0	0");
		t.equal(rule.date(2010), 6, "The Tuesday on or after Jul 3 2010 should be Jul 6");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	2	0	0	0");
		t.equal(rule.date(2010), 6, "The Tuesday on or after Jul 4 2010 should be Jul 6");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	2	0	0	0");
		t.equal(rule.date(2010), 6, "The Tuesday on or after Jul 5 2010 should be Jul 6");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	2	0	0	0");
		t.equal(rule.date(2010), 6, "The Tuesday on or after Jul 6 2010 should be Jul 6");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 7 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 8 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 9 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 10 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 11 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 12 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	2	0	0	0");
		t.equal(rule.date(2010), 13, "The Tuesday on or after Jul 13 2010 should be Jul 13");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 14 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 15 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 16 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 17 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 18 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 19 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	2	0	0	0");
		t.equal(rule.date(2010), 20, "The Tuesday on or after Jul 20 2010 should be Jul 20");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 21 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 22 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 23 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 24 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 25 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 26 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	2	0	0	0");
		t.equal(rule.date(2010), 27, "The Tuesday on or after Jul 27 2010 should be Jul 27");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	2	0	0	0");
		t.equal(rule.date(2010), 34, "The Tuesday on or after Jul 28 2010 should be Aug 3");

		t.done();
	},

	"weekday after (July 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 1 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 2 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 3 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 4 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 5 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 6 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	3	0	0	0");
		t.equal(rule.date(2010), 7, "The Wednesday on or after Jul 7 2010 should be Jul 7");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 8 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 9 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 10 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 11 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 12 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 13 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	3	0	0	0");
		t.equal(rule.date(2010), 14, "The Wednesday on or after Jul 14 2010 should be Jul 14");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 15 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 16 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 17 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 18 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 19 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 20 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	3	0	0	0");
		t.equal(rule.date(2010), 21, "The Wednesday on or after Jul 21 2010 should be Jul 21");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 22 2010 should be Jul 28");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 23 2010 should be Jul 28");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 24 2010 should be Jul 28");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 25 2010 should be Jul 28");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 26 2010 should be Jul 28");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 27 2010 should be Jul 28");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	3	0	0	0");
		t.equal(rule.date(2010), 28, "The Wednesday on or after Jul 28 2010 should be Jul 28");

		t.done();
	},

	"weekday after (July 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	4	0	0	0");
		t.equal(rule.date(2010), 1, "The Thursday on or after Jul 1 2010 should be Jul 1");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 2 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 3 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 4 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 5 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 6 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 7 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	4	0	0	0");
		t.equal(rule.date(2010), 8, "The Thursday on or after Jul 8 2010 should be Jul 8");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 9 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 10 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 11 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 12 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 13 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 14 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	4	0	0	0");
		t.equal(rule.date(2010), 15, "The Thursday on or after Jul 15 2010 should be Jul 15");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 16 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 17 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 18 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 19 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 20 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 21 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	4	0	0	0");
		t.equal(rule.date(2010), 22, "The Thursday on or after Jul 22 2010 should be Jul 22");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	4	0	0	0");
		t.equal(rule.date(2010), 29, "The Thursday on or after Jul 23 2010 should be Jul 29");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	4	0	0	0");
		t.equal(rule.date(2010), 29, "The Thursday on or after Jul 24 2010 should be Jul 29");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	4	0	0	0");
		t.equal(rule.date(2010), 29, "The Thursday on or after Jul 25 2010 should be Jul 29");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	4	0	0	0");
		t.equal(rule.date(2010), 29, "The Thursday on or after Jul 26 2010 should be Jul 29");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	4	0	0	0");
		t.equal(rule.date(2010), 29, "The Thursday on or after Jul 27 2010 should be Jul 29");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	4	0	0	0");
		t.equal(rule.date(2010), 29, "The Thursday on or after Jul 28 2010 should be Jul 29");

		t.done();
	},

	"weekday after (July 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	5	0	0	0");
		t.equal(rule.date(2010), 2, "The Friday on or after Jul 1 2010 should be Jul 2");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	5	0	0	0");
		t.equal(rule.date(2010), 2, "The Friday on or after Jul 2 2010 should be Jul 2");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 3 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 4 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 5 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 6 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 7 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 8 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	5	0	0	0");
		t.equal(rule.date(2010), 9, "The Friday on or after Jul 9 2010 should be Jul 9");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 10 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 11 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 12 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 13 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 14 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 15 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	5	0	0	0");
		t.equal(rule.date(2010), 16, "The Friday on or after Jul 16 2010 should be Jul 16");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 17 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 18 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 19 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 20 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 21 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 22 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	5	0	0	0");
		t.equal(rule.date(2010), 23, "The Friday on or after Jul 23 2010 should be Jul 23");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	5	0	0	0");
		t.equal(rule.date(2010), 30, "The Friday on or after Jul 24 2010 should be Jul 30");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	5	0	0	0");
		t.equal(rule.date(2010), 30, "The Friday on or after Jul 25 2010 should be Jul 30");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	5	0	0	0");
		t.equal(rule.date(2010), 30, "The Friday on or after Jul 26 2010 should be Jul 30");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	5	0	0	0");
		t.equal(rule.date(2010), 30, "The Friday on or after Jul 27 2010 should be Jul 30");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	5	0	0	0");
		t.equal(rule.date(2010), 30, "The Friday on or after Jul 28 2010 should be Jul 30");

		t.done();
	},

	"weekday after (July 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	6	1	6	0	0	0");
		t.equal(rule.date(2010), 3, "The Saturday on or after Jul 1 2010 should be Jul 3");

		rule = moment.tz.addRule("TEST	2008	2010	6	2	6	0	0	0");
		t.equal(rule.date(2010), 3, "The Saturday on or after Jul 2 2010 should be Jul 3");

		rule = moment.tz.addRule("TEST	2008	2010	6	3	6	0	0	0");
		t.equal(rule.date(2010), 3, "The Saturday on or after Jul 3 2010 should be Jul 3");

		rule = moment.tz.addRule("TEST	2008	2010	6	4	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 4 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	5	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 5 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	6	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 6 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	7	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 7 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	8	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 8 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	9	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 9 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	10	6	0	0	0");
		t.equal(rule.date(2010), 10, "The Saturday on or after Jul 10 2010 should be Jul 10");

		rule = moment.tz.addRule("TEST	2008	2010	6	11	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 11 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	12	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 12 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	13	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 13 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	14	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 14 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	15	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 15 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	16	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 16 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	17	6	0	0	0");
		t.equal(rule.date(2010), 17, "The Saturday on or after Jul 17 2010 should be Jul 17");

		rule = moment.tz.addRule("TEST	2008	2010	6	18	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 18 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	19	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 19 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	20	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 20 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	21	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 21 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	22	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 22 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	23	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 23 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	24	6	0	0	0");
		t.equal(rule.date(2010), 24, "The Saturday on or after Jul 24 2010 should be Jul 24");

		rule = moment.tz.addRule("TEST	2008	2010	6	25	6	0	0	0");
		t.equal(rule.date(2010), 31, "The Saturday on or after Jul 25 2010 should be Jul 31");

		rule = moment.tz.addRule("TEST	2008	2010	6	26	6	0	0	0");
		t.equal(rule.date(2010), 31, "The Saturday on or after Jul 26 2010 should be Jul 31");

		rule = moment.tz.addRule("TEST	2008	2010	6	27	6	0	0	0");
		t.equal(rule.date(2010), 31, "The Saturday on or after Jul 27 2010 should be Jul 31");

		rule = moment.tz.addRule("TEST	2008	2010	6	28	6	0	0	0");
		t.equal(rule.date(2010), 31, "The Saturday on or after Jul 28 2010 should be Jul 31");

		t.done();
	},

	"weekday after (October 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	0	0	0	0");
		t.equal(rule.date(2010), 3, "The Sunday on or after Oct 1 2010 should be Oct 3");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	0	0	0	0");
		t.equal(rule.date(2010), 3, "The Sunday on or after Oct 2 2010 should be Oct 3");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	0	0	0	0");
		t.equal(rule.date(2010), 3, "The Sunday on or after Oct 3 2010 should be Oct 3");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 4 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 5 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 6 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 7 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 8 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 9 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	0	0	0	0");
		t.equal(rule.date(2010), 10, "The Sunday on or after Oct 10 2010 should be Oct 10");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 11 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 12 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 13 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 14 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 15 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 16 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	0	0	0	0");
		t.equal(rule.date(2010), 17, "The Sunday on or after Oct 17 2010 should be Oct 17");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 18 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 19 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 20 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 21 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 22 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 23 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	0	0	0	0");
		t.equal(rule.date(2010), 24, "The Sunday on or after Oct 24 2010 should be Oct 24");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	0	0	0	0");
		t.equal(rule.date(2010), 31, "The Sunday on or after Oct 25 2010 should be Oct 31");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	0	0	0	0");
		t.equal(rule.date(2010), 31, "The Sunday on or after Oct 26 2010 should be Oct 31");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	0	0	0	0");
		t.equal(rule.date(2010), 31, "The Sunday on or after Oct 27 2010 should be Oct 31");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	0	0	0	0");
		t.equal(rule.date(2010), 31, "The Sunday on or after Oct 28 2010 should be Oct 31");

		t.done();
	},

	"weekday after (October 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	1	0	0	0");
		t.equal(rule.date(2010), 4, "The Monday on or after Oct 1 2010 should be Oct 4");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	1	0	0	0");
		t.equal(rule.date(2010), 4, "The Monday on or after Oct 2 2010 should be Oct 4");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	1	0	0	0");
		t.equal(rule.date(2010), 4, "The Monday on or after Oct 3 2010 should be Oct 4");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	1	0	0	0");
		t.equal(rule.date(2010), 4, "The Monday on or after Oct 4 2010 should be Oct 4");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 5 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 6 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 7 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 8 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 9 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 10 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	1	0	0	0");
		t.equal(rule.date(2010), 11, "The Monday on or after Oct 11 2010 should be Oct 11");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 12 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 13 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 14 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 15 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 16 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 17 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	1	0	0	0");
		t.equal(rule.date(2010), 18, "The Monday on or after Oct 18 2010 should be Oct 18");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 19 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 20 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 21 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 22 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 23 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 24 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	1	0	0	0");
		t.equal(rule.date(2010), 25, "The Monday on or after Oct 25 2010 should be Oct 25");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	1	0	0	0");
		t.equal(rule.date(2010), 32, "The Monday on or after Oct 26 2010 should be Nov 1");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	1	0	0	0");
		t.equal(rule.date(2010), 32, "The Monday on or after Oct 27 2010 should be Nov 1");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	1	0	0	0");
		t.equal(rule.date(2010), 32, "The Monday on or after Oct 28 2010 should be Nov 1");

		t.done();
	},

	"weekday after (October 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	2	0	0	0");
		t.equal(rule.date(2010), 5, "The Tuesday on or after Oct 1 2010 should be Oct 5");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	2	0	0	0");
		t.equal(rule.date(2010), 5, "The Tuesday on or after Oct 2 2010 should be Oct 5");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	2	0	0	0");
		t.equal(rule.date(2010), 5, "The Tuesday on or after Oct 3 2010 should be Oct 5");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	2	0	0	0");
		t.equal(rule.date(2010), 5, "The Tuesday on or after Oct 4 2010 should be Oct 5");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	2	0	0	0");
		t.equal(rule.date(2010), 5, "The Tuesday on or after Oct 5 2010 should be Oct 5");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 6 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 7 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 8 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 9 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 10 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 11 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	2	0	0	0");
		t.equal(rule.date(2010), 12, "The Tuesday on or after Oct 12 2010 should be Oct 12");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 13 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 14 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 15 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 16 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 17 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 18 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	2	0	0	0");
		t.equal(rule.date(2010), 19, "The Tuesday on or after Oct 19 2010 should be Oct 19");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 20 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 21 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 22 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 23 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 24 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 25 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	2	0	0	0");
		t.equal(rule.date(2010), 26, "The Tuesday on or after Oct 26 2010 should be Oct 26");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	2	0	0	0");
		t.equal(rule.date(2010), 33, "The Tuesday on or after Oct 27 2010 should be Nov 2");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	2	0	0	0");
		t.equal(rule.date(2010), 33, "The Tuesday on or after Oct 28 2010 should be Nov 2");

		t.done();
	},

	"weekday after (October 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	3	0	0	0");
		t.equal(rule.date(2010), 6, "The Wednesday on or after Oct 1 2010 should be Oct 6");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	3	0	0	0");
		t.equal(rule.date(2010), 6, "The Wednesday on or after Oct 2 2010 should be Oct 6");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	3	0	0	0");
		t.equal(rule.date(2010), 6, "The Wednesday on or after Oct 3 2010 should be Oct 6");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	3	0	0	0");
		t.equal(rule.date(2010), 6, "The Wednesday on or after Oct 4 2010 should be Oct 6");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	3	0	0	0");
		t.equal(rule.date(2010), 6, "The Wednesday on or after Oct 5 2010 should be Oct 6");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	3	0	0	0");
		t.equal(rule.date(2010), 6, "The Wednesday on or after Oct 6 2010 should be Oct 6");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 7 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 8 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 9 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 10 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 11 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 12 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	3	0	0	0");
		t.equal(rule.date(2010), 13, "The Wednesday on or after Oct 13 2010 should be Oct 13");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 14 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 15 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 16 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 17 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 18 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 19 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	3	0	0	0");
		t.equal(rule.date(2010), 20, "The Wednesday on or after Oct 20 2010 should be Oct 20");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 21 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 22 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 23 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 24 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 25 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 26 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	3	0	0	0");
		t.equal(rule.date(2010), 27, "The Wednesday on or after Oct 27 2010 should be Oct 27");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	3	0	0	0");
		t.equal(rule.date(2010), 34, "The Wednesday on or after Oct 28 2010 should be Nov 3");

		t.done();
	},

	"weekday after (October 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 1 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 2 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 3 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 4 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 5 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 6 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	4	0	0	0");
		t.equal(rule.date(2010), 7, "The Thursday on or after Oct 7 2010 should be Oct 7");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 8 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 9 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 10 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 11 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 12 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 13 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	4	0	0	0");
		t.equal(rule.date(2010), 14, "The Thursday on or after Oct 14 2010 should be Oct 14");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 15 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 16 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 17 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 18 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 19 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 20 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	4	0	0	0");
		t.equal(rule.date(2010), 21, "The Thursday on or after Oct 21 2010 should be Oct 21");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 22 2010 should be Oct 28");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 23 2010 should be Oct 28");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 24 2010 should be Oct 28");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 25 2010 should be Oct 28");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 26 2010 should be Oct 28");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 27 2010 should be Oct 28");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	4	0	0	0");
		t.equal(rule.date(2010), 28, "The Thursday on or after Oct 28 2010 should be Oct 28");

		t.done();
	},

	"weekday after (October 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	5	0	0	0");
		t.equal(rule.date(2010), 1, "The Friday on or after Oct 1 2010 should be Oct 1");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 2 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 3 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 4 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 5 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 6 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 7 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	5	0	0	0");
		t.equal(rule.date(2010), 8, "The Friday on or after Oct 8 2010 should be Oct 8");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 9 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 10 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 11 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 12 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 13 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 14 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	5	0	0	0");
		t.equal(rule.date(2010), 15, "The Friday on or after Oct 15 2010 should be Oct 15");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 16 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 17 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 18 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 19 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 20 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 21 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	5	0	0	0");
		t.equal(rule.date(2010), 22, "The Friday on or after Oct 22 2010 should be Oct 22");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	5	0	0	0");
		t.equal(rule.date(2010), 29, "The Friday on or after Oct 23 2010 should be Oct 29");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	5	0	0	0");
		t.equal(rule.date(2010), 29, "The Friday on or after Oct 24 2010 should be Oct 29");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	5	0	0	0");
		t.equal(rule.date(2010), 29, "The Friday on or after Oct 25 2010 should be Oct 29");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	5	0	0	0");
		t.equal(rule.date(2010), 29, "The Friday on or after Oct 26 2010 should be Oct 29");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	5	0	0	0");
		t.equal(rule.date(2010), 29, "The Friday on or after Oct 27 2010 should be Oct 29");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	5	0	0	0");
		t.equal(rule.date(2010), 29, "The Friday on or after Oct 28 2010 should be Oct 29");

		t.done();
	},

	"weekday after (October 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	9	1	6	0	0	0");
		t.equal(rule.date(2010), 2, "The Saturday on or after Oct 1 2010 should be Oct 2");

		rule = moment.tz.addRule("TEST	2008	2010	9	2	6	0	0	0");
		t.equal(rule.date(2010), 2, "The Saturday on or after Oct 2 2010 should be Oct 2");

		rule = moment.tz.addRule("TEST	2008	2010	9	3	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 3 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	4	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 4 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	5	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 5 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	6	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 6 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	7	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 7 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	8	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 8 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	9	6	0	0	0");
		t.equal(rule.date(2010), 9, "The Saturday on or after Oct 9 2010 should be Oct 9");

		rule = moment.tz.addRule("TEST	2008	2010	9	10	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 10 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	11	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 11 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	12	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 12 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	13	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 13 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	14	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 14 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	15	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 15 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	16	6	0	0	0");
		t.equal(rule.date(2010), 16, "The Saturday on or after Oct 16 2010 should be Oct 16");

		rule = moment.tz.addRule("TEST	2008	2010	9	17	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 17 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	18	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 18 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	19	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 19 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	20	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 20 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	21	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 21 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	22	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 22 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	23	6	0	0	0");
		t.equal(rule.date(2010), 23, "The Saturday on or after Oct 23 2010 should be Oct 23");

		rule = moment.tz.addRule("TEST	2008	2010	9	24	6	0	0	0");
		t.equal(rule.date(2010), 30, "The Saturday on or after Oct 24 2010 should be Oct 30");

		rule = moment.tz.addRule("TEST	2008	2010	9	25	6	0	0	0");
		t.equal(rule.date(2010), 30, "The Saturday on or after Oct 25 2010 should be Oct 30");

		rule = moment.tz.addRule("TEST	2008	2010	9	26	6	0	0	0");
		t.equal(rule.date(2010), 30, "The Saturday on or after Oct 26 2010 should be Oct 30");

		rule = moment.tz.addRule("TEST	2008	2010	9	27	6	0	0	0");
		t.equal(rule.date(2010), 30, "The Saturday on or after Oct 27 2010 should be Oct 30");

		rule = moment.tz.addRule("TEST	2008	2010	9	28	6	0	0	0");
		t.equal(rule.date(2010), 30, "The Saturday on or after Oct 28 2010 should be Oct 30");

		t.done();
	},

	"weekday after (May 2010 / Sunday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	0	0	0	0");
		t.equal(rule.date(2010), 2, "The Sunday on or after May 1 2010 should be May 2");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	0	0	0	0");
		t.equal(rule.date(2010), 2, "The Sunday on or after May 2 2010 should be May 2");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 3 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 4 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 5 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 6 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 7 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 8 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	0	0	0	0");
		t.equal(rule.date(2010), 9, "The Sunday on or after May 9 2010 should be May 9");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 10 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 11 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 12 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 13 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 14 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 15 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	0	0	0	0");
		t.equal(rule.date(2010), 16, "The Sunday on or after May 16 2010 should be May 16");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 17 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 18 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 19 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 20 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 21 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 22 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	0	0	0	0");
		t.equal(rule.date(2010), 23, "The Sunday on or after May 23 2010 should be May 23");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	0	0	0	0");
		t.equal(rule.date(2010), 30, "The Sunday on or after May 24 2010 should be May 30");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	0	0	0	0");
		t.equal(rule.date(2010), 30, "The Sunday on or after May 25 2010 should be May 30");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	0	0	0	0");
		t.equal(rule.date(2010), 30, "The Sunday on or after May 26 2010 should be May 30");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	0	0	0	0");
		t.equal(rule.date(2010), 30, "The Sunday on or after May 27 2010 should be May 30");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	0	0	0	0");
		t.equal(rule.date(2010), 30, "The Sunday on or after May 28 2010 should be May 30");

		t.done();
	},

	"weekday after (May 2010 / Monday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	1	0	0	0");
		t.equal(rule.date(2010), 3, "The Monday on or after May 1 2010 should be May 3");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	1	0	0	0");
		t.equal(rule.date(2010), 3, "The Monday on or after May 2 2010 should be May 3");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	1	0	0	0");
		t.equal(rule.date(2010), 3, "The Monday on or after May 3 2010 should be May 3");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 4 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 5 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 6 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 7 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 8 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 9 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	1	0	0	0");
		t.equal(rule.date(2010), 10, "The Monday on or after May 10 2010 should be May 10");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 11 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 12 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 13 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 14 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 15 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 16 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	1	0	0	0");
		t.equal(rule.date(2010), 17, "The Monday on or after May 17 2010 should be May 17");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 18 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 19 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 20 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 21 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 22 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 23 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	1	0	0	0");
		t.equal(rule.date(2010), 24, "The Monday on or after May 24 2010 should be May 24");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	1	0	0	0");
		t.equal(rule.date(2010), 31, "The Monday on or after May 25 2010 should be May 31");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	1	0	0	0");
		t.equal(rule.date(2010), 31, "The Monday on or after May 26 2010 should be May 31");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	1	0	0	0");
		t.equal(rule.date(2010), 31, "The Monday on or after May 27 2010 should be May 31");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	1	0	0	0");
		t.equal(rule.date(2010), 31, "The Monday on or after May 28 2010 should be May 31");

		t.done();
	},

	"weekday after (May 2010 / Tuesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	2	0	0	0");
		t.equal(rule.date(2010), 4, "The Tuesday on or after May 1 2010 should be May 4");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	2	0	0	0");
		t.equal(rule.date(2010), 4, "The Tuesday on or after May 2 2010 should be May 4");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	2	0	0	0");
		t.equal(rule.date(2010), 4, "The Tuesday on or after May 3 2010 should be May 4");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	2	0	0	0");
		t.equal(rule.date(2010), 4, "The Tuesday on or after May 4 2010 should be May 4");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 5 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 6 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 7 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 8 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 9 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 10 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	2	0	0	0");
		t.equal(rule.date(2010), 11, "The Tuesday on or after May 11 2010 should be May 11");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 12 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 13 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 14 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 15 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 16 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 17 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	2	0	0	0");
		t.equal(rule.date(2010), 18, "The Tuesday on or after May 18 2010 should be May 18");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 19 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 20 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 21 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 22 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 23 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 24 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	2	0	0	0");
		t.equal(rule.date(2010), 25, "The Tuesday on or after May 25 2010 should be May 25");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	2	0	0	0");
		t.equal(rule.date(2010), 32, "The Tuesday on or after May 26 2010 should be Jun 1");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	2	0	0	0");
		t.equal(rule.date(2010), 32, "The Tuesday on or after May 27 2010 should be Jun 1");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	2	0	0	0");
		t.equal(rule.date(2010), 32, "The Tuesday on or after May 28 2010 should be Jun 1");

		t.done();
	},

	"weekday after (May 2010 / Wednesday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	3	0	0	0");
		t.equal(rule.date(2010), 5, "The Wednesday on or after May 1 2010 should be May 5");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	3	0	0	0");
		t.equal(rule.date(2010), 5, "The Wednesday on or after May 2 2010 should be May 5");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	3	0	0	0");
		t.equal(rule.date(2010), 5, "The Wednesday on or after May 3 2010 should be May 5");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	3	0	0	0");
		t.equal(rule.date(2010), 5, "The Wednesday on or after May 4 2010 should be May 5");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	3	0	0	0");
		t.equal(rule.date(2010), 5, "The Wednesday on or after May 5 2010 should be May 5");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 6 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 7 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 8 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 9 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 10 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 11 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	3	0	0	0");
		t.equal(rule.date(2010), 12, "The Wednesday on or after May 12 2010 should be May 12");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 13 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 14 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 15 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 16 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 17 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 18 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	3	0	0	0");
		t.equal(rule.date(2010), 19, "The Wednesday on or after May 19 2010 should be May 19");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 20 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 21 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 22 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 23 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 24 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 25 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	3	0	0	0");
		t.equal(rule.date(2010), 26, "The Wednesday on or after May 26 2010 should be May 26");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	3	0	0	0");
		t.equal(rule.date(2010), 33, "The Wednesday on or after May 27 2010 should be Jun 2");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	3	0	0	0");
		t.equal(rule.date(2010), 33, "The Wednesday on or after May 28 2010 should be Jun 2");

		t.done();
	},

	"weekday after (May 2010 / Thursday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	4	0	0	0");
		t.equal(rule.date(2010), 6, "The Thursday on or after May 1 2010 should be May 6");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	4	0	0	0");
		t.equal(rule.date(2010), 6, "The Thursday on or after May 2 2010 should be May 6");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	4	0	0	0");
		t.equal(rule.date(2010), 6, "The Thursday on or after May 3 2010 should be May 6");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	4	0	0	0");
		t.equal(rule.date(2010), 6, "The Thursday on or after May 4 2010 should be May 6");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	4	0	0	0");
		t.equal(rule.date(2010), 6, "The Thursday on or after May 5 2010 should be May 6");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	4	0	0	0");
		t.equal(rule.date(2010), 6, "The Thursday on or after May 6 2010 should be May 6");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 7 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 8 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 9 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 10 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 11 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 12 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	4	0	0	0");
		t.equal(rule.date(2010), 13, "The Thursday on or after May 13 2010 should be May 13");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 14 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 15 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 16 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 17 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 18 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 19 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	4	0	0	0");
		t.equal(rule.date(2010), 20, "The Thursday on or after May 20 2010 should be May 20");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 21 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 22 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 23 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 24 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 25 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 26 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	4	0	0	0");
		t.equal(rule.date(2010), 27, "The Thursday on or after May 27 2010 should be May 27");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	4	0	0	0");
		t.equal(rule.date(2010), 34, "The Thursday on or after May 28 2010 should be Jun 3");

		t.done();
	},

	"weekday after (May 2010 / Friday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 1 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 2 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 3 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 4 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 5 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 6 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	5	0	0	0");
		t.equal(rule.date(2010), 7, "The Friday on or after May 7 2010 should be May 7");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 8 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 9 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 10 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 11 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 12 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 13 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	5	0	0	0");
		t.equal(rule.date(2010), 14, "The Friday on or after May 14 2010 should be May 14");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 15 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 16 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 17 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 18 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 19 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 20 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	5	0	0	0");
		t.equal(rule.date(2010), 21, "The Friday on or after May 21 2010 should be May 21");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 22 2010 should be May 28");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 23 2010 should be May 28");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 24 2010 should be May 28");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 25 2010 should be May 28");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 26 2010 should be May 28");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 27 2010 should be May 28");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	5	0	0	0");
		t.equal(rule.date(2010), 28, "The Friday on or after May 28 2010 should be May 28");

		t.done();
	},

	"weekday after (May 2010 / Saturday)" : function (t) {
		var rule;

		rule = moment.tz.addRule("TEST	2008	2010	4	1	6	0	0	0");
		t.equal(rule.date(2010), 1, "The Saturday on or after May 1 2010 should be May 1");

		rule = moment.tz.addRule("TEST	2008	2010	4	2	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 2 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	3	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 3 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	4	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 4 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	5	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 5 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	6	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 6 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	7	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 7 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	8	6	0	0	0");
		t.equal(rule.date(2010), 8, "The Saturday on or after May 8 2010 should be May 8");

		rule = moment.tz.addRule("TEST	2008	2010	4	9	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 9 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	10	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 10 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	11	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 11 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	12	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 12 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	13	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 13 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	14	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 14 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	15	6	0	0	0");
		t.equal(rule.date(2010), 15, "The Saturday on or after May 15 2010 should be May 15");

		rule = moment.tz.addRule("TEST	2008	2010	4	16	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 16 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	17	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 17 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	18	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 18 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	19	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 19 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	20	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 20 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	21	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 21 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	22	6	0	0	0");
		t.equal(rule.date(2010), 22, "The Saturday on or after May 22 2010 should be May 22");

		rule = moment.tz.addRule("TEST	2008	2010	4	23	6	0	0	0");
		t.equal(rule.date(2010), 29, "The Saturday on or after May 23 2010 should be May 29");

		rule = moment.tz.addRule("TEST	2008	2010	4	24	6	0	0	0");
		t.equal(rule.date(2010), 29, "The Saturday on or after May 24 2010 should be May 29");

		rule = moment.tz.addRule("TEST	2008	2010	4	25	6	0	0	0");
		t.equal(rule.date(2010), 29, "The Saturday on or after May 25 2010 should be May 29");

		rule = moment.tz.addRule("TEST	2008	2010	4	26	6	0	0	0");
		t.equal(rule.date(2010), 29, "The Saturday on or after May 26 2010 should be May 29");

		rule = moment.tz.addRule("TEST	2008	2010	4	27	6	0	0	0");
		t.equal(rule.date(2010), 29, "The Saturday on or after May 27 2010 should be May 29");

		rule = moment.tz.addRule("TEST	2008	2010	4	28	6	0	0	0");
		t.equal(rule.date(2010), 29, "The Saturday on or after May 28 2010 should be May 29");

		t.done();
	}
};