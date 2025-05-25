import moment = require('../moment-timezone-utils');

const ZONE_A: moment.UnpackedZone = {
    name : "Test/A",
    abbrs   : ["ABC", "DEF", "GHI"],
    offsets : [10, 20, 30],
    untils  : [-1000, 100, 200],
    population : 2000
};

const ZONE_B = {
    name : "Test/B",
    abbrs   : ["ABC", "DEF", "GHI"],
    offsets : [10, 20, 30],
    untils  : [-1000, 100, 200],
    population : 0
};

const ZONE_C = {
    name : "Test/C",
    abbrs   : ["ZYX", "WVU"],
    offsets : [20, 30],
    untils  : [-3000, 900]
};

const unpackedBundle: moment.UnpackedZoneBundle = {
    zones : [ZONE_A, ZONE_B, ZONE_C],
    links : ["Test/A|Test/B", "Test/A|Test/C"],
    version : '2025test'
}

const packedZone: string = moment.tz.pack(ZONE_A);
const packedNum: string = moment.tz.packBase60(12345678);

const packedBundle: moment.PackedZoneBundle = moment.tz.createLinks(unpackedBundle);
const packedCountry: string = moment.tz.packCountry({
    name: 'PG',
    zones: ['Pacific/Port_Moresby', 'Pacific/Bougainville']
});

const filtered1: moment.UnpackedZone = moment.tz.filterYears(ZONE_A, 2025);
const filtered2: moment.UnpackedZone = moment.tz.filterYears(ZONE_A, 1970, 2038);

const all1: moment.PackedZoneBundle = moment.tz.filterLinkPack(unpackedBundle, 2025);
const all2: moment.PackedZoneBundle = moment.tz.filterLinkPack(unpackedBundle, 1970, 2038);
