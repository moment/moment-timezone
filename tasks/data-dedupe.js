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

module.exports = function (grunt) {
	grunt.registerTask('data-dedupe', '5. Remove duplicate entries from data-collect.', function (version) {
		version = version || 'latest';

		var zones = grunt.file.readJSON('temp/collect/' + version + '.json'),
			deduped = zones.map(dedupe);

		grunt.file.mkdir('data/unpacked');
		grunt.file.write('data/unpacked/' + version + '.json', JSON.stringify(deduped, null, 2));
	});
};