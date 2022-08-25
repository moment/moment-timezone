"use strict";

var tz = require('../moment-timezone-utils').tz,
    groupLeaders = require('./group-leaders.json');

module.exports = function (grunt) {
	grunt.registerTask('data-pack', '7. Pack data from data-dedupe.', function (version) {
		version = version || 'latest';

		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			output = tz.createLinks(unpacked, groupLeaders);

		output.zones = output.zones.map(function (unpacked) {
			return tz.pack(unpacked);
		});

		output.countries = unpacked.countries.map(function (unpacked) {
			return tz.packCountry(unpacked);
		});

		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Packed data for ' + version);
	});
};
