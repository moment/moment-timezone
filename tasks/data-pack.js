"use strict";

var tz = require('../moment-timezone-utils').tz;

module.exports = function (grunt) {
	grunt.registerTask('data-pack', '6. Pack data from data-dedupe.', function (version) {
		version = version || 'latest';

		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			output = tz.createLinks(unpacked);

		output.zones = output.zones.map(function (unpacked) {
			return tz.pack(unpacked);
		});

		grunt.file.mkdir('data/packed');
		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Packed data for ' + version);
	});
};