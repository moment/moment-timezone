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

		var format = "MMM D HH:mm:ss YYYY";

		files.forEach(function (file) {
			var lines   = grunt.file.read(path.join('temp/zdump/' + version, file)).split('\n'),
				name    = file.replace(/\.zdump$/, ''),
				abbrs   = [],
				untils  = [],
				offsets = [],
				isdsts = [],
				countries = [];

			lines.forEach(function (line) {
				var parts  = line.split(/\s+/),
					utc    = moment.utc(parts.slice(2, 6).join(' '), format),
					local  = moment.utc(parts.slice(9, 13).join(' '), format);

				if (line.search('failed') !== -1) { return; }
				if (parts.length < 13) { return; }

				offsets.push(+utc.diff(local, 'minutes', true).toFixed(4));
				untils.push(+utc);
				abbrs.push(parts[13]);

				const index = parts.findIndex(element => element.includes("isdst"));
				if (index !== -1) {
					isdsts.push(parseInt(parts[index].split("=")[1]));
				}
			});

			if (offsets.length === 0 && lines.length === 3 && lines[2].length === 0) {
				// use alternate zdump format
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
				countries  : countries,
				isdsts: isdsts
			});
		});

		grunt.file.write('temp/collect/' + version + '.json', JSON.stringify(data, null, 2));

		grunt.log.ok('Collected data for ' + version);
	});
};