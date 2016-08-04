"use strict";

var tz = require('../moment-timezone-utils').tz;

module.exports = function (grunt) {
    grunt.registerTask('data-country', '7. Add the country of each zone to unpacked data.', function (version) {
        version = version || 'latest';

        var zonesdata = grunt.file.readJSON('temp/unpacked/' + version + '.json'),
            meta = grunt.file.readJSON('data/meta/' + version + '.json'),
            output1,
            output2;

        output1 = tz.addCountriestoZones (zonesdata, meta);
        output2 = tz.createCountriesList (output1, meta);


        for (var country in meta.countries){
            if (typeof output2.countries[meta.countries[country].abbr] == "undefined") {
                grunt.log.ok('Missing Country: ' + meta.countries[country].abbr);
            }
        }

        grunt.file.mkdir('data/unpacked');
        grunt.file.write('data/unpacked/' + version + '.json', JSON.stringify(output2, null, 2));

        grunt.log.ok('Country data for ' + version);
    });
};
