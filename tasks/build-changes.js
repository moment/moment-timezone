"use strict";

var allZones = require('./helpers/all-zones');

module.exports = function (grunt) {
	grunt.registerTask('build-changes', 'Build offset changes for each timezone using zdump(8).', function () {
		var done = this.async();

		allZones(function (all) {
			var data = all.map(function (zone) {
				return zone.renderChanges();
			});

			grunt.file.write('data/packed/latest.json', JSON.stringify(data, null, '\t'));

			done();
		});
	});
};
