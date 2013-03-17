module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		test: {
			files: [
				// "tests/**/*.js"
				"tests/america/phoenix.js"
				// "tests/antarctica/*.js"
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
