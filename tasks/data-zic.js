"use strict";

var path = require('path'),
	execFile = require('child_process').execFile;

module.exports = function (grunt) {
	grunt.registerTask('data-zic', '3. Compile data sources with zic(8).', function (version) {
		version = version || 'latest';

		var done  = this.async(),
			dest  = path.resolve('temp/zic', version),
			files = 'africa antarctica asia australasia etcetera europe northamerica southamerica backward'.split(' ');

		grunt.file.mkdir(dest);

		// Allow using custom zic binaries
		var zicBinary = 'zic',
			zicPathOption = grunt.option('zic-path');
		if (zicPathOption && grunt.file.exists(zicPathOption)) {
			zicBinary = zicPathOption;
		}

		// Do a test of `zic` to make sure it can provide the data we want.
		// The presence of the `-b` argument (introduced in tzcode 2019b) is a good test, as its
		// purpose is to help work around year-2038 bugs.
		execFile(zicBinary, ['--help'], function (err, stdout) {
			if (!stdout.includes('[ -b ')) {
				grunt.log.warn('WARNING: The version of `zic` on this machine is old and might produce incorrect values');
			}

			next();
		});

		function next () {
			if (!files.length) {
				grunt.log.ok('Compiled zic for ' + version);
				return done();
			}

			var file = files.shift(),
				src = path.resolve('temp/download', version, file);

			if (!grunt.file.exists(src)) {
				throw new Error("Can't process " + src + " with zic. File doesn't exist");
			}
			execFile(zicBinary, ['-d', dest, src], function (err) {
				if (err) { throw err; }

				grunt.verbose.ok('Compiled zic ' + version + ':' + file);

				next();
			});
		}
	});
};
