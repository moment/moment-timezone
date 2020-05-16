import * as moment from 'moment';

// require('moment-timezone') === require('moment')
export = moment;

declare module 'moment' {
    namespace tz {
        /** Converts zone data in the unpacked format to the packed format. */
        function pack(unpackedObject: UnpackedZone): string;

        /** Convert a base 10 number to a base 60 string. */
        function packBase60(input: number, precision?: number): string;

        /** Create links out of two zones that share data.
         * @returns A new ZoneBundle with duplicate zone data replaced by links
         */
        function createLinks(unlinked: UnpackedZoneBundle): PackedZoneBundle;

        /**
         * Filter out data for years outside a certain range.
         * @return a new, filtered UnPackedZone object
         */
        function filterYears(unpackedZone: UnpackedZone, startYear: number, endYear: number): UnpackedZone;
        /**
         * Filter out data for years outside a certain range.
         * @return a new, filtered UnPackedZone object
         */
        function filterYears(unpackedZone: UnpackedZone, startAndEndYear: number): UnpackedZone;

        /**
         * Combines packing, link creation, and subsetting of years into one simple interface.
         * Pass in an unpacked bundle, start year, and end year and get a filtered, linked, packed bundle back.
         */
        function filterLinkPack(unpackedBundle: UnpackedZoneBundle, startYear: number, endYear: number): PackedZoneBundle;
        /**
         * Combines packing, link creation, and subsetting of years into one simple interface.
         * Pass in an unpacked bundle, start year, and end year and get a filtered, linked, packed bundle back.
         */
        function filterLinkPack(unpackedBundle: UnpackedZoneBundle, startAndEndYear: number): PackedZoneBundle;
    }
}