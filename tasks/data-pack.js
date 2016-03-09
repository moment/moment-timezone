import createLinks from '../src/pack/create-links';
import pack from '../src/pack/pack';

export default grunt => {
	const { readJSON, mkdir, write } = grunt.file;

	grunt.registerTask('data-pack', '6. Pack data from data-dedupe.', (version = 'latest') => {
		const output = createLinks(readJSON('data/unpacked/' + version + '.json'));

		output.zones = output.zones.map(pack);

		mkdir('data/packed');
		write(`data/packed/${version}.json`, JSON.stringify(output, null, '\t'));

		grunt.log.ok(`Packed data for ${version}`);
	});
};
