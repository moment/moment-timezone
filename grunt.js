module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		test: {
			files: [
				//"tests/core/*.js",
				"tests/africa/*.js",
				"tests/america/*.js"
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
