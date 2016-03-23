"use strict";

function dedupe(zone) {
	const { name, population } = zone;
	const abbrs   = [];
	const untils  = [];
	const offsets = [];

	for (let length = zone.abbrs.length, i = length - 1; i >= 0; i--) {
		if (abbrs[0] === zone.abbrs[i] && offsets[0] === zone.offsets[i]) { continue; }

		untils.unshift(i === length - 1 ? Infinity : zone.untils[i + 1]);
		abbrs.unshift(zone.abbrs[i]);
		offsets.unshift(zone.offsets[i]);
	}

	return { name, abbrs, untils, offsets, population };
}

function findVersion (source) {
	const matches = source.match(/\nVERSION=\s+(\d{4}[a-z])/);
	if (matches && matches[1]) {
		return matches[1];
	}
	throw new Error("Could not find version from temp/download/latest/Makefile. It should look something like this.\n\nVERSION= 2014e");
}

export default grunt => {
	const { readJSON, read, mkdir, write } = grunt.file;

	grunt.registerTask('data-dedupe', '5. Remove duplicate entries from data-collect.', (version = 'latest') => {
		const zones = readJSON(`temp/collect/${ version }.json`).map(dedupe);
		const output = { version, zones, links: [] };

		if (version === 'latest') {
			output.version = findVersion(read('temp/download/latest/Makefile'));
		}

		mkdir('data/unpacked');
		write(`data/unpacked/${ version }.json`, JSON.stringify(output, null, 2));

		grunt.log.ok(`Deduped data for ${ version }`);
	});
};
