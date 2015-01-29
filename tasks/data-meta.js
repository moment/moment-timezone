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

/* In file 'checktab.awk', there are few zones which are considered special cases(these are zones which exist in one of the continent
 files, but dont have entry in zone1970.tab, which kind of leaves them as zombies - without any parent country) */
function handleSpecialZones (grunt, version, zones, countries) {
	var zoneTab = 'temp/download/' + version + '/zone.tab';
	var checktab = 'temp/download/' + version + '/checktab.awk';
	var map = {};

	if(grunt.file.exists(checktab) && grunt.file.exists(zoneTab)) {
		var zoneData = grunt.file.read(zoneTab);

		// Extract zone-country map from the 'zone.tab' file
		zoneData.split('\n').map(function (line) {
			return line.split("#")[0].split(/\s+/); // split on whitespace before a # comment
		}).filter(function (parts) {
			return parts.length > 2;
		}).forEach(function (parts) {
			var zoneCountry = parts[0];
			var latlong = parts[1].match(/[+-]\d+/g);
			var zoneName = parts[2];
			if(map[zoneName]) {
				map[zoneName].countries.push(zoneCountry);
			} else {
				map[zoneName] = {
					name        : zoneName,
					lat         : parseLatLong(latlong[0], 0),
					long        : parseLatLong(latlong[1], 1),
					countries 	: [zoneCountry],
					comments    : parts.slice(3).join(' ')
				};
			}
		});

		// Extract 'special zones' cases from the 'checktab.awk' file. Lines which have `tztab["Some/Zone"] = 1` are the culprits.
		var checktabData = grunt.file.read(checktab);
		var re = /tztab\["(.*)"\] = 1/;
		var specialZones = [];
		checktabData.split('\n').forEach(function(line) {
			var text = line.trim();
			var matches = re.exec(text);
			if(matches && matches.length > 1) {
				specialZones.push(matches[1]);
			}
		});

		specialZones.forEach(function(zoneName) {
			if(!zones[zoneName]) {
				// this is horrible, but cannot be handled in any other way. America/Montreal should be turned into a link by IANA!
				if(zoneName === "America/Montreal") {
					zones[zoneName] = {name: "America/Montreal", countries: ["CA"], lat: '', long: '', comments: ''};
					countries['CA'].zones.push(zoneName);
				} else {
					zones[zoneName] = map[zoneName];
					map[zoneName].countries.forEach(function(countryCode) {
						if(countries[countryCode].zones.indexOf(zoneName) === -1) {
							countries[countryCode].zones.push(zoneName);
						}
					});
				}
			} else {
				grunt.log.warn(zoneName + ' has an entry in both zone1970.tab and as a special case in checktab.awk!!!');
			}
		});

	}

	return {
		countries: countries,
		zones: zones
	};
}

module.exports = function (grunt) {
	grunt.registerTask('data-meta', '6. Parse metadata from zone1970.tab', function (version) {
		version = version || 'latest';
		var countries = parseCountries(grunt, version);
		var zones = parseZones(grunt, version, countries);
		var validCountries = filterCountries(countries);
		var correctedData = handleSpecialZones(grunt, version, zones, validCountries);

		var output = {
			countries: correctedData.countries,
			zones: correctedData.zones
		};

		grunt.file.mkdir('data/meta');
		grunt.file.write('data/meta/' + version + '.json', JSON.stringify(output, null, '\t'));

		// Append the 'countries' list to the unpacked json file created from previous task
		var countryArray = [];
		for(var countryCode in correctedData.countries) {
			countryArray.push(correctedData.countries[countryCode]);
		}
		var unpacked = grunt.file.readJSON('data/unpacked/' + version + '.json');
		unpacked.countries = countryArray;
		grunt.file.write('data/unpacked/' + version + '.json', JSON.stringify(unpacked, null, 2));

		grunt.log.ok('Added metadata for ' + version);
	});
};
