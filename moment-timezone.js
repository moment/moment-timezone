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
		zoneSets = {},

		TIME_RULE_WALL_CLOCK = 0,
		TIME_RULE_UTC        = 1,
		TIME_RULE_STANDARD   = 2,

		DAY_RULE_DAY_OF_MONTH   = 7,
		DAY_RULE_LAST_WEEKDAY   = 8;

	/************************************
		Rules
	************************************/

	function Rule (name, startYear, endYear, month, day, dayRule, time, timeRule, offset, letters) {
		this.name      = name;
		this.startYear = +startYear;
		this.endYear   = +endYear;
		this.month     = +month;
		this.day       = +day;
		this.dayRule   = +dayRule;
		this.time      = +time;
		this.timeRule  = +timeRule;
		this.offset    = +offset;
		this.letters   = letters || '';
	}

	Rule.prototype = {
		contains : function (year) {
			return (year >= this.startYear && year <= this.endYear);
		},

		start : function (year) {
			year = Math.min(Math.max(year, this.startYear), this.endYear);
			return moment.utc([year, this.month, this.date(year), 0, this.time]);
		},

		date : function (year) {
			if (this.dayRule === DAY_RULE_DAY_OF_MONTH) {
				return this.day;
			} else if (this.dayRule === DAY_RULE_LAST_WEEKDAY) {
				return this.lastWeekday(year);
			}
			return this.weekdayAfter(year);
		},

		weekdayAfter : function (year) {
			var day = this.day,
				firstDayOfWeek = moment([year, this.month, 1]).day(),
				output = this.dayRule + 1 - firstDayOfWeek;

			while (output < day) {
				output += 7;
			}

			return output;
		},

		lastWeekday : function (year) {
			var day = this.day,
				dow = day % 7,
				lastDowOfMonth = moment([year, this.month + 1, 1]).day(),
				daysInMonth = moment([year, this.month, 1]).daysInMonth(),
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

				if (rule.rule.timeRule === TIME_RULE_STANDARD) {
					lastOffset = offset;
				}
				if (rule.rule.timeRule !== TIME_RULE_UTC) {
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
				if (year >= rule.startYear) {
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

	function Zone (name, offset, ruleSet, letters, until) {
		this.name = name;
		this.offset = +offset;
		this.ruleSet = ruleSet;
		this.letters = letters;
		this.until = moment.utc((typeof until === 'string' ? until.split('_') : [9999]));
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
				addRule(i + '\t' + rule[j]);
			}
		}
	}

	function addRule (ruleString) {
		// don't duplicate rules
		if (rules[ruleString]) {
			return rules[ruleString];
		}

		var p = ruleString.split(/\s/),
			name = normalizeName(p[0]),
			rule = new Rule(name, p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10]);

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
		var i, j, zone;
		for (i in zones) {
			zone = zones[i];
			for (j = 0; j < zone.length; j++) {
				addZone(i + '\t' + zone[j]);
			}
		}
	}

	function addZone (zoneString) {
		// don't duplicate zones
		if (zones[zoneString]) {
			return zones[zoneString];
		}

		var p = zoneString.split(/\s/),
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
	defaultRule = addRule("- 0 9999 0 0 0 0 0 0 S");

	// add all rules
	zoneNames.forEach(function (z) {
		var zone = require('./zones/' + z);
		addZones(zone.zones);
		addRules(zone.rules);
	});

}).apply(this);
