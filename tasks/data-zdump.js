import path from 'path';
import { exec } from 'child_process';

export default grunt => {
	const { mkdir, write, expand } = grunt.file;

	grunt.registerTask('data-zdump', '3. Dump data with zdump(8).', function (version = 'latest') {
		const done = this.async();
		const zicBase   = path.resolve('temp/zic', version);
		const zdumpBase = path.resolve('temp/zdump', version);
		const files     = expand({ filter : 'isFile', cwd : 'temp/zic/' + version }, '**/*');

		function next () {
			if (!files.length) {
				grunt.log.ok('Dumped data for ' + version);
				return done();
			}

			const file = files.pop();
			const src  = path.join(zicBase, file);
			const dest = path.join(zdumpBase, file);

			exec('zdump -v ' + src, { maxBuffer: 20 * 1024 * 1024 }, (err, stdout) => {
				if (err) { throw err; }

				mkdir(path.dirname(dest));
				write(dest + '.zdump', stdout.replace(new RegExp(zicBase + '/', 'g'), ''));

				grunt.verbose.ok(`Dumped data for ${ version }:${ file }`);

				next();
			});
		}

		next();
	});
};
