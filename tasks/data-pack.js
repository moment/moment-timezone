"use strict";

var tz = require('../moment-timezone-utils');

module.exports = function (grunt) {
	grunt.registerTask('data-pack', '6. Pack data from data-dedupe.', function () {
		var zones = grunt.file.readJSON('data/unpacked/latest.json'),
			packed = zones.map(function (unpacked) {
				return tz.pack(unpacked);
			});

		grunt.file.mkdir('data/packed');
		grunt.file.write('data/packed/latest.json', JSON.stringify(packed, null, '\t'));
	});
};