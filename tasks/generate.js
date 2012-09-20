var path = require('path');

module.exports = function (grunt) {
    // placeholder for an array of timezones
    var ALL_ZONES,
        INITIAL_ZONE,

        failedZones = [],
        failedTests = [],

        logTableWidths = [4, 0, 12, 12],

        failedZoneCount = 0,
        passedZoneCount = 0;

    /******************************
        Grunt task
    ******************************/

    grunt.registerTask('generate', 'Run the unit tests in different timezones.', function () {
        var done = this.async();
        getCurrentTimezone(function (zone) {
            // save the initial timezone so we dont break our computers
            INITIAL_ZONE = zone;

            ALL_ZONES = [zone];

            // start building the tests
            nextTest(done);
        });
    });

    /******************************
        Timezones
    ******************************/

    function getCurrentTimezone(cb) {
        grunt.utils.spawn({
            cmd: "systemsetup",
            args: ["gettimezone"]
        }, function (err, result, code) {
            cb(result.stdout.replace('Time Zone: ', ''));
        });
    }

    function getAllTimezones(cb) {
        grunt.utils.spawn({
            cmd: "systemsetup",
            args: ["listtimezones"]
        }, function (err, result, code) {
            var zones = result.stdout.replace('Time Zones:', '');
            zones = zones.match(/\S+/g);
            cb(zones);
        });
    }

    function setTimezone(zone, cb) {
        grunt.utils.spawn({
            cmd: "systemsetup",
            args: ["settimezone", zone]
        }, function (err, result, code) {
            cb();
        });
    }

    /******************************
        Tests
    ******************************/

    function nextTest(cb) {
        var zone = ALL_ZONES.pop();
        if (zone) {
            setTimezone(zone, function () {
                generateZone(zone, function () {
                    nextTest(cb);
                });
            });
        } else {
            cb();
        }
    }

    function generateZone(zone, cb) {
        var filename = path.join(process.cwd(), "tests/" + zone.toLowerCase() + '.js');
        grunt.file.write(filename, "noop();");
        cb();
    }
};
