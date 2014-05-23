"use strict";

var path = require('path'),
	allZones = require('./helpers/all-zones');

module.exports = function (grunt) {
	grunt.registerTask('build-tests', 'Build tests for each timezone using zdump(8).', function () {
		var done = this.async();

		allZones(function (all) {
			all.forEach(function (zone) {
				var filename = path.resolve("tests/zones/" + zone.name.toLowerCase() + '.js');
				grunt.file.write(filename, zone.renderTests());
				console.log('Built tests/' + zone.name.toLowerCase() + '.js');
			});

			done();
		});
	});
};
