"use strict";

module.exports = function (grunt) {
	grunt.registerTask('data', 'Build timezone data.', function (version) {
		version = version || 'latest';

		grunt.task.run('clean:data');

		grunt.task.run([
<<<<<<< HEAD
			'data-download:' + version,
			'data-zic:'      + version,
			'data-zdump:'    + version,
			'data-collect:'  + version,
			'data-meta:'     + version,
			'data-dedupe:'   + version,
			'data-country:'  + version,
			'data-pack:'     + version
=======
			'data-download:' 	+ version,
			'data-zic:'      	+ version,
			'data-zdump:'    	+ version,
			'data-meta:'     	+ version,
			'data-collect:'  	+ version,
			'data-dedupe:'   	+ version,
			'data-pack:'     	+ version
>>>>>>> origin/Country-Functionality
		]);

		if (version === 'latest') {
			grunt.task.run('data-tests');
		}
	});
};
