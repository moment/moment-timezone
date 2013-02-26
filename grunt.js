module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		test: {
			files: ["tests/**/*.js"]
		},
		lint: {
			files: [
				'moment-timezone.js',
				'tests/**/*.js'
			]
		},
        concat: {
            js: {
                src: ['moment-timezone.js', 'zones/*.js'],
                dest: 'min/moment-timezone-all.js'
            }
        },
        min: {
            js: {
                src: 'min/moment-timezone-all.js',
                dest: 'min/moment-timezone-all.min.js'
            }
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
