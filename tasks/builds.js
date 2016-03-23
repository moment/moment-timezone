import filterLinkPack from '../src/pack/filter-link-pack';
import latestData from '../src/data/latest.js';

export default grunt => {
	const { read, write } = grunt.file;

	grunt.registerMultiTask('build', 'Build minified versions with data included.', _ => {
		let start = 0;
		let end = 9999;
		let data = latestData;

		if (this.data && this.data[0]) {
			start = this.data[0];
		}

		if (this.data && this.data[1]) {
			end = this.data[1];
		}

		data = filterLinkPack(data, start, end);
		data = JSON.stringify(data, null, '\t');
		data = data.split('\n').join('\n\t');
		data = `loadData(${ data });\n`;

		write(`builds/${ this.target }.js`, read('moment-timezone.js').replace('// INJECT DATA', data));
	});
};
