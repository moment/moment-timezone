"use strict";

var tz = require('../moment-timezone-utils');

module.exports = function (grunt) {
	grunt.registerTask('data-pack', '6. Pack data from data-dedupe.', function (version) {
		version = version || 'latest';

		var zones = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			packed = zones.map(function (unpacked) {
				return tz.pack(unpacked);
			});

		grunt.file.mkdir('data/packed');
		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(packed, null, '\t'));
	});
};