"use strict";

module.exports = function(grunt) {
	const currentYear = new Date().getFullYear();
	grunt.initConfig({
		nodeunit : {
			zones : [
				"tests/zones/**/*.js",
				"tests/countries/*.js"
			],
			core : [
				"tests/moment-timezone/*.js"
			]
		},

		build : {
			'moment-timezone-with-data'               : true,
			'moment-timezone-with-data-1970-2030'     : [1970, 2030],
			'moment-timezone-with-data-2012-2022'     : [2012, 2022],
			'moment-timezone-with-data-10-year-range' : [currentYear - 5, currentYear + 5]
		},

		uglify : {
			all: {
				files: {
					'builds/moment-timezone.min.js'                         : 'moment-timezone.js',
					'builds/moment-timezone-with-data.min.js'               : 'builds/moment-timezone-with-data.js',
					'builds/moment-timezone-with-data-1970-2030.min.js'     : 'builds/moment-timezone-with-data-1970-2030.js',
					'builds/moment-timezone-with-data-2012-2022.min.js'     : 'builds/moment-timezone-with-data-2012-2022.js',
					'builds/moment-timezone-with-data-10-year-range.min.js' : 'builds/moment-timezone-with-data-10-year-range.js'
				}
			},
			options: {
				report : 'gzip',
				preserveComments : 'some'
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

	/** creates a release */
	grunt.registerTask('release', ['jshint', 'data', 'nodeunit', 'build', 'uglify']);

	grunt.registerTask('releaseNoData', ['jshint', 'nodeunit', 'build', 'uglify']);

	grunt.registerTask('default', ['jshint', 'nodeunit']);
};
