"use strict";

var path = require('path'),
	moment = require('moment');

module.exports = function (grunt) {
	grunt.registerTask('data-collect', '4. Collect all data from zdump(8) into a single json file.', function () {
		var files = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zdump' }, '**/*.zdump'),
			data  = [];

		files.forEach(function (file) {
			var lines   = grunt.file.read(path.join('temp/zdump', file)).split('\n'),
				abbrs   = [],
				untils  = [],
				offsets = [];

			lines.forEach(function (line) {
				var parts  = line.split(/\s+/),
					format = "MMM D HH:mm:ss YYYY",
					utc    = moment.utc(parts.slice(2, 6).join(' '), format),
					local  = moment.utc(parts.slice(9, 13).join(' '), format);

				if (parts.length < 13) { return; }

				offsets.push(Math.round(utc.diff(local, 'seconds', true)));
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

		grunt.file.mkdir('data/zdump');
		grunt.file.write('data/zdump/latest.json', JSON.stringify(data, null, 2));
	});
};
