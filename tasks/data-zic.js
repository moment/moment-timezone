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
			execFile('zic', ['-d', dest, src], function (err) {
				if (err) { throw err; }

				grunt.verbose.ok('Compiled zic ' + version + ':' + file);

				next();
			});
		}

		next();
	});
};
