"use strict";

var tz = require("../../moment-timezone-utils").tz;

// A == B
// C == D == E

var ZONE_A = {
	name : "Zone/A",
	abbrs   : ["ABC", "DEF", "GHI"],
	offsets : [10, 20, 30],
	untils  : [-1000, 100, 200]
};

var ZONE_B = {
	name : "Zone/B",
	abbrs   : ["ABC", "DEF", "GHI"],
	offsets : [10, 20, 30],
	untils  : [-1000, 100, 200]
};

var ZONE_C = {
	name : "Zone/C",
	abbrs   : ["ZYX", "WVU"],
	offsets : [20, 30],
	untils  : [-3000, 900]
};

var ZONE_D = {
	name : "Zone/D",
	abbrs   : ["ZYX", "WVU"],
	offsets : [20, 30],
	untils  : [-3000, 900]
};

var ZONE_E = {
	name : "Zone/E",
	abbrs   : ["ZYX", "WVU"],
	offsets : [20, 30],
	untils  : [-3000, 900]
};

var ZONES_ABC = {
	zones : [ZONE_A, ZONE_B, ZONE_C],
	links : [],
<<<<<<< HEAD
	version : '2014abc'
=======
	version : '2014abc',
	countries : []
>>>>>>> origin/Country-Functionality
};

var ZONES_ACD = {
	zones : [ZONE_A, ZONE_C, ZONE_D],
	links : [],
<<<<<<< HEAD
	version : '2014acd'
=======
	version : '2014acd',
	countries : []
>>>>>>> origin/Country-Functionality
};

var ZONES_ADCB = {
	zones : [ZONE_A, ZONE_D, ZONE_C, ZONE_B],
	links : [],
<<<<<<< HEAD
	version : '2014adcb'
=======
	version : '2014adcb',
	countries : []
>>>>>>> origin/Country-Functionality
};

var ZONES_ABCD = {
	zones : [ZONE_A, ZONE_B, ZONE_C, ZONE_D],
	links : [],
<<<<<<< HEAD
	version : '2014abcd'
=======
	version : '2014abcd',
	countries : []
>>>>>>> origin/Country-Functionality
};

var ZONES_ABCDE = {
	zones : [ZONE_A, ZONE_B, ZONE_C, ZONE_D, ZONE_E],
	links : [],
<<<<<<< HEAD
	version : '2014abcde'
=======
	version : '2014abcde',
	countries : []
>>>>>>> origin/Country-Functionality
};


exports['create-links'] = {
	abc : function (test) {
		var actual = tz.createLinks(ZONES_ABC),
			expected = {
				zones : [ZONE_A, ZONE_C],
				links : ['Zone/A|Zone/B'],
				version : '2014abc',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to create a link between two identical zones.");
		test.done();
	},

	acd : function (test) {
		var actual = tz.createLinks(ZONES_ACD),
			expected = {
				zones : [ZONE_A, ZONE_C],
				links : ['Zone/C|Zone/D'],
				version : '2014acd',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to create a link between two identical zones.");
		test.done();
	},

	adcb : function (test) {
		var actual = tz.createLinks(ZONES_ADCB),
			expected = {
				zones : [ZONE_A, ZONE_D],
				links : ['Zone/A|Zone/B', 'Zone/D|Zone/C'],
				version : '2014adcb',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to create a link between two identical zones.");
		test.done();
	},

	abcd : function (test) {
		var actual = tz.createLinks(ZONES_ABCD),
			expected = {
				zones : [ZONE_A, ZONE_C],
				links : ['Zone/A|Zone/B', 'Zone/C|Zone/D'],
				version : '2014abcd',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to create a link between two identical zones.");
		test.done();
	},

	abcde : function (test) {
		var actual = tz.createLinks(ZONES_ABCDE),
			expected = {
				zones : [ZONE_A, ZONE_C],
				links : ['Zone/A|Zone/B', 'Zone/C|Zone/D', 'Zone/C|Zone/E'],
				version : '2014abcde',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should be able to create a link between two identical zones.");
		test.done();
	},

	'differing offsets' : function (test) {
		var A = {
				name : "Zone/A",
				abbrs   : ["ABC", "DEF", "GHI"],
				offsets : [10, 20, 30],
				untils  : [-1000, 100, 200]
			},
			B = {
				name : "Zone/B",
				abbrs   : ["ABC", "DEF", "GHI"],
				offsets : [10, 20, 40],
				untils  : [-1000, 100, 200]
			},
			AB = {
				zones : [A, B],
				links : [],
<<<<<<< HEAD
				version : '2014ab'
=======
				version : '2014ab',
				countries: []
>>>>>>> origin/Country-Functionality
			};

		var actual = tz.createLinks(AB),
			expected = {
				zones : [A, B],
				links : [],
				version : '2014ab',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should not create a link if the offsets are different.");
		test.done();
	},

	'differing untils' : function (test) {
		var A = {
				name : "Zone/A",
				abbrs   : ["ABC", "DEF", "GHI"],
				offsets : [10, 20, 30],
				untils  : [-1000, 100, 200]
			},
			B = {
				name : "Zone/B",
				abbrs   : ["ABC", "DEF", "GHI"],
				offsets : [10, 20, 30],
				untils  : [-1000, 100, 300]
			},
			AB = {
				zones : [A, B],
				links : [],
<<<<<<< HEAD
				version : '2014ab'
=======
				version : '2014ab',
				countries: []
>>>>>>> origin/Country-Functionality
			};

		var actual = tz.createLinks(AB),
			expected = {
				zones : [A, B],
				links : [],
				version : '2014ab',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should not create a link if the untils are different.");
		test.done();
	},

	'differing abbrs' : function (test) {
		var A = {
				name : "Zone/A",
				abbrs   : ["ABC", "DEF", "GHI"],
				offsets : [10, 20, 30],
				untils  : [-1000, 100, 200]
			},
			B = {
				name : "Zone/B",
				abbrs   : ["ABC", "DEF", "XYZ"],
				offsets : [10, 20, 30],
				untils  : [-1000, 100, 200]
			},
			AB = {
				zones : [A, B],
				links : [],
<<<<<<< HEAD
				version : '2014ab'
=======
				version : '2014ab',
				countries: []
>>>>>>> origin/Country-Functionality
			};

		var actual = tz.createLinks(AB),
			expected = {
				zones : [A, B],
				links : [],
				version : '2014ab',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should not create a link if the abbrs are different.");
		test.done();
	},

	'differing lengths' : function (test) {
		var A = {
				name : "Zone/A",
				abbrs   : ["ABC", "DEF", "GHI"],
				offsets : [10, 20, 30],
				untils  : [-1000, 100, 200]
			},
			B = {
				name : "Zone/B",
				abbrs   : ["ABC", "DEF", "GHI", "JKL"],
				offsets : [10, 20, 30, 40],
				untils  : [-1000, 100, 200, 300]
			},
			AB = {
				zones : [A, B],
				links : [],
<<<<<<< HEAD
				version : '2014ab'
=======
				version : '2014ab',
				countries : []
>>>>>>> origin/Country-Functionality
			};

		var actual = tz.createLinks(AB),
			expected = {
				zones : [A, B],
				links : [],
				version : '2014ab',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should not create a link if the lengths of any of the arrays are different.");
		test.done();
	},

	'retain existing links' : function (test) {
		var actual = tz.createLinks({
				zones : [ZONE_A, ZONE_B, ZONE_C],
				links : ["Test/A|Test/B", "Test/A|Test/C"],
<<<<<<< HEAD
				version : '2014abcretain'
=======
				version : '2014abcretain',
				countries : []
>>>>>>> origin/Country-Functionality
			}),
			expected = {
				zones : [ZONE_A, ZONE_C],
				links : ["Test/A|Test/B", "Test/A|Test/C", "Zone/A|Zone/B"],
				version : '2014abcretain',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(actual, expected, "Should retain existing links passed in.");
		test.done();
	},

	'make the zone with the smaller population a link' : function (test) {
		var large = {
				name       : "Zone/Large",
				abbrs      : ["ABC", "DEF", "GHI"],
				offsets    : [10, 20, 30],
				untils     : [-1000, 100, 200],
				population : 100
			},
			small = {
				name       : "Zone/Small",
				abbrs      : ["ABC", "DEF", "GHI"],
				offsets    : [10, 20, 30],
				untils     : [-1000, 100, 200],
				population : 20
			},
			largeFirst = {
				zones : [large, small],
				links : [],
<<<<<<< HEAD
				version : '2014populations'
=======
				version : '2014populations',
				countries : []
>>>>>>> origin/Country-Functionality
			},
			smallFirst = {
				zones : [small, large],
				links : [],
<<<<<<< HEAD
				version : '2014populations'
=======
				version : '2014populations',
				countries : []
>>>>>>> origin/Country-Functionality
			},
			expected = {
				zones : [large],
				links : ["Zone/Large|Zone/Small"],
				version : '2014populations',
<<<<<<< HEAD
				countries: []
=======
				countries : []
>>>>>>> origin/Country-Functionality
			};

		test.deepEqual(tz.createLinks(largeFirst), expected, "Make smaller population a link.");
		test.deepEqual(tz.createLinks(smallFirst), expected, "Make smaller population a link.");

		test.done();
	}
};
