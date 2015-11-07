"use strict";

var path = require('path'),
	moment = require('moment'),
	guesses = require('./guesses.json');

module.exports = function (grunt) {
	grunt.registerTask('data-collect', '4. Collect all data from zdump(8) into a single json file.', function (version) {
		version = version || 'latest';

		var files = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zdump/' + version }, '**/*.zdump'),
			data  = [];

		files.forEach(function (file) {
			var lines   = grunt.file.read(path.join('temp/zdump/' + version, file)).split('\n'),
				name    = file.replace(/\.zdump$/, ''),
				abbrs   = [],
				untils  = [],
				offsets = [],
				guess   = 0;

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

			if (guesses.uniqueInOffset.indexOf(name) > -1) {
				guess |= 1;
			}

			if (guesses.uniqueInOffsetAndAbbr.indexOf(name) > -1) {
				guess |= 2;
			}

			data.push({
				name    : name,
				abbrs   : abbrs,
				untils  : untils,
				offsets : offsets,
				guess   : guess
			});
		});

		grunt.file.mkdir('temp/collect');
		grunt.file.write('temp/collect/' + version + '.json', JSON.stringify(data, null, 2));

		grunt.log.ok('Collected data for ' + version);
	});
};
