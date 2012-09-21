var moment = require('moment');

var daysOfWeek = 'sun mon tue wed thu fri sat'.split(' ');

module.exports = function (grunt) {
	grunt.registerTask('generate-zones', 'Build the zone files.', function () {

		grunt.file.expandFiles("olson/*").forEach(function(file){
			parseZone(file, grunt);
		});
	});
};

function formatZone (zone, output) {
	zone[0] = output.lastZone = zone[0] || output.lastZone;
	if (!output.zones[zone[0]]) {
		output.zones[zone[0]] = [];
	}
	output.zones[zone[0]].push(zone.slice(1).join(','));
}

function ruleHMToMinutes (input) {
	//return input;
	var output = input.split(':');
	return (+output[0] * 60) + (+output[1] || 0);
}

function ruleGreaterThan (input) {
	var dow = daysOfWeek.indexOf(input.toLowerCase().slice(0, 3)),
		dom = input.slice(5);

	return dow + ":" + dom;
}

function ruleLast (input) {
	var dow = daysOfWeek.indexOf(input.toLowerCase().slice(4, 7));
	return -dow;
}

function ruleDay (input) {
	if (daysOfWeek.indexOf(input.toLowerCase().slice(4, 7)) > -1) {
		return ruleLast(input);
	} else if (+input + "" === input) {
		return input;
	} else if (daysOfWeek.indexOf(input.toLowerCase().slice(0, 3)) > -1) {
		return ruleGreaterThan(input);
	}
	console.log('no switch found', input);
	return input;
}

function formatRule (rule, output) {
	// remove type
	rule.splice(3, 1);

	// ignore 'only' as end year
	if (rule[2] === 'only') {
		rule[2] = '';
	}

	// set 'max' to 9999
	if (rule[2] === 'max') {
		rule[2] = 9999;
	}

	// convert month names to numbers
	rule[3] = moment(rule[3], "MMM").month();

	rule[4] = ruleDay(rule[4]);
	rule[5] = ruleHMToMinutes(rule[5]);
	rule[6] = ruleHMToMinutes(rule[6]);

	if (!output.rules[rule[0]]) {
		output.rules[rule[0]] = [];
	}
	output.rules[rule[0]].push(rule.slice(1, 8).join(','));
}

function parseLine (line, output) {
	var array,
		lineType;

	// assume lines that start with whitespace are zones
	if (line.match(/^\s/)) {
		line = "Zone " + output.lastZone + line;
	}

	// ignore comments
	line = line.split("#")[0];

	// only lines with more than 3 chars are valid
	if (line.length < 4) {
		return;
	}

	array = line.split(/\s+/);
	lineType = array.shift();

	switch (lineType) {
		case 'Zone':
			formatZone(array, output);
			break;
		case 'Rule':
			formatRule(array, output);
			break;
		case 'Link':
			break;
		case 'Leap':
			break;
	}
}

function parseZone (zone, grunt) {
	var data = grunt.file.read(zone),
		i,
		output = {
			rules : {},
			zones : {},
			lastZone : null
		},
		lines = data.split('\n'),
		outPath = zone.replace('olson', 'zones') + '.js',
		outData = 'module.exports = ';

	for (i = 0; i < lines.length; i++) {
		parseLine(lines[i], output);
	}

	outData += JSON.stringify(output, null, '\t') + ';\n';

	grunt.file.write(outPath, outData);

	grunt.log.writeln('File "' + outPath + '" created. ' + ('(' + grunt.helper('gzip', outData).length + ' bytes gzipped)').green);
}
