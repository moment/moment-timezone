"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-zdump', '3. Dump data with zdump(8).', function (version) {
		version = version || 'latest';

		var done      = this.async(),
			zicBase   = path.resolve('temp/zic', version),
			zdumpBase = path.resolve('temp/zdump', version),
			files     = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zic/' + version }, '**/*');

		function next () {
			if (!files.length) { done(); return; }

			var file = files.pop(),
				src  = path.join(zicBase, file),
				dest = path.join(zdumpBase, file);

			exec('zdump -v ' + src, function (err, stdout) {
				if (err) { throw err; }

				grunt.file.mkdir(path.dirname(dest));
				grunt.file.write(dest + '.zdump', stdout.replace(new RegExp(zicBase + '/', 'g'), ''));

				next();
			});
		}

		next();
	});
};
