"use strict";

var tz = require('../moment-timezone-utils').tz,
	guesses = require('./data-guesses.json');

module.exports = function (grunt) {
	grunt.registerTask('data-guesses', '8. Add guesses to packed data.', function (version) {
		version = version || 'latest';

		var packed = grunt.file.readJSON('data/packed/' + version + '.json');

		packed.guesses = guesses;

		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(packed, null, '\t'));

		grunt.log.ok('Added guesses for ' + version);
	});
};
