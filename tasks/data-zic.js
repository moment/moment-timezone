"use strict";

var path = require('path'),
	exec = require('child_process').exec;

module.exports = function (grunt) {
	grunt.registerTask('data-zic', '2. Compile data sources with zic(8).', function () {
		var done  = this.async(),
			dest  = path.resolve('temp/zic'),
			files = 'africa antarctica asia australasia backward etcetera europe northamerica pacificnew southamerica'.split(' '),
			count = files.length;

		files.forEach(function (file) {
			var src = path.resolve('temp/download', file);

			exec('zic -d ' + dest + ' ' + src, function (err) {
				if (err) { throw err; }
				count--;
				if (!count) { done(); }
			});
		});
	});
};
