"use strict";

var path = require('path');

function parseVersion (grunt, version) {
	var newsPath = path.join('temp/download', version, 'NEWS'),
		input = grunt.file.read(newsPath),
		matches = input.match(/\nRelease (\d{4}[a-z]) /);

	if (matches && matches[1]) {
		if (version !== 'latest' && version !== matches[1]) {
			throw new Error("Parsed version " + matches[1] +
				" differs from specified version " + version)
		}
		return matches[1];
	}
	throw new Error("Could not find version from " + newsPath);
}

function parseLatLong (input, isLong) {
	var sign = input[0] === '+' ? 1 : -1,
		deg = ~~input.substr(1, 2 + isLong) * sign,
		min = ~~input.substr(3 + isLong, 2),
		sec = ~~input.substr(5 + isLong, 2);

	min += sec / 60;
	deg += min / 60;

	return +deg.toFixed(4);
}

function parseCountries (grunt, version) {
	var countryData = grunt.file.read('temp/download/' + version + '/iso3166.tab');
	var countries = {};

	countryData.split('\n').map(function (line) {
		return line.split("#")[0].split(/\t/);
	}).filter(function (parts) {
		return parts.length === 2;
	}).forEach(function (parts) {
		countries[parts[0]] = {
			name:  parts[1],
			abbr:  parts[0],
			zones: []
		};
	});
	return countries;
}

function parseZones (grunt, version, countries) {
	var latestZonesFile = 'temp/download/' + version + '/zone1970.tab';
	var defaultZoneFile = 'temp/download/' + version + '/zone.tab';

	var zoneData = grunt.file.exists(latestZonesFile)
		? grunt.file.read(latestZonesFile)
		: grunt.file.read(defaultZoneFile);
	var zones = {};

	zoneData.split('\n').map(function (line) {
		return line.split("#")[0].split(/\s+/); // split on whitespace before a # comment
	}).filter(function (parts) {
		return parts.length > 2;
	}).forEach(function (parts) {
		var latlong = parts[1].match(/[+-]\d+/g);
		var zoneCountries = parts[0].split(",");
		var zoneName = parts[2];

		zones[zoneName] = {
			name          : zoneName,
			lat           : parseLatLong(latlong[0], 0),
			long          : parseLatLong(latlong[1], 1),
			countries     : zoneCountries,
			comments      : parts.slice(3).join(' ')
		};

		// add an entry of this zone, to all countries where its used
		zoneCountries.forEach(function(countryCode) {
			countries[countryCode].zones.push(zoneName);
		});
	});

	return zones;
}

function addZoneCountries (grunt, version, zones, countries) {
	var defaultZoneFile = 'temp/download/' + version + '/zone.tab';
	var zoneData = grunt.file.read(defaultZoneFile);

	zoneData.split('\n').map(function (line) {
		return line.split("#")[0].split(/\s+/); // split on whitespace before a # comment
	}).filter(function (parts) {
		return parts.length > 2;
	}).forEach(function (parts) {
		var latlong = parts[1].match(/[+-]\d+/g);
		var zoneCountries = parts[0].split(",");
		var zoneName = parts[2];

		if (!zones[zoneName]) {
			zones[zoneName] = {
				name          : zoneName,
				lat           : parseLatLong(latlong[0], 0),
				long          : parseLatLong(latlong[1], 1),
				countries     : zoneCountries,
				comments      : parts.slice(3).join(' ')
			};
		}

		zoneCountries.forEach(function (country) {
			if (zones[zoneName].countries.indexOf(country) === -1) {
				zones[zoneName].countries.push(country);
			}
		});

		// add an entry of this zone, to all countries where its used
		zoneCountries.forEach(function(countryCode) {
			if (countries[countryCode].zones.indexOf(zoneName) === -1) {
				countries[countryCode].zones.push(zoneName);
			}
		});


	});
}

function filterCountries (allCountries) {
    var countriesWithZones = {};

    // Filter out the countries which dont have any timezones. eg: 'Bouvet Island', 'Heard Island and McDonald Islands'
    for (var countryCode in allCountries) {
        var country = allCountries[countryCode];
        if(country.zones.length > 0) {
            countriesWithZones[country.abbr] = country;
        }
    }
    return countriesWithZones;
}

module.exports = function (grunt) {
	grunt.registerTask('data-meta', '2. Parse metadata from zone1970.tab', function (version) {
		version = version || 'latest';
		var countries = parseCountries(grunt, version);
		var zones = parseZones(grunt, version, countries);
		addZoneCountries(grunt, version, zones, countries);
		var validCountries = filterCountries(countries);

		var output = {
			version: parseVersion(grunt, version),
			countries: validCountries,
			zones: zones
		};

		grunt.file.write('data/meta/' + version + '.json', JSON.stringify(output, null, '\t'));
		if (version === 'latest') {
			grunt.file.copy('data/meta/latest.json', 'data/meta/' + output.version + '.json');
		}

		grunt.log.ok('Added metadata for ' + version + (version === 'latest' ? ': ' + output.version : ''));
	});
};
