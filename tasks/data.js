export default grunt => {
	grunt.registerTask('data', 'Build timezone data.', (version = 'latest') => {
		grunt.task.run('clean:data');

		const dataTasks = 'download zic zdump collect dedupe pack meta'.split(' ');
		grunt.task.run(dataTasks.map(task => `data-${ task }:${ version }`));

		if (version === 'latest') {
			grunt.task.run('data-tests');
			grunt.task.run('data-tests-legacy');
		}
	});
};
