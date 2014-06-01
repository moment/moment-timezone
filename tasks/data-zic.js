"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-zic', '2. Compile data sources with zic(8).', function (version) {
		version = version || 'latest';

		var done  = this.async(),
			dest  = path.resolve('temp/zic', version),
			files = 'africa antarctica asia australasia backward etcetera europe northamerica pacificnew southamerica'.split(' '),
			count = files.length;

		grunt.file.mkdir(dest);

		files.forEach(function (file) {
			var src = path.resolve('temp/download', version, file);

			exec('zic -d ' + dest + ' ' + src, function (err) {
				if (err) { throw err; }
				count--;
				if (!count) { done(); }
			});
		});
	});
};
