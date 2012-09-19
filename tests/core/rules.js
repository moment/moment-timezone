var TZ = require("../../moment-timezone"),
	moment = require("moment");

function dayOfWeek (week) {
	return moment().day(week).format("dddd");
}

function count (number) {
	return ["first", "second", "third", "fourth"][~~number];
}

function dateForYearFirst (dow, month, test) {
	var i,
		rule,
		target,
		format,
		formatMonth;

	test.expect(28);

	for (i = 0; i < 28; i++) {
		rule = TZ.addRule("TEST,2008,2010," + month +  ",f:" + i + ",2:00,1:00,D");
		target = i + 1 - dow;
		if (i % 7 < dow) {
			target += 7;
		}

		format = moment([2010, month, target]).format("MMMM D YYYY");
		formatMonth = moment([2010, month, target]).format("MMMM");

		test.equal(rule._dateForYear(2010), target, "The " + count(i / 7) + ' ' + dayOfWeek(i) + " in " + formatMonth + " should be " +format);
	}

	test.done();
}

function dateForYearLast (dow, month, test) {
	var i,
		rule,
		target,
		format,
		formatMonth,
		daysInMonth = moment([2010, month]).daysInMonth();

	test.expect(28);

	for (i = 0; i < 28; i++) {
		rule = TZ.addRule("TEST,2010,2010," + month +  ",l:" + i + ",2:00,1:00,D");
		target = daysInMonth - (dow) + (i % 7);
		target -= ~~(i / 7) * 7;
		if (i % 7 > dow) {
			target -= 7;
		}

		format = moment([2010, month, target]).format("MMMM D YYYY");
		formatMonth = moment([2010, month, target]).format("MMMM");

		test.equal(rule._dateForYear(2010), target, "The " + count(i / 7) + ' from last ' + dayOfWeek(i) + " in " + formatMonth + " should be " + format);
	}

	test.done();
}

exports.rules = {
	"setUp" : function (cb) {
		cb();
	},

	"contains year" : function (test) {
		test.expect(3);

		var exact = TZ.addRule("TEST,2008,2010,2,e:1,2:00,1:00,D");

		test.ok(exact.contains(moment([2010, 2])), "Rule should contain year");
		test.ok(!exact.contains(moment([2007, 2])), "Rule should not contain year too low");
		test.ok(!exact.contains(moment([2011, 2])), "Rule should not contain year too high");

		test.done();
	},

	"contains month" : function (test) {
		test.expect(3);

		var exact = TZ.addRule("TEST,2008,2010,2,e:1,2:00,1:00,D");

		test.ok(exact.contains(moment([2010, 2])), "Rule should contain month");
		test.ok(exact.contains(moment([2010, 1])), "Rule should contain if month too low but rule applied last year");
		test.ok(!exact.contains(moment([2008, 1])), "Rule should not contain if month is too low");

		test.done();
	},

	"contains date equal" : function (test) {
		test.expect(3);

		var exact = TZ.addRule("TEST,2008,2010,2,e:2,2:00,1:00,D");

		test.ok(exact.contains(moment([2010, 2, 2])), "Rule should contain date");
		test.ok(exact.contains(moment([2010, 2, 1])), "Rule should contain if date too low but rule applied last year");
		test.ok(!exact.contains(moment([2008, 2, 1])), "Rule should not contain if date is too low");

		test.done();
	},

	"_dateForYear First (Sunday)" : function (test) {
		dateForYearFirst(0, 7, test); // in august 2010, the month starts with sunday
	},

	"_dateForYear First (Monday)" : function (test) {
		dateForYearFirst(1, 2, test); // in march 2010, the month starts with monday
	},

	"_dateForYear First (Tuesday)" : function (test) {
		dateForYearFirst(2, 5, test); // in june 2010, the month starts with tuesday
	},

	"_dateForYear First (Wednesday)" : function (test) {
		dateForYearFirst(3, 8, test); // in september 2010, the month starts with wednesday
	},

	"_dateForYear First (Thursday)" : function (test) {
		dateForYearFirst(4, 6, test); // in july 2010, the month starts with thursday
	},

	"_dateForYear First (Friday)" : function (test) {
		dateForYearFirst(5, 9, test); // in october 2010, the month starts with friday
	},

	"_dateForYear First (Saturday)" : function (test) {
		dateForYearFirst(6, 4, test); // in may 2010, the month starts with saturday
	},

	/************************************
		Last day of month
	************************************/

	"_dateForYear Last (Sunday)" : function (test) {
		dateForYearLast(0, 0, test); // in january 2010, the month ends with sunday
	},

	"_dateForYear Last (Monday)" : function (test) {
		dateForYearLast(1, 4, test); // in may 2010, the month ends with monday
	},

	"_dateForYear Last (Tuesday)" : function (test) {
		dateForYearLast(2, 7, test); // in august 2010, the month ends with tuesday
	},

	"_dateForYear Last (Wednesday)" : function (test) {
		dateForYearLast(3, 2, test); // in march 2010, the month ends with wednesday
	},

	"_dateForYear Last (Thursday)" : function (test) {
		dateForYearLast(4, 8, test); // in september 2010, the month ends with thursday
	},

	"_dateForYear Last (Friday)" : function (test) {
		dateForYearLast(5, 3, test); // in april 2010, the month ends with friday
	},

	"_dateForYear Last (Saturday)" : function (test) {
		dateForYearLast(6, 6, test); // in july 2010, the month ends with saturday
	}
};
