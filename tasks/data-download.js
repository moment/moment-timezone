import path from 'path';
import { exec } from 'child_process';

export default grunt => {
	const { mkdir } = grunt.file;
	const { ok } = grunt.log;

	grunt.registerTask('data-download', '1. Download data from iana.org/time-zones.', function (version = 'latest') {
		const done = this.async();
		const curl = path.resolve('temp/curl', version, 'data.tar.gz');
		const dest = path.resolve('temp/download', version);

		let src = 'ftp://ftp.iana.org/tz/tzdata-latest.tar.gz';

		if (version !== 'latest') {
			src = `http://www.iana.org/time-zones/repository/releases/tzdata${ version }.tar.gz`;
		}

		mkdir(path.dirname(curl));
		mkdir(dest);

		ok(`Downloading ${src}`);

		exec(`curl ${ src } -o ${ curl } && cd ${ dest } && gzip -dc ${ curl } | tar -xf -`, err => {
			if (err) { throw err; }

			ok(`Downloaded ${src}`);

			done();
		});
	});
};
