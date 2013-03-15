// moment-timezone.js
// version : 0.0.1
// author : Tim Wood
// license : MIT
// github.com/timrwood/moment-timezone

(function () {

	var moment = require('./moment'),

		zoneNames = "africa antarctica asia australasia europe northamerica pacificnew southamerica".split(' '),

		defaultRule,
		rules = {},
		ruleSets = {},
		zones = {},
		zoneSets = {};

	/************************************
		Rules
	************************************/

	/*
	 * Rule
	 *
	 * @param _name    The string identifier for the timezone name (eg. US, NYC, Mexico...)
	 * @param _from    The start year
	 * @param _to      The end year (if falsy, will use the start year)
	 * @param _in      The month to start on (zero indexed)
	 * @param _on      The day to start on. A colon separated tuple of a letter and a number
	 *                 eg. "l:1", "e:20", "f:1"
	 *                 "l" The last on this day of week (while num > 7, skip a week)
	 *                 "f" The first of this day of week (while num > 7, skip a week)
	 *                 "e" This exact date of the month
	 * @param _at      The number of minutes into the day that the change happens on
	 * @param _offset  The number of minutes to add to the offset. Usually 60 or 0
	 * @param _letters The string to replace the Zone format string with
	 */
	function Rule (_name, _from, _to, _in, _on, _at, _offset, _letters) {
		this._name    = _name;
		this._from    = +_from;
		this._to      = +_to;
		this._month   = +_in;

		this._dayVal  = +_on;
		if (_on.indexOf(':') > -1) {
			_on = _on.split(':');
			this._dowVal = +_on[0];
			this._dayVal = +_on[1];
			this.date = Rule.prototype._dateFirst;
		} else if (this._dayVal < 1) {
			this._dayVal = -this._dayVal;
			this.date = Rule.prototype._dateLast;
		}

		if (_at.indexOf('u') > -1) {
			this.utc = true;
		}

		if (_at.indexOf('s') > -1) {
			this.standard = true;
		}

		this._time    = parseInt(_at, 10);
		this.offset  = +_offset;
		this._letters = _letters;
	}

	Rule.prototype = {
		contains : function (year) {
			return (year >= this._from && year <= this._to);
		},

		letters : function () {
			return this._letters;
		},

		start : function (year) {
			year = Math.min(Math.max(year, this._from), this._to);
			return moment.utc([year, this._month, this.date(year), 0, this._time]);
		},

		date : function (year) {
			return this._dayVal;
		},

		// this method overwrites Rule.date if it uses the first day of week method
		_dateFirst : function (year) {
			var day = this._dayVal,
				dow = this._dowVal,
				firstDayOfWeek = moment([year, this._month, 1]).day(),
				output = this._dowVal + 1 - firstDayOfWeek;

			while (output < day) {
				output += 7;
			}

			return output;
		},

		// this method overwrites Rule.date if it uses the last day of week method
		_dateLast : function (year) {
			var day = this._dayVal,
				dow = day % 7,
				lastDowOfMonth = moment([year, this._month + 1, 1]).day(),
				daysInMonth = moment([year, this._month, 1]).daysInMonth(),
				output = daysInMonth + (dow - (lastDowOfMonth - 1)) - (~~(day / 7) * 7);

			if (dow >= lastDowOfMonth) {
				output -= 7;
			}
			return output;
		}
	};

	/************************************
		Rule Year
	************************************/

	function RuleYear (year, rule) {
		this.rule = rule;
		this.start = rule.start(year);
	}

	function sortRuleYears (a, b) {
		return b.start - a.start;
	}

	/************************************
		Rule Sets
	************************************/

	function RuleSet (name) {
		this.name = name;
		this.rules = [];
	}

	RuleSet.prototype = {
		add : function (rule) {
			this.rules.push(rule);
		},

		ruleYears : function (year, lastYearRule) {
			var i,
				rule,
				rules = [];

			for (i = 0; i < this.rules.length; i++) {
				rule = this.rules[i];
				if (rule.contains(year)) {
					rules.push(new RuleYear(year, rule));
				}
			}
			rules.push(new RuleYear(year - 1, lastYearRule));
			rules.sort(sortRuleYears);
			return rules;
		},

		rule : function (mom, offset, lastYearRule) {
			var rules = this.ruleYears(mom.year(), lastYearRule),
				lastOffset = 0,
				rule,
				i;

			// make sure to include the previous rule's offset
			for (i = rules.length - 1; i > -1; i--) {
				rule = rules[i];

				if (rule.rule.standard) {
					lastOffset = offset;
				}
				if (!rule.rule.utc) {
					rule.start.add('m', -lastOffset);
				}
				lastOffset = rule.rule.offset + offset;
			}

			for (i = 0; i < rules.length; i++) {
				if (mom >= rules[i].start) {
					return rules[i].rule;
				}
			}

			return defaultRule;
		},

		// Get the offset at the end of this year

		lastYearRule : function (year) {
			var i,
				rule,
				start,
				bestRule = defaultRule,
				largest = -1e30;

			for (i = 0; i < this.rules.length; i++) {
				rule = this.rules[i];
				if (year >= rule._from) {
					start = rule.start(Math.min(year, rule._to));
					if (start > largest) {
						largest = start;
						bestRule = rule;
					}
				}
			}

			return bestRule;
		}
	};

	/************************************
		Zone
	************************************/

	function Zone (name, offset, ruleSet, letters, until) {
		this.name = name;
		this.offset = +offset;
		this.ruleSet = ruleSet;
		this.letters = letters;
		this.until = moment.utc((typeof until === 'string' ? until.split(' ') : [9999]));
	}

	Zone.prototype = {
		rule : function (mom, lastYearRule) {
			return this.ruleSet.rule(mom, this.offset, lastYearRule);
		},

		lastYearRule : function (year) {
			return this.ruleSet.lastYearRule(year);
		},

		format : function (mom, rule) {
			return this.letters.replace("%s", rule.letters);
		}
	};

	/************************************
		Zone Set
	************************************/

	function sortZones (a, b) {
		return a.until - b.until;
	}

	function ZoneSet (name) {
		this.name = name;
		this.zones = [];
	}

	ZoneSet.prototype = {
		zone : function (mom) {
			var i;
			for (i = 0; i < this.zones.length; i++) {
				if (mom < this.zones[i].until) {
					return this.zones[i];
				}
			}
			return this.zones[i - 1];
		},

		lastYearRule : function (year) {
			var i,
				eoy = moment([year]).endOf('year');
			for (i = 0; i < this.zones.length; i++) {
				if (eoy < this.zones[i].until) {
					return this.zones[i].lastYearRule(year);
				}
			}
		},

		add : function (zone) {
			this.zones.push(zone);
			this.zones.sort(sortZones);
		},

		format : function (mom) {
			var dup = moment(+mom),
				lastYearRule = this.lastYearRule(mom.year() - 1),
				zone = this.zone(dup),
				rule = zone.rule(dup, lastYearRule);
			return zone.format(rule);
		},

		offset : function (mom) {
			var dup = moment(+mom),
				lastYearRule = this.lastYearRule(mom.year() - 1),
				zone = this.zone(dup),
				rule = zone.rule(dup, lastYearRule);
			return -(zone.offset + rule.offset);
		}
	};

	/************************************
		Global Methods
	************************************/

	function addRules (rules) {
		var i, j, rule;
		for (i in rules) {
			rule = rules[i];
			for (j = 0; j < rule.length; j++) {
				addRule(i + ',' + rule[j]);
			}
		}
	}

	function addRule (ruleString) {
		// don't duplicate rules
		if (rules[ruleString]) {
			return rules[ruleString];
		}

		var p = ruleString.split(','),
			name = normalizeName(p[0]),
			rule = new Rule(name, p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8]);

		// cache the rule so we don't add it again
		rules[ruleString] = rule;

		// add to the ruleset
		getRuleSet(name).add(rule);

		return rule;
	}

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZones (zones) {
		var i;
		for (i in zones) {
			zones[i].forEach(function (zone) {
				addZone(i + ',' + zone);
			});
		}
	}

	function addZone (zoneString) {
		// don't duplicate zones
		if (zones[zoneString]) {
			return zones[zoneString];
		}

		var p = zoneString.split(','),
			name = normalizeName(p[0]),
			zone = new Zone(name, p[1], getRuleSet(p[2]), p[3], p[4]);

		// cache the zone so we don't add it again
		zones[zoneString] = zone;

		// add to the zoneset
		getZoneSet(name).add(zone);

		return zone;
	}

	function getRuleSet (name) {
		name = normalizeName(name);
		if (!ruleSets[name]) {
			ruleSets[name] = new RuleSet(name);
		}
		return ruleSets[name];
	}

	function getZoneSet (name) {
		name = normalizeName(name);
		if (!zoneSets[name]) {
			zoneSets[name] = new ZoneSet(name);
		}
		return zoneSets[name];
	}

	// overwrite moment.updateOffset
	moment.updateOffset = function (mom) {
		if (mom._z) {
			mom.zone(mom._z.offset(mom));
		}
	};

	moment.fn.tz = function (name) {
		this._z = getZoneSet(name);
		moment.updateOffset(this);
		return this;
	};

	moment.tz = {
		addRules   : addRules,
		addRule    : addRule,
		getRuleSet : getRuleSet,
		addZones   : addZones,
		addZone    : addZone,
		getZoneSet : getZoneSet
	};

	module.exports = moment;

	// add default rule
	defaultRule = addRule("-,0,9999,0,0,0,0,S");

	// add all rules
	zoneNames.forEach(function (z) {
		var zone = require('./zones/' + z);
		addZones(zone.zones);
		addRules(zone.rules);
	});

}).apply(this);
