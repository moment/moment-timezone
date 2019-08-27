"use strict";

var moment = require('../../index');
var getTimezoneOffset = Date.prototype.getTimezoneOffset;
var toTimeString = Date.prototype.toTimeString;
var parent = (typeof window !== 'undefined' && window) || (typeof global !== 'undefined' && global);
var oldIntl = parent.Intl;

function getUTCOffset (m) {
	if (m.utcOffset !== undefined) {
		return m.utcOffset();
	} else {
		return -m.zone();
	}
}

/**
 * Runs tests for a specific year
 */
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
		return zone.utcOffset(+this);
	};
}

function mockToTimeString(name, format) {
	Date.prototype.toTimeString = function () {
		return moment.tz(+this, name).format(format || 'HH:mm:ss [GMT]ZZ');
	};
}

/**
 * Returns a guess result for a time zone {name}
 * Is used go generate guess tests and also in guess tests
 */
function getGuessResult(name, mock) {
	var result;
	parent.Intl = undefined;

	if (mock.offset) {
		mockTimezoneOffset(name);
		mockToTimeString(name);
		result = moment.tz.guess(true);
	}
	else if (mock.abbr) {
		mockTimezoneOffset(name);
		mockToTimeString(name, 'HH:mm:ss [GMT]ZZ (z)');
		result = moment.tz.guess(true);
	}
	else {
		throw new Error("Please specify offset or abbr");
	}

	Date.prototype.getTimezoneOffset = getTimezoneOffset;
	Date.prototype.toTimeString = toTimeString;
	parent.Intl = oldIntl;
	return result;
}

/**
 * Runs guess test:
 * checks that guess result is equal to expectedResult
 */
function testGuess(test, name, testSettings) {
	var expectedResult = testSettings.expect || name;
	if (testSettings.offset) {
		var offsetGuess = getGuessResult(name, { offset: true });
		test.equal(offsetGuess, expectedResult);
	}
	if (testSettings.abbr) {
		var abbrGuess = getGuessResult(name, { abbr: true });
		test.equal(abbrGuess, expectedResult);
	}
	test.done();
}

module.exports = {
	makeTestYear : function (name, expected) {
		return function (test) {
			testYear(test, name, expected);
		};
	},

	makeTestGuess : function (name, guessTestSettings) {
		return function (test) {
			testGuess(test, name, guessTestSettings);
		};
	},

	getUTCOffset : getUTCOffset,
	getGuessResult: getGuessResult
};
