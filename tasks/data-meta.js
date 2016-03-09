"use strict";

function parseLatLong (input, isLong) {
	const sign = input[0] === '+' ? 1 : -1;
	let deg = ~~input.substr(1, 2 + isLong) * sign;
	let min = ~~input.substr(3 + isLong, 2);
	const sec = ~~input.substr(5 + isLong, 2);

	min += sec / 60;
	deg += min / 60;

	return +deg.toFixed(4);
}

function parseCountries (grunt, version) {
	const countryData = grunt.file.read(`temp/download/${ version }/iso3166.tab`);
	const countries = {};

	countryData.split('\n')
		.map(line => line.split("#")[0].split(/\t/))
		.filter(parts => parts.length === 2)
		.forEach(parts => {
			const [abbr, name] = parts;
			countries[abbr] = { name, abbr, zones: [] };
		});
	return countries;
}

function parseZones (grunt, version, countries) {
	const latestZonesFile = `temp/download/${ version }/zone1970.tab`;
	const defaultZoneFile = `temp/download/${ version }/zone.tab`;
	const zoneData = grunt.file.exists(latestZonesFile) ? grunt.file.read(latestZonesFile) : grunt.file.read(defaultZoneFile);
	const zones = {};

	zoneData.split('\n')
		.map(line => line.split("#")[0].split(/\s+/)) // split on whitespace before a # comment
		.filter(parts => parts.length > 2)
		.forEach(parts => {
			const latlong = parts[1].match(/[+-]\d+/g);
			const zoneCountries = parts[0].split(",");
			const name = parts[2];

			zones[name] = {
				name,
				lat       : parseLatLong(latlong[0], 0),
				long      : parseLatLong(latlong[1], 1),
				countries : zoneCountries,
				comments  : parts.slice(3).join(' ')
			};

			// add an entry of this zone, to all countries where its used
			zoneCountries.forEach(countryCode => countries[countryCode].zones.push(name));
		});

	return zones;
}

function filterCountries (allCountries) {
	const countriesWithZones = {};

	// Filter out the countries which dont have any timezones. eg: 'Bouvet Island', 'Heard Island and McDonald Islands'
	for (let countryCode in allCountries) {
		let country = allCountries[countryCode];
		if (country.zones.length > 0) {
			countriesWithZones[country.abbr] = country;
		}
	}

	return countriesWithZones;
}

export default grunt => {
	grunt.registerTask('data-meta', '7. Parse metadata from zone1970.tab', (version = 'latest') => {
		const allCountries = parseCountries(grunt, version);
		const zones = parseZones(grunt, version, allCountries);
		const countries = filterCountries(allCountries);

		grunt.file.mkdir('data/meta');
		grunt.file.write(`data/meta/${ version }.json`, JSON.stringify({ countries, zones }, null, '\t'));

		grunt.log.ok('Added metadata for ' + version);
	});
};
