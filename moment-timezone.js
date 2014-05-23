// moment-timezone.js
// version : 0.0.6
// author : Tim Wood
// license : MIT
// github.com/timrwood/moment-timezone

(function () {
	"use strict";

	var VERSION = "0.0.6";

	function onload(moment) {
		var oldZoneName = moment.fn.zoneName,
			oldZoneAbbr = moment.fn.zoneAbbr,

			zonesData = {},
			zones = {},
			links = {};

		if (moment.tz !== undefined) {
			// Do not load moment-timezone a second time.
			return moment;
		}

		function toInt(string) {
			var i, charCode,
				num,
				out = 0,
				sign = 1;

			for (i = 0; i < string.length; i++) {
				charCode = string.charCodeAt(i);
				if (charCode === 45) {
					sign = -1;
					continue;
				}
				if (charCode > 96) {
					num = charCode - 87;
				} else if (charCode > 64) {
					num = charCode - 29;
				} else {
					num = charCode - 48;
				}
				out = 60 * out + num;
			}

			return out * sign;
		}

		function arrayToInt (array) {
			for (var i = 0; i < array.length; i++) {
				array[i] = toInt(array[i]);
			}
		}

		function intToUntil (array) {
			for (var i = 0; i < array.length; i++) {
				array[i] = (array[i - 1] || 0) + (array[i] * 1000);
			}

			array.push(Infinity);
		}

		function Zone (data) {
			this.name    = data[0];
			this.abbrs   = data[1].split(' ');
			this.offsets = data[2].split(' ');
			this.indices = data[3].split('');
			this.untils  = data[4].split(' ');

			arrayToInt(this.offsets);
			arrayToInt(this.indices);
			arrayToInt(this.untils);

			intToUntil(this.untils);
		}

		Zone.prototype = {
			_index : function (timestamp) {
				var target = +timestamp,
					untils = this.untils,
					i;

				for (i = 0; i < untils.length; i++) {
					if (target < untils[i]) {
						return this.indices[i];
					}
				}
			},

			abbr : function (mom) {
				return this.abbrs[this._index(mom)];
			},

			offset : function (mom) {
				return this.offsets[this._index(mom)] / 60;
			}
		};

		/************************************
			Global Methods
		************************************/

		function normalizeName (name) {
			return (name || '').toLowerCase().replace(/\//g, '_');
		}

		function addZones (zones) {
			var i;
			for (i = 0; i < zones.length; i++) {
				addZone(zones[i]);
			}
		}

		function addZone (zoneString) {
			var parts = zoneString.split('|'),
				name = normalizeName(parts[0]);

			zones[name] = null;
			zonesData[name] = parts;
		}

		function addLinks(data) {
			var i, link;
			for (i = 0; i < data.length; i++) {
				link = data[i].split('|');
				links[normalizeName(link[0])] = normalizeName(link[1]);
			}
		}

		function getZone (name) {
			var machineName = normalizeName(name);
			if (links[machineName]) {
				machineName = links[machineName];
			}
			if (!zones[machineName] && zonesData[machineName]) {
				zones[machineName] = new Zone(zonesData[machineName]);
			}
			return zones[machineName];
		}

		function add (data) {
			if (!data) {
				return;
			}
			addZones(data);
		}

		// overwrite moment.updateOffset
		moment.updateOffset = function (mom, keepTime) {
			var offset;
			if (mom._z) {
				offset = mom._z.offset(mom);
				if (Math.abs(offset) < 16) {
					offset = offset / 60;
				}
				mom.zone(offset, keepTime);
			}
		};

		function getZones() {
			var output = [],
				zoneName;

			for (zoneName in zones) {
				if (zones.hasOwnProperty(zoneName)) {
					output.push(zones[zoneName]);
				}
			}

			return output;
		}

		moment.fn.tz = function (name) {
			if (name) {
				this._z = getZone(name);
				if (this._z) {
					moment.updateOffset(this);
				}
				return this;
			}
			if (this._z) {
				return this._z.name;
			}
		};

		moment.fn.zoneName = function () {
			if (this._z) {
				return this._z.abbr(this);
			}
			return oldZoneName.call(this);
		};

		moment.fn.zoneAbbr = function () {
			if (this._z) {
				return this._z.abbr(this);
			}
			return oldZoneAbbr.call(this);
		};

		// Make sure moment's clone includes the newly added properties
		moment.momentProperties._z = null;

		moment.tz = function () {
			var args = [], i, len = arguments.length - 1;
			for (i = 0; i < len; i++) {
				args[i] = arguments[i];
			}
			var m = moment.apply(null, args);
			var preTzOffset = m.zone();
			m.tz(arguments[len]);
			return m.add('minutes', m.zone() - preTzOffset);
		};

		moment.tz.add = add;
		moment.tz.link = addLinks;
		moment.tz.zones = getZones;

		moment.tz.version = VERSION;

		moment.tz.zoneExists = function (name) {
			return !!getZone(name);
		};

		return moment;
	}

	if (typeof define === "function" && define.amd) {
		define("moment-timezone", ["moment"], onload);
	} else if (typeof module !== 'undefined') {
		module.exports = onload(require('moment'));
	} else if (typeof window !== "undefined" && window.moment) {
		onload(window.moment);
	}
}).apply(this);
