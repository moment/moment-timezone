"use strict";

module.exports = function (grunt) {
    grunt.registerTask('data-country', '6. Add the country of each zone to unpacked data.', function (version) {
        version = version || 'latest';

        var zones = grunt.file.readJSON('temp/collect/' + version + '.json'),
            meta = grunt.file.readJSON('data/meta/' + version + '.json'),
            length = meta.countries.length,
            zone,
            i,
            zoneIndex;
        
        for (var zoneNum in zones) {
            zone = zones[zoneNum];
            for (i = length - 1; i >= 0; i--) {
                zoneIndex = meta.countries[i].zones.indexOf(zone.name);
                if (zoneIndex != -1) {
                    zones[zoneNum].country_name = meta.countries[i].name;
                    zones[zoneNum].country_abbr = meta.countries[i].abbr;
                    break;
                }
            }
        }

        grunt.file.mkdir('temp/country');
        grunt.file.write('temp/country/' + version + '.json', JSON.stringify(zones, null, 2));

        grunt.log.ok('Country data for ' + version);
    });
};
