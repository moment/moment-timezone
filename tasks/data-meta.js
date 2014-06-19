"use strict";

function parseLatLong (input, isLong) {
	var sign = input[0] === '+' ? 1 : -1,
		deg = ~~input.substr(1, 2 + isLong) * sign,
		min = ~~input.substr(3 + isLong, 2),
		sec = ~~input.substr(5 + isLong, 2);

	min += sec / 60;
	deg += min / 60;

	return +deg.toFixed(4);
}

module.exports = function (grunt) {
	grunt.registerTask('data-meta', '7. Parse metadata from zone.tab', function (version) {
		version = version || 'latest';

		var data = grunt.file.read('temp/download/' + version + '/zone.tab'),
			output = [];

		data.split('\n').map(function (line) {
			return line.split("#")[0].split(/\s+/); // split on whitespace before a # comment
		}).filter(function (parts) {
			return parts.length > 2;
		}).forEach(function (parts) {
			var latlong = parts[1].match(/[+-]\d+/g);
			output.push({
				name     : parts[2],
				lat      : parseLatLong(latlong[0], 0),
				long     : parseLatLong(latlong[1], 1),
				country  : parts[0],
				comments : parts.slice(3).join(' ')
			});
		});

		grunt.file.mkdir('data/meta');
		grunt.file.write('data/meta/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Added metadata for ' + version);
	});
};