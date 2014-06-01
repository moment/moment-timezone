"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-zic', '2. Compile data sources with zic(8).', function (version) {
		version = version || 'latest';

		var done  = this.async(),
			dest  = path.resolve('temp/zic', version),
			files = 'africa antarctica asia australasia etcetera europe northamerica southamerica pacificnew backward'.split(' ');

		grunt.file.mkdir(dest);

		function next () {
			if (!files.length) {
				grunt.log.ok('Compiled zic for ' + version);
				return done();
			}

			var file = files.shift(),
				src = path.resolve('temp/download', version, file);

			exec('zic -d ' + dest + ' ' + src, function (err) {
				if (err) { throw err; }

				grunt.verbose.ok('Compiled zic ' + version + ':' + file);

				next();
			});
		}

		next();
	});
};
