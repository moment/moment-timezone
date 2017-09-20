import * as moment from 'moment';

// require('moment-timezone') === require('moment')
export = moment;

declare module 'moment' {
    interface Moment {
        /** Set the timezone and update the offset */
        tz(zone: string): Moment;
        /** Return the timezone name or undefined if a zone has not yet been set */
        tz(): string | undefined;

        /** Get the zone abbreviation. This is what moment.js uses when formatting the z token. */
        zoneAbbr(): string;

        /** Get the zone long form name.  This is what moment.js uses when formatting the zz token. */
        zoneName(): string;
    }

    // Match normal moment constructor but with an extra timezone argument
    // Here's a copy-paste of the normal moment constructor's signature, from https://github.com/moment/moment/blob/develop/moment.d.ts#L1-L2
    // declare function moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, strict?: boolean): moment.Moment;
    // declare function moment(inp?: moment.MomentInput, format?: moment.MomentFormatSpecification, language?: string, strict?: boolean): moment.Moment;
    
    // Should be sorted from tightest to loosest.  TypeScript picks the first signature that matches, going top to bottom.

    /** create a moment with a time zone */
    function tz(inp: MomentInput, format: MomentFormatSpecification, language: string, strict: boolean, zone: string): Moment;
    /** create a moment with a time zone */
    function tz(inp: MomentInput, format: MomentFormatSpecification, language: string, zone: string): Moment;
    /** create a moment with a time zone */
    function tz(inp: MomentInput, format: MomentFormatSpecification, strict: boolean, zone: string): Moment;
    /** create a moment with a time zone */
    function tz(inp: MomentInput, format: MomentFormatSpecification, zone: string): Moment;
    /** create a moment with a time zone */
    function tz(inp: MomentInput, zone: string): Moment;
    /** create a moment with a time zone */
    function tz(zone?: string): Moment;

    namespace tz {
        /** Version of moment-timezone */
        const version: string;

        /**
         * Change the default timezone of newly created Moment instances.
         * By default new instances are created in the local timezone.
         */
        function setDefault(zone: string): typeof moment;

        /** Reset the default timezone to local. */
        function setDefault(): typeof moment;

        /**
         * Retrieve or guess the user's timezone.  Uses the browser's Internationalization API if available.
         * Otherwise, guesses by sampling offsets from different points in time and comparing them to available zone data.
         */
        function guess(): string;

        interface Zone extends UnpackedZone {}
        class Zone {
            /** Get the abbreviation for a given timestamp from a Zone. */
            abbr(timestamp: number): string;

            /** Get the offset for a given timestamp from a Zone. */
            offset(timestamp: number): number;

            /** Parse an offset for a timestamp constructed from Date.UTC in that zone. */
            parse(timestamp: number): number;
        }

        /** Return a timezone by name or null if timezone by that name is not loaded. */
        function zone(name: string): Zone | null;

        /** Add zone data for a timezone. */
        function add(packedZone: string): void;
        /** Add zone data for multiple timezones. */
        function add(packedZones: Array<string>): void;

        /** Link two zone names to the same data */
        function link(packedLink: string): void;
        /** Add multiple links at once */
        function link(packedLinks: Array<string>): void;

        /** load a bundle of zone data and links */
        function load(bundle: PackedZoneBundle): void;

        /** get a list of all available time zone names */
        function names(): Array<string>;

        /** Convert a packed string to an unpacked zone data object */
        function unpack(packedZone: string): UnpackedZone;
        /** Convert a base 60 string to a base 10 number. */
        function unpackBase60(base60String: string): number;
    }

    type Zone = tz.Zone;

    /** Parsed / unpacked zone data. */
    interface UnpackedZone {
        /** The uniquely identifying name of the time zone. */
        name: string;

        /** zone abbreviations */
        abbrs: Array<string>;
        
        /** (measured in milliseconds) */
        untils: Array<number | null>;

        /** (measured in minutes) */
        offsets: Array<number>;
    }

    /** Bundle of zone data and links for multiple timezones */
    interface PackedZoneBundle {
        version: string;
        zones: Array<string>;
        links: Array<string>;
    }

    /** Bundle of zone data and links for multiple timezones */
    interface UnpackedZoneBundle {
        version: string;
        zones: Array<UnpackedZone>;
        links: Array<string>;
    }

}
