"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-download', '1. Download data from iana.org/time-zones.', function (version) {
		version = version || 'latest';

		var done  = this.async(),
			src   = 'ftp://ftp.iana.org/tz/tzdata-latest.tar.gz',
			curl  = path.resolve('temp/curl', version, 'data.tar.gz'),
			dest  = path.resolve('temp/download', version);

		if (version !== 'latest') {
			src = 'http://www.iana.org/time-zones/repository/releases/tzdata' + version + '.tar.gz';
		}

		grunt.file.mkdir(path.dirname(curl));
		grunt.file.mkdir(dest);

		grunt.log.ok('Downloading ' + src);

		exec('curl ' + src + ' -o ' + curl + ' && cd ' + dest + ' && gzip -dc ' + curl + ' | tar -xf -', function (err) {
			if (err) { throw err; }

			grunt.log.ok('Downloaded ' + src);

			done();
		});
	});
};