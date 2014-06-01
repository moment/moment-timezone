"use strict";

var path = require('path'),
	moment = require('moment');

module.exports = function (grunt) {
	grunt.registerTask('data-collect', '4. Collect all data from zdump(8) into a single json file.', function (version) {
		version = version || 'latest';

		var files = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zdump/' + version }, '**/*.zdump'),
			data  = [];

		files.forEach(function (file) {
			var lines   = grunt.file.read(path.join('temp/zdump/' + version, file)).split('\n'),
				abbrs   = [],
				untils  = [],
				offsets = [];

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

			data.push({
				name    : file.replace(/\.zdump$/, ''),
				abbrs   : abbrs,
				untils  : untils,
				offsets : offsets
			});
		});

		grunt.file.mkdir('temp/collect');
		grunt.file.write('temp/collect/' + version + '.json', JSON.stringify(data, null, 2));
	});
};
