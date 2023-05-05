"use strict";

var path = require('path'),
	execFile = require('child_process').execFile;

module.exports = function (grunt) {
	grunt.registerTask('data-zdump', '4. Dump data with zdump(8).', function (version) {
		version = version || 'latest';

		var done      = this.async(),
			zicBase   = path.resolve('temp/zic', version),
			zdumpBase = path.resolve('temp/zdump', version),
			files     = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zic/' + version }, '**/*');

		var zicBaseRegex = new RegExp((zicBase + path.sep).replace(/\\/g,'\\\\'), 'g');
		var pathSepRegex = new RegExp(path.sep.replace('\\','\\\\'), 'g');
		function normalizePaths(output) {
			var result = output.replace(zicBaseRegex, '');
			if (path.sep !== '/') {
				result = result.replace(pathSepRegex, '/')
			}
			return result;
		}

		var zdumpVerboseArg = '-V';
		// Do a test of `zdump` to make sure it can provide the format we want.
		// The `-V` flag (different from `-v`) was introduced in tzcode version 2013d,
		// but still isn't available on macOS.
		execFile('zdump', ['-V', 'UTC'], { maxBuffer: 20*1024*1024 }, function (err, stdout, stderr) {
			if (stdout === '' && stderr.includes('illegal option')) {
				zdumpVerboseArg = '-v';
				grunt.log.warn('WARNING: The version of `zdump` on this machine is very old and might produce incorrect values');

			// Do a separate test to make sure 64-bit data is returned.
			// 32-bit `zdump` returns 1901 & 2038 boundaries even for the UTC zone.
			} else if (stdout.includes('1901') && stdout.includes('2038')) {
				grunt.log.warn("WARNING: The version of `zdump` on this machine can't handle 64-bit data and will produce incorrect values");
			}

			next();
		});

		function next () {
			if (!files.length) {
				grunt.log.ok('Dumped data for ' + version);
				return done();
			}

			var file = files.pop(),
				src  = path.join(zicBase, file),
				dest = path.join(zdumpBase, file);

			execFile('zdump', [zdumpVerboseArg, src], { maxBuffer: 20*1024*1024 }, function (err, stdout) {
				if (err) { throw err; }

				if (stdout.length === 0) {
					// on some systems, when there are no transitions then we have
					// to get creative to learn the offset and abbreviation
					execFile('zdump', ['UTC', src], { maxBuffer: 20*1024*1024 }, function (_err, _stdout) {
						if (_err) { throw _err; }

						grunt.file.write(dest + '.zdump', normalizePaths(_stdout));
						grunt.verbose.ok('Dumped data for ' + version + ':' + file);

						next();
					});
					return;
				}

				grunt.file.write(dest + '.zdump', normalizePaths(stdout));
				grunt.verbose.ok('Dumped data for ' + version + ':' + file);

				next();
			});
		}
	});
};
