"use strict";

var tz = require('../moment-timezone-utils').tz,
    groupLeaders = require('./group-leaders.json');

// A cut-down version of `deprecate()` from core moment.js
function staleDataWarning() {
	if (moment.suppressDeprecationWarnings === false &&
			(typeof console !==  'undefined') && console.warn) {
		console.warn(
			'Deprecation warning: ' +
			'Moment Timezone has been loaded from a file containing data from 2012 to 2022 only. ' +
			'This file is out of date and may be removed in a future release. ' +
			'Dates and times for the current year might be incorrect.'
		);
	}
}

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

		if (this.data && this.data[2] === 'warn') {
			data += '\n\t' + staleDataWarning.toString().split('\n').join('\n\t')
				+ '\n\tstaleDataWarning();'
		}

		source = source.replace('// INJECT DATA', data);

		grunt.file.write(dest, source);
	});
};
