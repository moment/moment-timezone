"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-zdump', '3. Dump data with zdump(8).', function () {
		var done      = this.async(),
			zicBase   = path.resolve('temp/zic'),
			zdumpBase = path.resolve('temp/zdump'),
			files     = grunt.file.expand({ filter : 'isFile', cwd : 'temp/zic' }, '**/*'),
			count     = files.length;

		files.forEach(function (file) {
			var src  = path.join(zicBase, file),
				dest = path.join(zdumpBase, file);

			exec('zdump -v ' + src, function (err, stdout) {
				if (err) { throw err; }

				grunt.file.mkdir(path.dirname(dest));
				grunt.file.write(dest + '.zdump', stdout.replace(new RegExp(zicBase + '/', 'g'), ''));

				count--;
				if (!count) { done(); }
			});
		});
	});
};
