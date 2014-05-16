"use strict";

function Year (name, year) {
	this.tests = [];
	this.name = name;
	this.year = year;
}

module.exports = Year;

Year.prototype.add = function (test) {
	this.tests.push(test);
};

// Formatting a Year should look like this.
//
// "1918" : helpers.makeTestYear("America/Los_Angeles", [
// 	["1918-03-31T09:59:59+00:00", "01:59:59", "PST", 480],
// 	["1918-03-31T10:00:00+00:00", "03:00:00", "PDT", 420],
// 	["1918-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
// 	["1918-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
// ]),

Year.prototype.format = function () {
	var o = '', i, tests = [];

	o += '\t"' + this.year + '" : helpers.makeTestYear("' + this.name + '", [';

	for (i = 0; i < this.tests.length; i++) {
		tests.push('\n\t\t' + this.tests[i].formatTest());
	}
	o += tests.join(',');

	o += '\n\t])';
	return o;
};