"use strict";

var path = require('path'),
	execFile = require('child_process').execFile;

module.exports = function (grunt) {
	grunt.registerTask('data-download', '1. Download data from iana.org/time-zones.', function (version) {
		version = version || 'latest';

		var done  = this.async(),
			src   = (version === 'latest' ?
				'ftp://ftp.iana.org/tz/tzdata-latest.tar.gz' :
				'https://data.iana.org/time-zones/releases/tzdata' + version + '.tar.gz'),
			curl  = path.resolve('temp/curl', version, 'data.tar.gz'),
			dest  = path.resolve('temp/download', version);

		grunt.file.mkdir(path.dirname(curl));
		grunt.file.mkdir(dest);

		grunt.log.ok('Downloading ' + src);

		execFile('curl', [src, '-o', curl], function (err) {
			if (err) { throw err; }
			grunt.log.ok('Downloaded ' + curl + ', extracting . . .');
			execFile('tar', ['-xzf', curl], { cwd: dest }, function (err) {
				if (err) { throw err; }

				grunt.log.ok('Extracted ' + dest);
				done();
			});
		});
	});
};
