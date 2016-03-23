import path from 'path';
import moment from 'moment';
import populations from '../src/data/populations';

export default grunt => {
	const { expand, read, mkdir, write } = grunt.file;

	grunt.registerTask('data-collect', '4. Collect all data from zdump(8) into a single json file.', (version = 'latest') => {
		const data = [];
		const cwd = `temp/zdump/${version}`;

		expand({ filter: 'isFile', cwd }, '**/*.zdump').forEach(file => {
			const name = file.replace(/\.zdump$/, '');
			const abbrs = [];
			const untils = [];
			const offsets = [];
			const population = populations[name] | 0;

			read(path.join(cwd, file)).split('\n').forEach(line => {
				const parts  = line.split(/\s+/);
				const format = "MMM D HH:mm:ss YYYY";
				const utc    = moment.utc(parts.slice(2, 6).join(' '), format);
				const local  = moment.utc(parts.slice(9, 13).join(' '), format);

				if (parts.length < 13) {
					return;
				}

				offsets.push(+utc.diff(local, 'minutes', true).toFixed(4));
				untils.push(+utc);
				abbrs.push(parts[13]);
			});

			data.push({ name, abbrs, untils, offsets, population });
		});

		mkdir('temp/collect');
		write(`temp/collect/${ version }.json`, JSON.stringify(data, null, 2));

		grunt.log.ok(`Collected data for ${ version }`);
	});
};
