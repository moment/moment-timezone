"use strict";

var tz = require("../../moment-timezone-utils").tz;

function unpacked () {
	return {
		name : "Some/Zone_Name",
		abbrs   : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
		offsets : [ 60, 120, 180, 240, 300, 360, 420, 480, 540, 600],
		untils  : [
			Date.UTC(1900, 0, 1),
			Date.UTC(1900, 6, 15),
			Date.UTC(2000, 0, 1),
			Date.UTC(2000, 6, 15),
			Date.UTC(2001, 0, 1),
			Date.UTC(2001, 6, 15),
			Date.UTC(2001, 8, 1),
			Date.UTC(2002, 0, 1),
			Date.UTC(2005, 0, 1),
			null
		]
	};
}

exports['filter-years'] = {
	'filter 1970-2038' : function (test) {
		var actual = tz.filterYears(unpacked(), 1970, 2038),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["C", "D", "E", "F", "G", "H", "I", "J"],
				offsets : [180, 240, 300, 360, 420, 480, 540, 600],
				untils  : [
					Date.UTC(2000, 0, 1),
					Date.UTC(2000, 6, 15),
					Date.UTC(2001, 0, 1),
					Date.UTC(2001, 6, 15),
					Date.UTC(2001, 8, 1),
					Date.UTC(2002, 0, 1),
					Date.UTC(2005, 0, 1),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to filter out years outside the 1970-2038 range");

		test.done();
	},

	'filter 2000-2038' : function (test) {
		var actual = tz.filterYears(unpacked(), 2000, 2038),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["C", "D", "E", "F", "G", "H", "I", "J"],
				offsets : [180, 240, 300, 360, 420, 480, 540, 600],
				untils  : [
					Date.UTC(2000, 0, 1),
					Date.UTC(2000, 6, 15),
					Date.UTC(2001, 0, 1),
					Date.UTC(2001, 6, 15),
					Date.UTC(2001, 8, 1),
					Date.UTC(2002, 0, 1),
					Date.UTC(2005, 0, 1),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to filter out years outside the 2000-2038 range");

		test.done();
	},

	'filter 2001-2038' : function (test) {
		var actual = tz.filterYears(unpacked(), 2001, 2038),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["E", "F", "G", "H", "I", "J"],
				offsets : [300, 360, 420, 480, 540, 600],
				untils  : [
					Date.UTC(2001, 0, 1),
					Date.UTC(2001, 6, 15),
					Date.UTC(2001, 8, 1),
					Date.UTC(2002, 0, 1),
					Date.UTC(2005, 0, 1),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to filter out years outside the 2001-2038 range");

		test.done();
	},

	'filter 2000-2001' : function (test) {
		var actual = tz.filterYears(unpacked(), 2000, 2001),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["C", "D", "E", "F", "G", "H"],
				offsets : [180, 240, 300, 360, 420, 480],
				untils  : [
					Date.UTC(2000, 0, 1),
					Date.UTC(2000, 6, 15),
					Date.UTC(2001, 0, 1),
					Date.UTC(2001, 6, 15),
					Date.UTC(2001, 8, 1),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to filter out years outside the 2000-2001 range");

		test.done();
	},

	'filter 2001-2000' : function (test) {
		var actual = tz.filterYears(unpacked(), 2001, 2000),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["C", "D", "E", "F", "G", "H"],
				offsets : [180, 240, 300, 360, 420, 480],
				untils  : [
					Date.UTC(2000, 0, 1),
					Date.UTC(2000, 6, 15),
					Date.UTC(2001, 0, 1),
					Date.UTC(2001, 6, 15),
					Date.UTC(2001, 8, 1),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to handle the years passed in as end, start instead of start, end");

		test.done();
	},

	'filter 2000' : function (test) {
		var actual = tz.filterYears(unpacked(), 2000),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["C", "D", "E"],
				offsets : [180, 240, 300],
				untils  : [
					Date.UTC(2000, 0, 1),
					Date.UTC(2000, 6, 15),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to use the same start and end year if only one year was passed in");

		test.done();
	},

	'filter 2001-2005' : function (test) {
		var actual = tz.filterYears(unpacked(), 2001, 2005),
			expected = {
				name : "Some/Zone_Name",
				abbrs   : ["E", "F", "G", "H", "I", "J"],
				offsets : [300, 360, 420, 480, 540, 600],
				untils  : [
					Date.UTC(2001, 0, 1),
					Date.UTC(2001, 6, 15),
					Date.UTC(2001, 8, 1),
					Date.UTC(2002, 0, 1),
					Date.UTC(2005, 0, 1),
					null
				],
<<<<<<< HEAD
				population: undefined,
				countries: undefined
=======
				population: undefined
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to filter out years outside the 2000-2005 range");

		test.done();
	}
};
