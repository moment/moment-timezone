var path = require('path'),
	moment = require("../moment-timezone");

/******************************
	Helpers
******************************/

function dayOfWeek (week) {
	return moment().day(week).format("dddd");
}

function count (number) {
	return ["first", "second", "third", "fourth"][~~number];
}

/******************************
	Weekday After
******************************/

function weekdayAfterSingle (dow, month, array) {
	var i,
		o = '',
		rule,
		target,
		format,
		formatMonth,
		firstDowOfMonth = moment([2010, month, 1]).day();

	o += '\t"weekday after (' + moment([2010, month]).format("MMMM YYYY") + ' / ' + dayOfWeek(dow) + ')" : function (t) {\n';
	o += '\t\tvar rule;\n';

	for (i = 1; i < 29; i++) {
		o += '\n\t\trule = moment.tz.addRule("TEST\t2008\t2010\t';
		o += [month, i, dow].join('\t');
		o += '\t0\t0\t0");\n';

		target = dow + 1 - firstDowOfMonth;
		while (target < i) {
			target += 7;
		}

		format = moment([2010, month, target]).format("MMM D");
		formatMonth = moment([2010, month, i]).format("MMM D YYYY");

		o += '\t\tt.equal(rule.date(2010), ' + target + ', "The ' + dayOfWeek(dow);
		o += ' on or after ' + formatMonth + ' should be ' + format + '");\n';
	}

	o += '\n\t\tt.done();';
	o += '\n\t}';

	array.push(o);
}

function weekdayAfter (month, array) {
	var i;
	for (i = 0; i < 7; i++) {
		weekdayAfterSingle(i, month, array);
	}
}

/******************************
	Last Weekday
******************************/

function lastWeekday (dow, month, array) {
	var i,
		o = '',
		rule,
		target,
		format,
		formatMonth,
		daysInMonth = moment([2010, month]).daysInMonth();

	o += '\t"last weekday (' + moment([2010, month]).format("MMMM YYYY") + ' / ' + dayOfWeek(dow) + ')" : function (t) {\n';
	o += '\t\tvar rule;\n';

	for (i = 0; i < 28; i++) {
		o += '\n\t\trule = moment.tz.addRule("TEST\t2008\t2010\t';
		o += [month, i].join('\t');
		o += '\t8\t0\t0\t0");\n';

		target = daysInMonth - (dow) + (i % 7);
		target -= ~~(i / 7) * 7;
		if (i % 7 > dow) {
			target -= 7;
		}

		format = moment([2010, month, target]).format("MMMM D YYYY");
		formatMonth = moment([2010, month, target]).format("MMMM");

		o += "\t\tt.equal(rule.date(2010), " + target + ', "The ' + count(i / 7) + ' from last ';
		o += dayOfWeek(i) + " in " + formatMonth + " should be " + format + '");\n';
	}

	o += '\n\t\tt.done();';
	o += '\n\t}';

	array.push(o);
}


/******************************
	Save File
******************************/

function makefile (filename, array, grunt) {
	var o = '',
		file = path.join(process.cwd(), "tests/core/" + filename + '.js');

	o += 'var moment = require("../../index");\n\n';
	o += 'exports["' + filename + '"] = {\n\n';
	o += array.join(',\n\n');
	o += '\n};';

	grunt.file.write(file, o);
	grunt.log.writeln("[] ".green + file);
}

/******************************
	Grunt task
******************************/

module.exports = function (grunt) {
	grunt.registerTask('after-last', 'Generate unit tests for "weekday after" and "last weekday".', function () {
		var after = [],
			last = [];

		weekdayAfter(7, after);
		weekdayAfter(2, after);
		weekdayAfter(5, after);
		weekdayAfter(8, after);
		weekdayAfter(6, after);
		weekdayAfter(9, after);
		weekdayAfter(4, after);

		lastWeekday(0, 0, last);
		lastWeekday(1, 4, last);
		lastWeekday(2, 7, last);
		lastWeekday(3, 2, last);
		lastWeekday(4, 8, last);
		lastWeekday(5, 3, last);
		lastWeekday(6, 6, last);

		makefile('weekday-after', after, grunt);
		makefile('last-weekday', last, grunt);
	});
};
