"use strict";

var tz = require('../moment-timezone-utils').tz,
    groupLeaders = require('./group-leaders.json'),
	localAbbrs = require('./local-abbrs.json');

module.exports = function (grunt) {
	grunt.registerTask('data-pack', '7. Pack data from data-dedupe.', function (version) {
		version = version || 'latest';

		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			output = tz.createLinks(unpacked, groupLeaders);

		output.zones = output.zones.map(function (unpacked) {
			// assign local abbrs which are widely used
			// add them in brackets like +03:00(EEST)
			unpacked.abbrs = unpacked.abbrs.map(function (abbr) {
				if (localAbbrs[unpacked.name] && localAbbrs[unpacked.name][abbr]) {
					return abbr + '(' + localAbbrs[unpacked.name][abbr] + ')';
				}
				return abbr;
			});

			return tz.pack(unpacked);
		});

		output.countries = unpacked.countries.map(function (unpacked) {
			return tz.packCountry(unpacked);
		});

		grunt.file.mkdir('data/packed');
		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Packed data for ' + version);
	});
};
