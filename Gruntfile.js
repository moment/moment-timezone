"use strict";

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

		build : {
			'moment-timezone-with-data'           : true,
			'moment-timezone-with-data-2010-2020' : [2010, 2020]
		},

		uglify : {
			all: {
				files: {
					'builds/moment-timezone.min.js'                     : 'moment-timezone.js',
					'builds/moment-timezone-with-data.min.js'           : 'builds/moment-timezone-with-data.js',
					'builds/moment-timezone-with-data-2010-2020.min.js' : 'builds/moment-timezone-with-data-2010-2020.js'
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

	grunt.registerTask('release', ['jshint', 'data', 'nodeunit', 'build', 'uglify']);

	grunt.registerTask('default', ['jshint', 'nodeunit']);
};
