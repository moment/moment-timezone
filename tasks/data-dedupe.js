"use strict";

function dedupe(zone) {
	var abbrs   = [],
		untils  = [],
		offsets = [],
		length  = zone.abbrs.length,
		i;

	for (i = length - 1; i >= 0; i--) {
		if (abbrs[0]   === zone.abbrs[i] &&
			offsets[0] === zone.offsets[i]) { continue;}

		untils.unshift(i === length - 1 ? Infinity : zone.untils[i + 1]);
		abbrs.unshift(zone.abbrs[i]);
		offsets.unshift(zone.offsets[i]);
	}

	return {
		name    : zone.name,
		abbrs   : abbrs,
		untils  : untils,
		offsets : offsets
	};
}

function findVersion (source) {
	var matches = source.match(/\nVERSION=\s+(\d{4}[a-z])/);

	if (matches && matches[1]) {
		return matches[1];
	}
	throw new Error("Could not find version from temp/download/latest/Makefile. It should look something like this.\n\nVERSION= 2014e");
}

module.exports = function (grunt) {
	grunt.registerTask('data-dedupe', '5. Remove duplicate entries from data-collect.', function (version) {
		version = version || 'latest';

		var zones = grunt.file.readJSON('temp/collect/' + version + '.json'),
			output = {
				version : version,
				zones : zones.map(dedupe),
				links : []
			};

		if (version === 'latest') {
			output.version = findVersion(grunt.file.read('temp/download/latest/Makefile'));
		}

		grunt.file.mkdir('data/unpacked');
		grunt.file.write('data/unpacked/' + version + '.json', JSON.stringify(output, null, 2));

		grunt.log.ok('Deduped data for ' + version);
	});
};