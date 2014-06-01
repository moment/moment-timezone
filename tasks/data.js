"use strict";

module.exports = function (grunt) {
	grunt.registerTask('data', 'Build timezone data.', function (version) {
		version = version || 'latest';

		grunt.task.run('clean:data');

		grunt.task.run([
			'data-download:' + version,
			'data-zic:'      + version,
			'data-zdump:'    + version,
			'data-collect:'  + version,
			'data-dedupe:'   + version,
			'data-pack:'     + version
		]);

		if (version === 'latest') {
			grunt.task.run('data-tests');
		}
	});
};
