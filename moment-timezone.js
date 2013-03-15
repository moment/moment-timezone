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
		contains : function (mom) {
			var year = mom.year(),
				beginning = this.start(year);

			if (mom >= beginning && year <= this._to) {
				return true;
			}

			return false;
		},

		containsYear : function (year) {
			if (year >= this._from && year <= this._to) {
				return true;
			}

			return false;
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

	function RuleYear (_year, _rule) {
		this.year = _year;
		this.rule = _rule;
		this.start = _rule.start(_year);
	}

	// sort rules so that the closest effective date is first
	function sortRuleYears (a, b) {
		var sa = a.start,
			sb = b.start;

		if (sa > sb) {
			return -1;
		} else if (sa < sb) {
			return 1;
		} else {
			return 0;
		}
	}


	/************************************
		Rule Sets
	************************************/

	function RuleSet (_name) {
		this._name = _name;
		this._rules = [];
	}

	RuleSet.prototype = {
		add : function (rule) {
			this._rules.push(rule);
		},

		// Add all the rules that apply to this year to this array
		_ruleYears : function (year, array) {
			var i,
				rule;

			for (i = 0; i < this._rules.length; i++) {
				rule = this._rules[i];
				if (rule.containsYear(year)) {
					array.push(new RuleYear(year, rule));
				}
			}
		},

		// get the rules that apply to this year and last year
		rules : function (mom, lastYearRule) {
			var rules = [];

			this._ruleYears(mom.year(), rules);
			rules.push(new RuleYear(mom.year() - 1, lastYearRule));
			rules.sort(sortRuleYears);

			return rules;
		},

		// 1. Get rules for this and last year
		//
		// 2. Sort them by effective date (newest first)
		//
		// 3. Starting with the newest rule, loop until the target moment is greater than
		//    or equal to the rule's effective date

		rule : function (mom, offset, lastYearRule) {
			var rules = this.rules(mom, lastYearRule),
				rule,
				lastOffset = 0,
				cloned,
				i;

				console.log(lastYearRule);
			// console.log('\n' + mom.clone().utc().format());
			// console.log(mom.clone().utc().add('m', offset).format());

			// make sure to include the previous rule's offset
			for (i = rules.length - 1; i > -1; i--) {
				rule = rules[i];

				if (rule.rule.standard) {
					lastOffset = offset;
				}
				if (!rule.rule.utc) {
					rule.start.add('m', -lastOffset);
				}
				// console.log(rule.start.format(), '(' + lastOffset + ')');
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
				largest = 0;

			for (i = 0; i < this._rules.length; i++) {
				rule = this._rules[i];
				if (rule.containsYear(year)) {
					start = rule.start(year);
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

	function Zone (_name, _offset, _ruleSet, _format, _until) {
		this._name = _name;
		this._offset = +_offset;

		this._ruleSet = getRuleSet(_ruleSet);

		this._format = _format;

		this.until = moment.utc((typeof _until === 'string' ? _until.split(' ') : [9999]));
	}

	Zone.prototype = {
		rule : function (mom, lastYearRule) {
			return this._ruleSet.rule(mom, this._offset, lastYearRule);
		},

		format : function (mom, lastYearRule) {
			return this._format.replace("%s", this.rule(mom, lastYearRule).letters());
		},

		offset : function (mom, lastYearRule) {
			return this._offset + this.rule(mom, lastYearRule).offset;
		},

		lastYearRule : function (year) {
			return this._ruleSet.lastYearRule(year);
		}
	};

	/************************************
		Zone Set
	************************************/

	function sortZones (a, b) {
		return a.until - b.until;
	}

	function ZoneSet (_name) {
		this._name = _name;
		this._zones = [];
	}

	ZoneSet.prototype = {
		zone : function (mom) {
			var i;
			for (i = 0; i < this._zones.length; i++) {
				if (mom < this._zones[i].until) {
					return this._zones[i];
				}
			}
			return this._zones[i - 1];
		},

		lastYearRule : function (year) {
			var i,
				eoy = moment([year]).endOf('year');
			for (i = 0; i < this._zones.length; i++) {
				if (eoy < this._zones[i].until) {
					return this._zones[i].lastYearRule(year);
				}
			}
		},

		add : function (zone) {
			this._zones.push(zone);
			this._zones.sort(sortZones);
			zone.zoneSet = this;
		},

		name : function () {
			return this._name;
		},

		format : function (mom) {
			var dup = moment(+mom),
				lastYearRule = this.lastYearRule(mom.year() - 1);
			return this.zone(dup).format(dup, lastYearRule);
		},

		offset : function (mom) {
			var dup = moment(+mom),
				lastYearRule = this.lastYearRule(mom.year() - 1);
			return -this.zone(dup).offset(dup, lastYearRule);
		}
	};

	/************************************
		Global Methods
	************************************/

	function addRules (rules) {
		var i;
		for (i in rules) {
			rules[i].forEach(function(rule){
				addRule(i + ',' + rule);
			});
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
			zone = new Zone(name, p[1], p[2], p[3], p[4]);

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
