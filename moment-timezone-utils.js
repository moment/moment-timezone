"use strict";

var BASE60 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX'.split('');

// Used to attempt to fix floating point rounding errors
var EPSILON = 0.000001;

function packBase60Fraction(fraction, precision) {
	var buffer = '.',
		output = '',
		current;

	while (precision > 0) {
		precision  -= 1;
		fraction   *= 60;
		current     = Math.floor(fraction + EPSILON);
		buffer     += BASE60[current];
		fraction   -= current;

		// Only add buffer to output once we have a non-zero value.
		// This makes '.000' output '', and '.100' output '.1'
		if (current) {
			output += buffer;
			buffer  = '';
		}
	}

	return output;
}

function packBase60(number, precision) {
	var output = '',
		absolute = Math.abs(number),
		whole = Math.floor(absolute),
		fraction = packBase60Fraction(absolute - whole, Math.min(~~precision, 10));

	while (whole > 0) {
		output = BASE60[whole % 60] + output;
		whole = Math.floor(whole / 60);
	}

	if (number < 0) {
		output = '-' + output;
	}

	if (output && fraction) {
		return output + fraction;
	}

	if (!fraction && output === '-') {
		return '0';
	}

	return output || fraction || '0';
}

module.exports = {
	packBase60 : packBase60
};
