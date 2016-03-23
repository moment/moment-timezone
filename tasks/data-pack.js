import filterLinkPack from '../src/pack/filter-link-pack';

export default grunt => {
	const { readJSON, mkdir, write } = grunt.file;

	grunt.registerTask('data-pack', '6. Pack data from data-dedupe.', (version = 'latest') => {
		const unpacked = readJSON(`temp/unpacked/${ version }.json`);
		const output = JSON.stringify(filterLinkPack(unpacked, 0, 9999), null, '\t');
		const output20102020 = JSON.stringify(filterLinkPack(unpacked, 2010, 2020), null, '\t');

		if (version === 'latest') {
			write(`src/data/latest.js`, `export default ${ output };\n`);
			write(`src/data/latest-2010-2020.js`, `export default ${ output20102020 };\n`);
			write(`src/data/latest.json`, output);
		} else {
			mkdir('src/data/archive');
			write(`src/data/archive/${version}.json`, output);
		}

		grunt.log.ok(`Packed data for ${version}`);
	});

	grunt.registerTask('data-pack-legacy', '6. Pack data from data-dedupe. (legacy)', (version = 'latest') => {
		const output = filterLinkPack(readJSON('data/unpacked/' + version + '.json'), 0, 9999);

		mkdir('data/packed');
		write(`data/packed/${version}.json`, JSON.stringify(output, null, '\t'));

		grunt.log.ok(`Packed data for ${version}`);
	});
};
