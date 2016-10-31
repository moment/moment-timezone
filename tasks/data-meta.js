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
	var zoneData = grunt.file.exists(latestZonesFile) ? grunt.file.read(latestZonesFile) : grunt.file.read(defaultZoneFile);
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

function filterCountries (allCountries) {
    var countriesWithZones = {};

    // Filter out the countries which dont have any timezones. eg: 'Bouvet Island', 'Heard Island and McDonald Islands'
    for(var countryCode in allCountries) {
        var country = allCountries[countryCode];
        if(country.zones.length > 0) {
            countriesWithZones[country.abbr] = country;
        }
    }
    return countriesWithZones;
}

module.exports = function (grunt) {
	grunt.registerTask('data-meta', '4. Parse metadata from zone1970.tab', function (version) {
		version = version || 'latest';
		var countries = parseCountries(grunt, version);
		var zones = parseZones(grunt, version, countries);
		var validCountries = filterCountries(countries);

		var output = {
			countries: validCountries,
			zones: zones
		};

		grunt.file.mkdir('data/meta');
		grunt.file.write('data/meta/' + version + '.json', JSON.stringify(output, null, '\t'));

		grunt.log.ok('Added metadata for ' + version);
	});
};
