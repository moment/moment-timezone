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

/**
 * Parses country codes and names from iso3166.tab
 */
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

/**
 * Parses zone names from zone1970.tab or zone.tab
 */
function parseZones (grunt, version, zoneFileName, zones, countries) {
	var zoneData = grunt.file.read('temp/download/' + version + zoneFileName);

	zoneData.split('\n').map(function (line) {
		return line.split("#")[0].split(/\s+/); // split on whitespace before a # comment
	}).filter(function (parts) {
		return parts.length > 2;
	}).forEach(function (parts) {
		var latlong = parts[1].match(/[+-]\d+/g);
		var zoneCountries = parts[0].split(",");
		var zoneName = parts[2];

		// add to zones[] array if not there yet
		if (!zones[zoneName]) {
			zones[zoneName] = {
				name          : zoneName,
				lat           : parseLatLong(latlong[0], 0),
				long          : parseLatLong(latlong[1], 1),
				countries     : zoneCountries,
				comments      : parts.slice(3).join(' ')
			};
		}

		// add to zone countries[] array if not there yet
		zoneCountries.forEach(function (country) {
			if (zones[zoneName].countries.indexOf(country) === -1) {
				zones[zoneName].countries.push(country);
			}
		});

		// add to country zones[] array if not there yet
		zoneCountries.forEach(function(countryCode) {
			if (countries[countryCode].zones.indexOf(zoneName) === -1) {
				countries[countryCode].zones.push(zoneName);
			}
		});

	});
}

function removeCountriesWithoutZones (allCountries) {
    // Filter out the countries which dont have any timezones. eg: 'Bouvet Island', 'Heard Island and McDonald Islands'
    for (var countryCode in allCountries) {
        var country = allCountries[countryCode];
        if (country.zones.length === 0) {
            delete allCountries[country.abbr];
        }
    }
    return allCountries;
}

module.exports = function (grunt) {
	grunt.registerTask('data-meta', '4. Parse metadata from zone1970.tab', function (version) {
		version = version || 'latest';
		var countries = parseCountries(grunt, version);
		var zones = {};

		parseZones(grunt, version, '/zone1970.tab', zones, countries);
		parseZones(grunt, version, '/zone.tab', zones, countries);

		var output = {
			countries: removeCountriesWithoutZones(countries),
			zones: zones
		};

		grunt.file.mkdir('data/meta');
		grunt.file.write('data/meta/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Added metadata for ' + version);
	});
};
