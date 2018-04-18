"use strict";

var tz = require('../moment-timezone-utils').tz,
    groupLeaders = require('./group-leaders.json');

module.exports = function (grunt) {
	grunt.registerMultiTask('build', 'Build minified versions with data included.', function () {
		var dest   = 'builds/' + this.target + '.js',
			data   = require('../data/unpacked/latest.json'),
			source = grunt.file.read('moment-timezone.js'),
			start  = 0,
			end    = 9999;

		if (this.data && this.data[0]) {
			start = this.data[0];
		}

		if (this.data && this.data[1]) {
			end = this.data[1];
		}

		data = tz.filterLinkPack(data, start, end, groupLeaders);
		data = JSON.stringify(data, null, '\t');
		data = data.split('\n').join('\n\t');
		data = 'loadData(' + data + ');\n';

		source = source.replace('// INJECT DATA', data);

		grunt.file.write(dest, source);
	});
};
