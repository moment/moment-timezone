import registerBuildTask from './builds';
import registerDataTask from './data';
import registerDataCollectTask from './data-collect';
import registerDataDedupeTask from './data-dedupe';
import registerDataDownloadTask from './data-download';
import registerDataMetaTask from './data-meta';
import registerDataPackTask from './data-pack';
import registerDataTestsTask from './data-tests';
import registerDataTestsLegacyTask from './data-tests-legacy';
import registerDataZicTask from './data-zic';
import registerDataZdumpTask from './data-zdump';

const nodeunit = {
	zones : [
		"tests/zones/**/*.js"
	],
	core : [
		"tests/moment-timezone/*.js"
	]
};

const build = {
	'moment-timezone-with-data'           : true,
	'moment-timezone-with-data-2010-2020' : [2010, 2020]
};

const uglify = {
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
};

const jshint = {
	all: 'moment-timezone.js'
};

const clean = {
	data: ['temp']
};

export default grunt => {
	grunt.initConfig({
		nodeunit,
		build,
		uglify,
		jshint,
		clean
	});

	registerBuildTask(grunt);
	registerDataTask(grunt);
	registerDataCollectTask(grunt);
	registerDataDedupeTask(grunt);
	registerDataDownloadTask(grunt);
	registerDataMetaTask(grunt);
	registerDataPackTask(grunt);
	registerDataTestsTask(grunt);
	registerDataTestsLegacyTask(grunt);
	registerDataZicTask(grunt);
	registerDataZdumpTask(grunt);

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('release', [
		'jshint',
		'data',
		'nodeunit',
		'build',
		'uglify'
	]);

	grunt.registerTask('default', [
		'jshint',
		'nodeunit'
	]);
};
