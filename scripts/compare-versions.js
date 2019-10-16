/* jshint esversion: 6 */

const assert = require('assert');

const FROM_YEAR = 1970;
const TO_YEAR = 2050;

compareVersions('2019b', 'latest');

function compareVersions(v1, v2, timezones = 'all') {

    /**
     * Get moment-timezone version v1
     */
    const version1 = require("../moment-timezone");
    version1.tz.load(require(`../data/packed/${v1}.json`));

    /**
     * Get timezone names and dates from v1
     */
    const names1 = version1.tz.names();
    const dates1 = getFormattedDates(version1, timezones);

    /**
     * Clear cache
     */
    delete require.cache[require.resolve('moment')]
    delete require.cache[require.resolve('../moment-timezone')]

    /**
     * Get moment-timezone version v2
     */
    var version2 = require("../moment-timezone");
    version2.tz.load(require(`../data/packed/${v2}.json`));

    /**
     * Get timezone names and dates from v2
     */
    const names2 = version1.tz.names();
    const dates2 = getFormattedDates(version2, timezones);

    console.log(`Comparing versions ${v1} and ${v2} from ${FROM_YEAR} to ${TO_YEAR}`);

    /**
     * Compare timezone names
     */
    names1.forEach((name1, i) => {
        if (name1 !== names2[i]) {
            console.log(`${name1} !== ${names2[i]}`);
        }
    });

    /**
     * Compare dates
     */
    dates1.forEach((date1, i) => {
        if (date1.formatted !== dates2[i].formatted) {
            console.log(`${date1.zone}: ${date1.date} = ${dates1[i].formatted} in ${v1}, ${dates2[i].formatted} in ${v2}`)
        }
    });
}

/**
 * Iterates from FROM_YEAR to TO_YEAR
 * and returns formatted dates for each timezone for each month
 *
 * @param momentInstance - instance of moment with timezone
 * @param timezones = 'all' or array of timezones you want to check
 * @return {Array}
 */
function getFormattedDates (momentInstance, timezones = 'all') {
    const names = timezones === 'all' ? momentInstance.tz.names() : timezones;
    const dates = [];

    // ensure that names are equal
    names.forEach((name, i) => {
        for (let year = FROM_YEAR; year <= TO_YEAR; year++) {
            for (let month = 1; month <= 12; month++) {
                const monthFormatted = month < 10 ? '0' + month : month;
                dates.push({
                    zone: name,
                    date: `${year}-${monthFormatted}-01T00:00:00Z`,
                    formatted: momentInstance(`${year}-${monthFormatted}-01T00:00:00Z`).tz(name).format()
                });
            }
        }
    });

    return dates;
}
