// Type definitions for moment-timezone.js
// Project: http://momentjs.com/timezone/
// Definitions by: Michel Salib <https://github.com/michelsalib>
//                 Alan Brazil Lins <https://github.com/alanblins>
//                 Agustin Carrasco <https://github.com/asermax>
//                 Borys Kupar <https://github.com/borys-kupar>
//                 Anthony Rainer <https://github.com/pristinesource>
// Original source: https://github.com/DefinitelyTyped/DefinitelyTyped
// Migrated here from DefinitelyTyped in release moment-timezone@0.5.30,
// then maintained by the Moment team

import moment = require('moment');

declare module 'moment' {
    /** Parsed / unpacked zone data. */
    interface UnpackedZone {
        name: string;
        abbrs: string[];
        untils: number[];
        offsets: number[];
        population?: number;
    }

    interface MomentZone {
        name: string;
        abbrs: string[];
        untils: number[];
        offsets: number[];
        population: number;

        abbr(timestamp: number): string;
        /**
         * @deprecated use `.utcOffset()`
         */
        offset(timestamp: number): number;
        utcOffset(timestamp: number): number;
        parse(timestamp: number): number;
        countries(): string[];
    }

    interface MomentZoneOffset {
        name: string;
        offset: number;
    }

    interface MomentTimezone {
        (): moment.Moment;
        (timezone: string): moment.Moment;
        (date: number, timezone: string): moment.Moment;
        (date: number[], timezone: string): moment.Moment;
        (date: string, timezone: string): moment.Moment;
        (date: string, format: moment.MomentFormatSpecification, timezone: string): moment.Moment;
        (date: string, format: moment.MomentFormatSpecification, strict: boolean, timezone: string): moment.Moment;
        (date: string, format: moment.MomentFormatSpecification, language: string, timezone: string): moment.Moment;
        (date: string, format: moment.MomentFormatSpecification, language: string, strict: boolean, timezone: string): moment.Moment;
        (date: Date, timezone: string): moment.Moment;
        (date: moment.Moment, timezone: string): moment.Moment;
        (date: any, timezone: string): moment.Moment;

        version: string;
        dataVersion: string;
        moveInvalidForward: boolean;
        moveAmbiguousForward: boolean;

        zone(timezone: string): MomentZone | null;
        Zone(packedZoneString?: string): MomentZone;

        add(packedZoneString: string): void;
        add(packedZoneString: string[]): void;

        link(packedLinkString: string): void;
        link(packedLinkString: string[]): void;

        load(data: { version: string; links: string[]; zones: string[]; countries?: string[] }): void;

        names(): string[];
        zonesForCountry<T extends true>(country: string, with_offset: T): T extends true ? MomentZoneOffset[] : never;
        zonesForCountry<T extends false>(country: string, with_offset?: T): T extends false ? string[] : never;
        zonesForCountry(country: string, with_offset?: boolean): MomentZoneOffset[] | string[];
        countries(): string[];
        guess(ignoreCache?: boolean): string;

        setDefault(timezone?: string): typeof moment;

        unpack(packedZoneString: string): UnpackedZone;
        unpackBase60(packedString: string): number;
    }

    interface Moment {
        tz(): string | undefined;
        tz(timezone: string, keepLocalTime?: boolean): moment.Moment;
        zoneAbbr(): string;
        zoneName(): string;
    }

    const tz: MomentTimezone;
}

// require("moment-timezone") === require("moment")
export = moment;
