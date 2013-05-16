module.exports = function(grunt) {
	grunt.initConfig({
		nodeunit : {
			all : [
				"tests/**/*.js"
			]
		},
		jshint: {
			all: 'moment-timezone.js'
		}
	});

	grunt.loadTasks("tasks");

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'nodeunit']);
};
