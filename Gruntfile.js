module.exports = function(grunt) {
	grunt.initConfig({
		nodeunit : {
			all : [
				"tests/**/*.js"
			]
		}
	});

	grunt.loadTasks("tasks");

	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', 'nodeunit');
};
