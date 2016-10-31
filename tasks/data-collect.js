"use strict";

var path = require('path'),
	moment = require('moment'),
	populations = require('./population.json');

module.exports = function (grunt) {
<<<<<<< HEAD
	grunt.registerTask('data-collect', '4. Collect all data from zdump(8) into a single json file.', function (version) {
		version = version || 'latest';

		var files = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zdump/' + version }, '**/*.zdump'),
=======
	grunt.registerTask('data-collect', '5. Collect all data from zdump(8) into a single json file.', function (version) {
		version = version || 'latest';

		var files = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zdump/' + version }, '**/*.zdump'),
			meta 	= grunt.file.readJSON('data/meta/' + version + '.json'),
>>>>>>> origin/Country-Functionality
			data  = [];

		files.forEach(function (file) {
			var lines   = grunt.file.read(path.join('temp/zdump/' + version, file)).split('\n'),
				name    = file.replace(/\.zdump$/, ''),
				abbrs   = [],
				untils  = [],
<<<<<<< HEAD
				offsets = [];
=======
				offsets = [],
				countries = [];
>>>>>>> origin/Country-Functionality

			lines.forEach(function (line) {
				var parts  = line.split(/\s+/),
					format = "MMM D HH:mm:ss YYYY",
					utc    = moment.utc(parts.slice(2, 6).join(' '), format),
					local  = moment.utc(parts.slice(9, 13).join(' '), format);

				if (parts.length < 13) { return; }

				offsets.push(+utc.diff(local, 'minutes', true).toFixed(4));
				untils.push(+utc);
				abbrs.push(parts[13]);
			});

<<<<<<< HEAD
=======
			if (meta.zones[name]) {countries = meta.zones[name].countries;}

>>>>>>> origin/Country-Functionality
			data.push({
				name       : name,
				abbrs      : abbrs,
				untils     : untils,
				offsets    : offsets,
<<<<<<< HEAD
				population : populations[name] | 0
=======
				population : populations[name] | 0,
				countries  : countries
>>>>>>> origin/Country-Functionality
			});
		});

		grunt.file.mkdir('temp/collect');
		grunt.file.write('temp/collect/' + version + '.json', JSON.stringify(data, null, 2));

		grunt.log.ok('Collected data for ' + version);
	});
};
