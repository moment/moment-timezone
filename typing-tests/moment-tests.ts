import moment = require('../');

// Tests are copied from all the code examples on https://momentjs.com/timezone/docs/ and then lightly tweaked to be valid code.
// Run this in Chrome's DevTools:
// const exclude = Array.from($('.docs-method-signature>pre>code'));
// const include = Array.from($('code.language-js'));
// copy(include.filter(v => !exclude.some(v2 => v2 === v)).map(v => v.innerText).join('\n\n'));

moment().tz("America/Los_Angeles").format();

var a = moment.tz("2013-11-18 11:55", "America/Toronto");
var b = moment.tz("May 12th 2014 8PM", "MMM Do YYYY hA", "America/Toronto");
var c = moment.tz(1403454068850, "America/Toronto");
a.format(); // 2013-11-18T11:55:00-05:00
b.format(); // 2014-05-12T20:00:00-04:00
c.format(); // 2014-06-22T12:21:08-04:00

moment.tz("2013-12-01", "America/Los_Angeles").format(); // 2013-12-01T00:00:00-08:00
moment.tz("2013-06-01", "America/Los_Angeles").format(); // 2013-06-01T00:00:00-07:00

var arr = [2013, 5, 1],
    str = "2013-12-01",
    obj = { year : 2013, month : 5, day : 1 };

moment.tz(arr, "America/Los_Angeles").format(); // 2013-06-01T00:00:00-07:00
moment.tz(str, "America/Los_Angeles").format(); // 2013-12-01T00:00:00-08:00
moment.tz(obj, "America/Los_Angeles").format(); // 2013-06-01T00:00:00-07:00

moment.tz(arr, "America/New_York").format();    // 2013-06-01T00:00:00-04:00
moment.tz(str, "America/New_York").format();    // 2013-12-01T00:00:00-05:00
moment.tz(obj, "America/New_York").format();    // 2013-06-01T00:00:00-04:00

var zoneName = "America/Los_Angeles";
moment.tz('2013-06-01T00:00:00',       zoneName).format(); // 2013-06-01T00:00:00-07:00
moment.tz('2013-06-01T00:00:00-04:00', zoneName).format(); // 2013-05-31T21:00:00-07:00
moment.tz('2013-06-01T00:00:00+00:00', zoneName).format(); // 2013-05-31T17:00:00-07:00

var timestamp = 1403454068850,
    date = new Date(timestamp);

moment.tz(timestamp, "America/Los_Angeles").format(); // 2014-06-22T09:21:08-07:00
moment(timestamp).tz("America/Los_Angeles").format(); // 2014-06-22T09:21:08-07:00

moment.tz(date, "America/Los_Angeles").format();      // 2014-06-22T09:21:08-07:00
moment(date).tz("America/Los_Angeles").format();      // 2014-06-22T09:21:08-07:00

moment.tz("2012-03-11 01:59:59", "America/New_York").format() // 2012-03-11T01:59:59-05:00
moment.tz("2012-03-11 02:00:00", "America/New_York").format() // 2012-03-11T03:00:00-04:00
moment.tz("2012-03-11 02:59:59", "America/New_York").format() // 2012-03-11T03:59:59-04:00
moment.tz("2012-03-11 03:00:00", "America/New_York").format() // 2012-03-11T03:00:00-04:00

moment.tz("2012-11-04 00:59:59", "America/New_York"); // 2012-11-04T00:59:59-04:00
moment.tz("2012-11-04 01:00:00", "America/New_York"); // 2012-11-04T01:00:00-04:00
moment.tz("2012-11-04 01:59:59", "America/New_York"); // 2012-11-04T01:59:59-04:00
moment.tz("2012-11-04 02:00:00", "America/New_York"); // 2012-11-04T02:00:00-05:00

moment.tz("2012-11-04 01:00:00-04:00", "America/New_York"); // 2012-11-04T01:00:00-04:00
moment.tz("2012-11-04 01:00:00-05:00", "America/New_York"); // 2012-11-04T01:00:00-05:00

moment.tz([2012, 0], 'America/New_York').format('z');    // EST
moment.tz([2012, 5], 'America/New_York').format('z');    // EDT
moment.tz([2012, 0], 'America/Los_Angeles').format('z'); // PST
moment.tz([2012, 5], 'America/Los_Angeles').format('z'); // PDT

// Denver observes DST
moment.tz([2012, 0], 'America/Denver').format('Z z');  // -07:00 MST
moment.tz([2012, 5], 'America/Denver').format('Z z');  // -06:00 MDT
// Phoenix does not observe DST
moment.tz([2012, 0], 'America/Phoenix').format('Z z'); // -07:00 MST
moment.tz([2012, 5], 'America/Phoenix').format('Z z'); // -07:00 MST

moment.tz('2016-01-01', 'America/Chicago').format('z');    // CST
moment.tz('2016-01-01', 'Asia/Shanghai').format('z');      // CST

moment.tz([2012, 0], 'America/New_York').zoneAbbr(); // EST
moment.tz([2012, 5], 'America/New_York').zoneAbbr(); // EDT

var abbrs: {[prop: string]: string} = {
    EST : 'Eastern Standard Time',
    EDT : 'Eastern Daylight Time',
    CST : 'Central Standard Time',
    CDT : 'Central Daylight Time',
    MST : 'Mountain Standard Time',
    MDT : 'Mountain Daylight Time',
    PST : 'Pacific Standard Time',
    PDT : 'Pacific Daylight Time',
};

moment.fn.zoneName = function () {
    var abbr = this.zoneAbbr();
    return abbrs[abbr] || abbr;
};

moment.tz([2012, 0], 'America/New_York').format('zz');    // Eastern Standard Time
moment.tz([2012, 5], 'America/New_York').format('zz');    // Eastern Daylight Time
moment.tz([2012, 0], 'America/Los_Angeles').format('zz'); // Pacific Standard Time
moment.tz([2012, 5], 'America/Los_Angeles').format('zz'); // Pacific Daylight Time

moment.tz('America/Los_Angeles').format('z')  // "PDT"     (abbreviation)
moment.tz('Asia/Magadan').format('z')         // "+11"     (3-char offset)
moment.tz('Asia/Colombo').format('z')         // "+0530"   (5-char offset)

moment.tz.setDefault("America/New_York");

moment.tz.setDefault();

moment.tz.guess(); // America/Chicago

const unpackedZone: moment.UnpackedZone = {
    name    : 'America/Los_Angeles',          // the unique identifier
    abbrs   : ['PDT', 'PST'],                 // the abbreviations
    untils  : [1414918800000, 1425808800000], // the timestamps in milliseconds
    offsets : [420, 480]                      // the offsets in minutes
}

moment.tz.zone('America/Los_Angeles').abbr(1403465838805); // PDT
moment.tz.zone('America/Los_Angeles').abbr(1388563200000); // PST

moment.tz.zone('America/Los_Angeles').offset(1403465838805); // 420
moment.tz.zone('America/Los_Angeles').offset(1388563200000); // 480

var zone = moment.tz.zone('America/New_York');
zone.parse(Date.UTC(2012, 2, 19, 8, 30)); // 240

var zone = moment.tz.zone('America/New_York');
zone.parse(Date.UTC(2012, 2, 11, 1, 59)); // 300
zone.parse(Date.UTC(2012, 2, 11, 2, 0)); // 240

const unpackedZone2: moment.UnpackedZone = {
    name    : 'America/Los_Angeles',
    abbrs   : ['PST', 'PDT','PST', 'PDT', 'PST', 'PDT', 'PST', 'PDT', 'PST', 'PDT', 'PST'],
    untils  : [1394359200000, 1414918800000, 1425808800000, 1446368400000, 1457863200000, 1478422800000, 1489312800000, 1509872400000, 1520762400000, 1541322000000, null],
    offsets : [480, 420, 480, 420, 480, 420, 480, 420, 480, 420, 480]
}

'America/Los_Angeles|PST PDT|80 70|01010101010|1Lzm0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0'

moment.tz.add('America/Los_Angeles|PST PDT|80 70|01010101010|1Lzm0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0');
moment.tz.link('America/Los_Angeles|US/Pacific');
moment.tz("2013-12-01", "America/Los_Angeles").format(); // 2013-12-01T00:00:00-08:00
moment.tz("2013-12-01", "US/Pacific").format();          // 2013-12-01T00:00:00-08:00

moment.tz.add('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');

moment.tz.add([
    'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
    'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
]);

moment.tz.link('America/Los_Angeles|US/Pacific');

moment.tz.link([
    'America/Los_Angeles|US/Pacific',
    'America/New_York|US/Eastern'
]);

const packedZoneBundle: moment.PackedZoneBundle = {
    version : '2014e',
    zones : [
        'America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0',
        'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
    ],
    links : [
        'America/Los_Angeles|US/Pacific',
        'America/New_York|US/Eastern'
    ]
}

moment.tz.load({
    version : '2014e',
    zones : ['packed', 'packed'],
    links : ['packedlink', 'packedlink']
})

moment.tz.zone("UnloadedZone"); // null
moment.tz.add("UnloadedZone|UZ|0|0|");
moment.tz.zone("UnloadedZone"); // Zone { name : "UnloadedZone", ...}

moment.tz.names(); // ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", ...]

// in moment-timezone.js
moment.tz.unpack
moment.tz.unpackBase60
// in moment-timezone-utils.js
moment.tz.pack
moment.tz.packBase60
moment.tz.createLinks
moment.tz.filterYears
moment.tz.filterLinkPack

var unpacked = {
    name    : 'Indian/Mauritius',
    abbrs   : ['LMT', 'MUT', 'MUST', 'MUT', 'MUST', 'MUT'],
    offsets : [-230, -240, -300, -240, -300, -240],
    untils  : [-1988164200000, 403041600000, 417034800000, 1224972000000, 1238274000000, null]
};
moment.tz.pack(unpacked); // "Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0"

var packed = "Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0";

moment.tz.unpack(packed);
// {
//     name    : 'Indian/Mauritius',
//     abbrs   : ['LMT', 'MUT', 'MUST', 'MUT', 'MUST', 'MUT'],
//     offsets : [-230, -240, -300, -240, -300, -240],
//     untils  : [-1988164200000, 403041600000, 417034800000, 1224972000000, 1238274000000, null]
// };

moment.tz.packBase60(9);    // 9
moment.tz.packBase60(10);   // a
moment.tz.packBase60(59);   // X
moment.tz.packBase60(1337); // mh

moment.tz.packBase60(1.1667,   1); // 1.a
moment.tz.packBase60(20.12345, 3); // k.7op
moment.tz.packBase60(59,       1); // X

moment.tz.packBase60(1.1667, 1); // 1.a
moment.tz.packBase60(0.1667, 1); // .a

moment.tz.packBase60(1/6, 1); // .a
moment.tz.packBase60(1/6, 5); // .a
moment.tz.packBase60(59, 5);  // X

moment.tz.unpackBase60('9');     // 9
moment.tz.unpackBase60('a');     // 10
moment.tz.unpackBase60('X');     // 59
moment.tz.unpackBase60('mh');    // 1337
moment.tz.unpackBase60('1.9');   // 1.15
moment.tz.unpackBase60('k.7op'); // 20.123449074074074

var unlinked: moment.UnpackedZoneBundle = {
    zones : [
        {name:"Zone/One",abbrs:["OST","ODT"],offsets:[60,120],untils:[403041600000,417034800000]},
        {name:"Zone/Two",abbrs:["OST","ODT"],offsets:[60,120],untils:[403041600000,417034800000]}
    ],
    links: [],
    version : "2014x-doc-example"
};

moment.tz.createLinks(unlinked);

// {
//     zones : [
//         {name:"Zone/One",abbrs:["OST","ODT"],offsets:[60,120],untils:[403041600000,417034800000]}
//     ],
//     links : ["Zone/One|Zone/Two"],
//     version : "2014x-doc-example"
// }

var all    = { name : "America/Los_Angeles", abbrs : ['EST', 'EDT'], offsets : [1, 2], untils : [1, 2]};
var subset = moment.tz.filterYears(all, 2012, 2016);
all.untils.length;    // 186
subset.untils.length; // 11

var all    = { name : "America/Los_Angeles", abbrs : ['EST', 'EDT'], offsets : [1, 2], untils : [1, 2]};
var subset = moment.tz.filterYears(all, 2012);
all.untils.length;    // 186
subset.untils.length; // 3