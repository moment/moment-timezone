"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-zdump', '3. Dump data with zdump(8).', function (version) {
		version = version || 'latest';

		console.log(path.resolve('zdump'));

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

		function next () {
			if (!files.length) {
				grunt.log.ok('Dumped data for ' + version);
				return done();
			}

			var file = files.pop(),
				src  = path.join(zicBase, file),
				dest = path.join(zdumpBase, file);

			exec('zdump -v ' + src, { maxBuffer: 20*1024*1024 }, function (err, stdout) {
				if (err) { throw err; }
                
                let output = normalizePaths(stdout);
				let lines = output.split('\n');
				let validOutput = lines.some(function (line) {
					var parts = line.split(/\s+/);
					return parts.length > 13;
				});
                
				grunt.file.mkdir(path.dirname(dest));

                if (stdout.length === 0) {
					// on some systems, when there are no transitions then we have
					// to get creative to learn the offset and abbreviation
					exec('zdump UTC ' + src, { maxBuffer: 20*1024*1024 }, function (_err, _stdout) {
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

		next();
	});
};
