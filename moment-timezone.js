//! moment-timezone.js
//! version : 0.3.0
//! author : Tim Wood
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof define === 'function' && define.amd) {
		define(['moment'], factory);                 // AMD
	} else if (typeof exports === 'object') {
		module.exports = factory(require('moment')); // Node
	} else {
		factory(root.moment);                        // Browser
	}
}(this, function (moment) {
	"use strict";

	// Do not load moment-timezone a second time.
	if (moment.tz !== undefined) { return moment; }

	var VERSION = "0.3.0",
		zones = {},
		links = {},
		countries = {},

		momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name    : data[0],
			abbrs   : mapIndices(data[1].split(' '), indices),
			offsets : mapIndices(offsets, indices),
			untils  : untils
		};
	}

	function unpackCountry (string) {
		var data = string.split('|');

		return {
			abbr: data[0],
			name: data[1],
			zones: data[2].split(' ')
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name    = unpacked.name;
			this.abbrs   = unpacked.abbrs;
			this.untils  = unpacked.untils;
			this.offsets = unpacked.offsets;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			for (i = 0; i < untils.length; i++) {
				if (target < untils[i]) {
					return i;
				}
			}
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			return this.offsets[this._index(mom)];
		},

		offsetString: function (mom) {
			return moment.tz(mom, this.name).format('ZZ');
		}
	};

	/************************************
		Country object
	************************************/

	function Country (packedString) {
		if (packedString) {
			this._set(unpackCountry(packedString));
		}
	}

	Country.prototype = {
		_set : function (unpacked) {
			this.name    = unpacked.name;
			this.abbr    = unpacked.abbr;
			this.zones   = unpacked.zones;
		}
	};

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, zone, zoneName;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			zone = new Zone(packed[i]);
			zoneName = normalizeName(zone.name);
			zones[zoneName] = zone;
			upgradeLinksToZones(zoneName);
		}
	}

	function addCountry (packed) {
		var i, country, unpackedCountry;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			country = new Country(packed[i]);
			countries[country.abbr] = country;
		}
	}

	function getZone (name) {
		return zones[normalizeName(name)] || null;
	}

	function _getCurrentZoneInfo (name) {
		var now = moment.utc().valueOf();
		var zone = getZone(name);

		if(!zone) {
			console.error("No data found for zone " + name);
			return {};
		}
		
		return {
			abbr: zone.abbr(now),
			offset: zone.offset(now),
			offsetString: zone.offsetString(now)
		};
	}

	function getNames () {
		var i, out = [];

		for (i in zones) {
			if (zones.hasOwnProperty(i) && zones[i]) {
				out.push(zones[i].name);
			}
		}

		return out.sort();
	}

	function getCountries () {
		var i, out = [];

		for (i in countries) {
			if (countries.hasOwnProperty(i) && countries[i]) {
				out.push(countries[i]);
			}
		}

		return out;
	}

	function getCountry (countryCode) {
		return countries[countryCode] || null;
	}

	function getZonesOfCountry (countryCode) {
		var i, countryZones = [];
		var country = getCountry(countryCode);

		if (!country) {
			return null;
		}

		var zone, zoneInfo, clonedZone;
		for (i=0; i < country.zones.length; i++) {
			
			zone = getZone(country.zones[i]);
			if(!zone) {
				console.error("No data found for zone " + country.zones[i]);
				continue;
			}
			// Create a new zone as we don't want to corrupt the global "zones" object.
			clonedZone = new Zone();
			clonedZone._set(zone);

			// The zone objects returned here will have following additional properties apart from usual Zone Object properties
			// currentAbbr: the current abbr of this zone (PST vs PDT etc.)
			// currentOffset: the offset(in minutes) currently in effect
			// currentOffsetString: the offset string(+0430, -0700 etc.) in effect
			zoneInfo = _getCurrentZoneInfo(clonedZone.name);
			clonedZone.currentAbbr 			= zoneInfo.abbr;
			clonedZone.currentOffset 		= zoneInfo.offset;
			clonedZone.currentOffsetString  = zoneInfo.offsetString;
			countryZones.push(clonedZone);
		}

		return countryZones;
	}

	function addLink (aliases) {
		var i, alias;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');
			pushLink(alias[0], alias[1]);
			pushLink(alias[1], alias[0]);
		}
	}

	function upgradeLinksToZones (zoneName) {
		if (!links[zoneName]) {
			return;
		}

		var i,
			zone = zones[zoneName],
			linkNames = links[zoneName];

		for (i = 0; i < linkNames.length; i++) {
			copyZoneWithName(zone, linkNames[i]);
		}

		links[zoneName] = null;
	}

	function copyZoneWithName (zone, name) {
		var linkZone = zones[normalizeName(name)] = new Zone();
		linkZone._set(zone);
		linkZone.name = name;
	}

	function pushLink (zoneName, linkName) {
		zoneName = normalizeName(zoneName);

		if (zones[zoneName]) {
			copyZoneWithName(zones[zoneName], linkName);
		} else {
			links[zoneName] = links[zoneName] || [];
			links[zoneName].push(linkName);
		}
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		addCountry(data.countries);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		return !!(m._a && (m._tzm === undefined));
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz (input) {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			zone = getZone(name),
			out  = moment.utc.apply(null, args);

		if (zone && !moment.isMoment(input) && needsOffset(out)) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz._countries 	= countries;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.addCountry 	= addCountry;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.names        = getNames;
	tz.countries    = getCountries;
	tz.country 		= getCountry;
	tz.zonesOfCountry = getZonesOfCountry;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.unpackCountry= unpackCountry;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.defaultZone = null;

	moment.updateOffset = function (mom, keepTime) {
		var offset;
		if (mom._z === undefined) {
			mom._z = moment.defaultZone;
		}
		if (mom._z) {
			offset = mom._z.offset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			if (mom.utcOffset !== undefined) {
				mom.utcOffset(-offset, keepTime);
			} else {
				mom.zone(offset, keepTime);
			}
		}
	};

	fn.tz = function (name) {
		if (name) {
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName = abbrWrap(fn.zoneName);
	fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
	fn.utc      = resetZoneWrap(fn.utc);

	moment.tz.setDefault = function(name) {
		if (major < 2 || (major === 2 && minor < 9)) {
			logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
		}
		moment.defaultZone = name ? getZone(name) : null;
		return moment;
	};

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	// INJECT DATA

	return moment;
}));
