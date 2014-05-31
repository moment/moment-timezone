"use strict";


//////////////////
// Pack Base 60 //
//////////////////

var BASE60 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX',
	EPSILON = 0.000001; // Used to fix floating point rounding errors

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

//////////
// Pack //
//////////

function packUntils(untils) {
	var out = [],
		last = 0,
		i;

	for (i = 0; i < untils.length - 1; i++) {
		out[i] = packBase60(Math.round((untils[i] - last) / 1000) / 60, 1);
		last = untils[i];
	}

	return out.join(' ');
}

function packAbbrsAndOffsets(source) {
	var index = 0,
		abbrs = [],
		offsets = [],
		indices = [],
		map = {},
		i, key;

	for (i = 0; i < source.abbrs.length; i++) {
		key = source.abbrs[i] + '|' + source.offsets[i];
		if (map[key] === undefined) {
			map[key] = index;
			abbrs[index] = source.abbrs[i];
			offsets[index] = packBase60(Math.round(source.offsets[i] * 60) / 60, 1);
			index++;
		}
		indices[i] = packBase60(map[key], 0);
	}

	return abbrs.join(' ') + '|' + offsets.join(' ') + '|' + indices.join('');
}

function validatePackData (source) {
	if (!source.name)    { throw new Error("Missing name"); }
	if (!source.abbrs)   { throw new Error("Missing abbrs"); }
	if (!source.untils)  { throw new Error("Missing untils"); }
	if (!source.offsets) { throw new Error("Missing offsets"); }
	if (
		source.offsets.length !== source.untils.length ||
		source.offsets.length !== source.abbrs.length
	) {
		throw new Error("Mismatched array lengths");
	}
}

function pack (source) {
	validatePackData(source);
	return source.name + '|' + packAbbrsAndOffsets(source) + '|' + packUntils(source.untils);
}

module.exports = {
	packBase60 : packBase60,
	pack       : pack
};
