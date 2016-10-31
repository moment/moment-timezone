"use strict";

var tz = require('../moment-timezone-utils').tz;

module.exports = function (grunt) {
<<<<<<< HEAD
	grunt.registerTask('data-pack', '8. Pack data from data-country.', function (version) {
		version = version || 'latest';

		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			output = tz.packCountries(unpacked);
=======
	grunt.registerTask('data-pack', '7. Pack data from data-dedupe.', function (version) {
		version = version || 'latest';

		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			output = tz.createLinks(unpacked);
>>>>>>> origin/Country-Functionality

		output.zones = output.zones.map(function (unpacked) {
			return tz.pack(unpacked);
		});

<<<<<<< HEAD
=======
		output.countries = output.countries.map(function (unpacked) {
			return tz.packCountry(unpacked);
		});

>>>>>>> origin/Country-Functionality
		grunt.file.mkdir('data/packed');
		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Packed data for ' + version);
	});
};