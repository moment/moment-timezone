"use strict";

var moment = require('../../index');
var getTimezoneOffset = Date.prototype.getTimezoneOffset;
var toTimeString = Date.prototype.toTimeString;

function getUTCOffset (m) {
	if (m.utcOffset !== undefined) {
		return m.utcOffset();
	} else {
		return -m.zone();
	}
}

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
		test.equal(getUTCOffset(m), -offset, date + ' should be ' + offset + ' minutes offset in ' + abbr);
		test.equal(m.zoneAbbr(), abbr, date + ' should be ' + abbr);
	}

	test.done();
}

function mockTimezoneOffset(name) {
	var zone = moment.tz.zone(name);
	Date.prototype.getTimezoneOffset = function () {
		return zone.offset(+this);
	};
}

function mockToTimeString(name, format) {
	Date.prototype.toTimeString = function () {
		return moment.tz(+this, name).format(format || 'HH:mm:ss [GMT]ZZ');
	};
}

function testGuess(test, name, mostPopulatedFor) {
	if (mostPopulatedFor.offset) {
		mockTimezoneOffset(name);
		mockToTimeString(name);
		test.equal(moment.tz.guess(true), name);
	}

	if (mostPopulatedFor.abbr) {
		mockTimezoneOffset(name);
		mockToTimeString(name, 'HH:mm:ss [GMT]ZZ (z)');
		test.equal(moment.tz.guess(true), name);
	}

	Date.prototype.getTimezoneOffset = getTimezoneOffset;
	Date.prototype.toTimeString = toTimeString;
	test.done();
}

module.exports = {
	makeTestYear : function (name, expected) {
		return function (test) {
			testYear(test, name, expected);
		};
	},

	makeTestGuess : function (name, mostPopulatedFor) {
		return function (test) {
			testGuess(test, name, mostPopulatedFor);
		};
	},

	getUTCOffset : getUTCOffset
};
