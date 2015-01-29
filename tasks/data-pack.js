"use strict";

var tz = require('../moment-timezone-utils').tz;

module.exports = function (grunt) {
	grunt.registerTask('data-pack', '7. Pack data from data-dedupe.', function (version) {
		version = version || 'latest';

		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json'),
			countries = unpacked.countries,
			packedCountries = [],
			output = tz.createLinks(unpacked);

		output.zones = output.zones.map(function (unpacked) {
			return tz.pack(unpacked);
		});

		for(var i=0; i < countries.length; i++) {
			var unpackedCountry = countries[i];
			var packedCountry = tz.packCountry(unpackedCountry);
			packedCountries.push(packedCountry);
		}

		output.countries = packedCountries;

		grunt.file.mkdir('data/packed');
		grunt.file.write('data/packed/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Packed country and zone data for ' + version);
	});
};