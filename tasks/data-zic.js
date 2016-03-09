import path from 'path';
import { exec } from 'child_process';

export default grunt => {
	grunt.registerTask('data-zic', '2. Compile data sources with zic(8).', function (version = 'latest') {
		const done  = this.async();
		const dest  = path.resolve('temp/zic', version);
		const files = 'africa antarctica asia australasia etcetera europe northamerica southamerica pacificnew backward'.split(' ');

		grunt.file.mkdir(dest);

		function next () {
			if (!files.length) {
				grunt.log.ok(`Compiled zic for ${ version }`);
				return done();
			}

			const file = files.shift();
			const src = path.resolve('temp/download', version, file);

			exec(`zic -d ${ dest } ${src }`, err => {
				if (err) { throw err; }

				grunt.verbose.ok(`Compiled zic ${ version }:${ file }`);

				next();
			});
		}

		next();
	});
};
