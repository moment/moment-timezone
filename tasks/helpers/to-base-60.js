"use strict";

var BASE60 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX'.split('');

function unsignedToBase60(number) {
	var output = '',
		nextNumber;

	while (number > 0) {
		nextNumber = Math.floor(number / 60);
		output = BASE60[(number - (60 * nextNumber))] + output;
		number = nextNumber;
	}
	return output || '0';
}

function signedToBase60(num) {
	num = +num;
	return num < 0 ? '-' + unsignedToBase60(-num) : unsignedToBase60(num);
}

module.exports = signedToBase60;
