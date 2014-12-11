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
    grunt.registerTask('data-timezones', '8. Creates list of zones(with Metadata) from zone1970.tab', function (version) {
        version = version || 'latest';

        var data = grunt.file.read('temp/download/' + version + '/zone1970.tab'),
            countryData = grunt.file.read('temp/download/' + version + '/iso3166.tab'),
            countryMap = {},
            output = [];

        countryData.split('\n').map(function (line) {
            return line.split("#")[0].split(/\t/);
        }).filter(function (parts) {
            return parts.length == 2;
        }).forEach(function (parts) {
            countryMap[parts[0]] = parts[1];
        });


        data.split('\n').map(function (line) {
            return line.split("#")[0].split(/\s+/); // split on whitespace before a # comment
        }).filter(function (parts) {
            return parts.length > 2;
        }).forEach(function (parts) {
            var latlong = parts[1].match(/[+-]\d+/g);
            var countryCodes = parts[0].split(",");
            var zoneCountries = {};

            countryCodes.forEach(function(code) {
                if(!countryMap[code]) {
                    grunt.log.warn("Country name corresponding to country code " + parts[0] + " wasn't found!!");
                } else {
                    zoneCountries[code] = countryMap[code];
                }
            });
            output.push({
                name          : parts[2],
                lat           : parseLatLong(latlong[0], 0),
                long          : parseLatLong(latlong[1], 1),
                country       : parts[0],
                countryMap    : zoneCountries,
                comments      : parts.slice(3).join(' ')
            });
        });

        grunt.file.mkdir('data/meta');
        grunt.file.write('data/meta/timezones-list-' + version + '.json', JSON.stringify(output, null, '\t'));

        grunt.log.ok('Created List of timezones with metadata from ' + version + ' version of IANA tz data');
    });
};