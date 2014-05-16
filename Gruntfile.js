module.exports = function(grunt) {
	grunt.initConfig({
		nodeunit : {
			all : [
				"tests/**/*.js",
				"!tests/helpers/**"
			]
		},
		uglify : {
			all: {
				files: {
					'min/moment-timezone.min.js' : 'moment-timezone.js'
				}
			},
			options: {
				report : 'gzip'
			}
		},
		jshint: {
			all: 'moment-timezone.js'
		}
	});

	grunt.loadTasks("tasks");

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'nodeunit']);
};
