import moment = require('../moment-timezone-utils');

var ZONE_A = {
    name : "Zone/A",
    abbrs   : ["ABC", "DEF", "GHI"],
    offsets : [10, 20, 30],
    untils  : [-1000, 100, 200]
};

var ZONE_B = {
    name : "Zone/B",
    abbrs   : ["ABC", "DEF", "GHI"],
    offsets : [10, 20, 30],
    untils  : [-1000, 100, 200]
};

var ZONE_C = {
    name : "Zone/C",
    abbrs   : ["ZYX", "WVU"],
    offsets : [20, 30],
    untils  : [-3000, 900]
};

moment.tz.createLinks({
    zones : [ZONE_A, ZONE_B, ZONE_C],
    links : ["Test/A|Test/B", "Test/A|Test/C"],
    version : '2014abcretain'
});


