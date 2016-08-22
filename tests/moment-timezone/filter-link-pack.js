"use strict";

var tz = require("../../moment-timezone-utils").tz;

var DATA = {
	version : 'test-filter-link-pack',
	zones : [
		{
			name : "Some/Zone_A",
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
		},
		{
			name : "Some/Zone_B",
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
			],
			countries : []
		},
	],
	links : ['Some/Zone_C|Some/Zone_D']
};

exports['filter-link-pack'] = {
	'filter-link-pack' : function (test) {
		var actual = tz.filterLinkPack(DATA, 2000, 2001),
			expected = {
				version : 'test-filter-link-pack',
				zones   : ['Some/Zone_A|C D E F G H|30 40 50 60 70 80|012345|1d2M0 1io0 1800 1i00 jc0||'],
				links   : ['Some/Zone_A|Some/Zone_B', 'Some/Zone_C|Some/Zone_D' ],
				countries: []
			};

		test.deepEqual(actual, expected, "Should be able to take a unpacked data source, then filter years, create links, and pack data");
		test.done();
	}
};
