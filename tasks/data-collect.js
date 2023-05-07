"use strict";

var path = require('path'),
	moment = require('moment'),
	populations = require('./population.json');

module.exports = function (grunt) {
	grunt.registerTask('data-collect', '5. Collect all data from zdump(8) into a single json file.', function (version) {
		version = version || 'latest';

		var files = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zdump/' + version }, '**/*.zdump'),
			meta 	= grunt.file.readJSON('data/meta/' + version + '.json'),
			data  = [];

		var format = "MMM D HH:mm:ss YYYY",
			invalidLine = /failed|-2147481748|2147485547/;

		files.forEach(function (file) {
			var lines   = grunt.file.read(path.join('temp/zdump/' + version, file)).split('\n'),
				name    = file.replace(/\.zdump$/, ''),
				abbrs   = [],
				untils  = [],
				offsets = [],
				countries = [];

			lines.forEach(function (line) {
				// Skip any lines that don't match the expected format.
				// 64-bit `zdump` with the `-v` flag can produce lines outside Moment's parseable date range:
				//
				// Etc/GMT-2  -9223372036854775808 = NULL
				// Etc/GMT-2  -67768040609748001 (gmtime failed) = -67768040609748001 (localtime failed)
				// Etc/GMT-2  -67768040609748000 (gmtime failed) = Thu Jan  1 00:00:00 -2147481748 +02 isdst=0 gmtoff=7200
				// Etc/GMT-2  Thu Jan  1 00:00:00 -2147481748 UT = Thu Jan  1 02:00:00 -2147481748 +02 isdst=0 gmtoff=7200
				var parts  = line.split(/\s+/);
				if (invalidLine.test(line) || parts.length < 13) {
					return;
				}

				var utc    = moment.utc(parts.slice(2, 6).join(' '), format),
					local  = moment.utc(parts.slice(9, 13).join(' '), format);

				offsets.push(+utc.diff(local, 'minutes', true).toFixed(4));
				untils.push(+utc);
				abbrs.push(parts[13]);
			});

			if (offsets.length === 0 && lines.length === 3 && lines[2].length === 0) {
				// Use alternate `zdump` format when a fixed-offset zone has no transitions.
				// The data-zdump task will instead generate the current timestamp for UTC and the zone,
				// with the difference between them being used as the offset:
				//
				// UTC        Sun May  7 06:17:50 2023 UTC
				// Etc/GMT-2  Sun May  7 08:17:50 2023 +02
				var utcParts   = lines[0].split(/\s+/),
				    localParts = lines[1].split(/\s+/);

				var utc   = moment.utc(utcParts.slice(2, 6).join(' '), format),
				    local = moment.utc(localParts.slice(2, 6).join(' '), format);

				offsets.push(+utc.diff(local, 'minutes', true).toFixed(4));
				untils.push(null);
				abbrs.push(localParts[6]);
			}

			if (meta.zones[name]) {
				countries = meta.zones[name].countries;
			}

			data.push({
				name       : name,
				abbrs      : abbrs,
				untils     : untils,
				offsets    : offsets,
				population : populations[name] | 0,
				countries  : countries
			});
		});

		grunt.file.write('temp/collect/' + version + '.json', JSON.stringify(data, null, 2));

		grunt.log.ok('Collected data for ' + version);
	});
};
