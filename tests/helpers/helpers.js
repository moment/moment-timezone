"use strict";

var moment = require('../../index');

function testYear(test, name, expected) {
	var len = expected.length,
		i,
		date, time, abbr, offset, m;

	test.expect(len * 3);

	for (i = 0; i < len; i++) {
		date   = expected[i][0];
		time   = expected[i][1];
		abbr   = expected[i][2];
		offset = expected[i][3];
		m      = moment(date).tz(name);
		test.equal(m.format("HH:mm:ss"), time, date + ' should be ' + time + ' ' + abbr);
		test.equal(m.utcOffset(), -offset, date + ' should be ' + offset + ' minutes offset in ' + abbr);
		test.equal(m.zoneAbbr(), abbr, date + ' should be ' + abbr);
	}

	test.done();
}

module.exports = {
	makeTestYear : function (name, expected) {
		return function (test) {
			testYear(test, name, expected);
		};
	}
};
