module.exports = function(grunt) {
	grunt.initConfig({
		nodeunit : {
			zones : [
				"tests/zones/**/*.js"
			],
			core : [
				"tests/moment-timezone/*.js",
				"tests/moment-timezone-utils/*.js"
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
		},
		clean: {
			data: ['temp']
		}
	});

	grunt.loadTasks("tasks");

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['jshint', 'nodeunit']);
};
