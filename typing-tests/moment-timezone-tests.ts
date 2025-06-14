import moment = require('../index');

const june = moment('2014-06-01T12:00:00Z');
june.tz('America/Los_Angeles').format('ha z');

const a = moment.tz('2013-11-18 11:55', 'America/Toronto');
const b = moment.tz('May 12th 2014 8PM', 'MMM Do YYYY hA', 'America/Toronto');
const c = moment.tz(1403454068850, 'America/Toronto');
const d = moment.tz('May 12th 2014 8PM', 'MMM Do YYYY hA', true, 'America/Toronto');

a.tz();

const name: string = moment().tz();
const converted: moment.Moment = moment().tz('America/Los_Angeles');
moment().tz('America/Los_Angeles', true);

const num = 1367337600000;
const arr = [2013, 5, 1];
const str = '2013-12-01';
const date = new Date(2013, 4, 1);
const mo = moment([2013, 4, 1]);
const obj = { year : 2013, month : 5, day : 1 };
const format = 'YYYY-MM-DD';
const formats = ['YYYY-MM-DD', 'YYYY/MM/DD'];
const formatsIncludingSpecial = ['YYYY-MM-DD', moment.ISO_8601];
const language = 'en';

moment.tz();
moment.tz('America/Los_Angeles');
moment.tz('America/Los_Angeles').tz('Asia/Tomsk', true);

moment.tz(num, 'America/Los_Angeles');
moment.tz(arr, 'America/Los_Angeles');
moment.tz(str, 'America/Los_Angeles');
moment.tz(str, format, 'America/Los_Angeles');
moment.tz(str, format, true, 'America/Los_Angeles');
moment.tz(str, format, language, 'America/Los_Angeles');
moment.tz(str, format, language, true, 'America/Los_Angeles');
moment.tz(str, formats, 'America/Los_Angeles');
moment.tz(str, formats, true, 'America/Los_Angeles');
moment.tz(str, formats, language, 'America/Los_Angeles');
moment.tz(str, formats, language, true, 'America/Los_Angeles');
moment.tz(str, moment.ISO_8601, 'America/Los_Angeles');
moment.tz(str, moment.ISO_8601, true, 'America/Los_Angeles');
moment.tz(str, moment.ISO_8601, language, 'America/Los_Angeles');
moment.tz(str, moment.ISO_8601, language, true, 'America/Los_Angeles');
moment.tz(str, formatsIncludingSpecial, 'America/Los_Angeles');
moment.tz(str, formatsIncludingSpecial, true, 'America/Los_Angeles');
moment.tz(str, formatsIncludingSpecial, language, 'America/Los_Angeles');
moment.tz(str, formatsIncludingSpecial, language, true, 'America/Los_Angeles');

moment.tz(date, 'America/Los_Angeles');
moment.tz(mo, 'America/Los_Angeles');
moment.tz(obj, 'America/Los_Angeles');

const zone1: moment.MomentZone | null = moment.tz.zone('America/Los_Angeles');
if (zone1 != null) {
    zone1.abbr(1403465838805) === 'PDT';
    zone1.offset(1403465838805) === 420; // deprecated
    zone1.utcOffset(1403465838805) === 420;
}
const zone2: moment.MomentZone | null = moment.tz.zone('America/New_York');
if (zone2 != null) {
    zone2.parse(Date.UTC(2012, 2, 19, 8, 30)) === 240;
    const zoneCountries: string[] = zone2.countries();
}

moment.tz.Zone();
const zone3: moment.MomentZone = moment.tz.Zone('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');

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

moment.tz.load({
    zones : [],
    links : [],
    version : '2014e'
});

const unpacked: moment.UnpackedZone = moment.tz.unpack('America/Los_Angeles|PST PDT|80 70|0101|1Lzm0 1zb0 Op0');
const unpacked2: number = moment.tz.unpackBase60('1Lzm0');

const v1: string = moment.tz.version;
const v2: string = moment.tz.dataVersion;

const names: string[] = moment.tz.names();

const def1: typeof moment = moment.tz.setDefault('America/Los_Angeles');
const def2: typeof moment = moment.tz.setDefault();

const guess1: string = moment.tz.guess();
const guess2: string = moment.tz.guess(true);

const zoneAbbr: string = moment.tz('America/Los_Angeles').zoneAbbr();
const zoneName: string = moment.tz('America/Los_Angeles').zoneName();
const zoneId: string | undefined = moment.tz('2013-11-18 11:55').tz();

const zones1: string[] = moment.tz.zonesForCountry('US');
const zones2: moment.MomentZoneOffset[] = moment.tz.zonesForCountry('CN', true);
const zones3: string[] = moment.tz.zonesForCountry('GB', false);

const countries: string[] = moment.tz.countries();
