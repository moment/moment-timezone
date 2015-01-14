"use strict";

var path = require('path'),
    exec = require('child_process').exec;

module.exports = function (grunt) {
    grunt.registerTask('data-links', '6. Extract zone links(aliases).', function (version) {
        version = version || 'latest';

        var done  = this.async(),
            files = 'africa antarctica asia australasia etcetera europe northamerica southamerica pacificnew backward'.split(' '),
            links = {},
            packedLinks = [];
        function next () {
            if (!files.length) {
                grunt.verbose.ok('Extracted zone links for ' + version);
                return done();
            }

            var file = files.shift(),
                src = path.resolve('temp/download', version, file);

            var lines = grunt.file.read(src).split('\n');

            lines.forEach(function (line) {
                if(line.match(/^Link/)) {
                    var parts  = line.split(/\s+/);
                    if(parts.length > 1) {
                        links[parts[2]] = parts[1];
                        packedLinks.push(parts[2] + "|" + parts[1]);
                    }
                }
            });
            next();
        }

        next();

        // Save the links hash to a file first
        grunt.file.mkdir('temp/collect');
        grunt.file.write('temp/collect/links-' + version + '.json', JSON.stringify(links, null, 2));

        // Next, add the packed version of links to the unpacked data json file from previous tasks
        var unpackedData = grunt.file.read('data/unpacked/' + version + '.json'),
            data = JSON.parse(unpackedData);
            data['links'] = packedLinks;

        grunt.file.write('data/unpacked/' + version + '.json', JSON.stringify(data, null, 2));

        grunt.log.ok('Zone links extracted from ' + version);
    });
};
