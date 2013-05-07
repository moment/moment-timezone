module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		test: {
			files: [
				"tests/**/*.js"
				// "tests/america/phoenix.js",
				//"tests/america/los_angeles.js"
				// "tests/antarctica/*.js"
				// "tests/pacific/tahiti.js",
				// "tests/pacific/tongatapu.js"
			]
		},
		lint: {
			files: [
				'moment-timezone.js',
				'tests/**/*.js'
			]
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'default'
		}
	});

	// Default task.
	grunt.registerTask('default', 'test');

	grunt.loadTasks("tasks");
};
