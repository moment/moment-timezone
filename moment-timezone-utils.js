"use strict";

var BASE60 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX'.split('');

function packBase60(number) {
	var output = '',
		nextNumber;

	if (number < 0) {
		number = -number;
		output = '-';
	}

	while (number > 0) {
		nextNumber = Math.floor(number / 60);
		output = BASE60[(number - (60 * nextNumber))] + output;
		number = nextNumber;
	}
	return output || '0';
}

module.exports = {
	packBase60 : packBase60
};
