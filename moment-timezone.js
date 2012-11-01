// moment-timezone.js
// version : 0.0.1
// author : Tim Wood
// license : MIT
// github.com/timrwood/moment-timezone

(function () {

	var moment = require('moment'),

		momentTZ,

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

		this._time    = +_at;
		this._offset  = +_offset;
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

		// return the newest rule for a moment

		newestOf : function (rules, mom) {
			var i,
				rule,
				tempRule,
				year = mom.year();
			for (i = 0; i < rules.length; i++) {
				tempRule = rules[i];
				console.log("Checking    ", tempRule.start(mom.year()).format());
				if (!rule || rule.start(year) < rules[i].start(year)) {
					rule = tempRule;
					//console.log("Sorting    ", rule.start(mom.year()).format());
				}
			}
			return rule;
		},

		// Return an array of all the rules that apply this moment

		_rulesToArray : function (year, array) {
			var i,
				rule;

			for (i = 0; i < this._rules.length; i++) {
				rule = this._rules[i];
				if (rule.containsYear(year)) {
					array.push({
						rule : rule,
						year : year
					});
					// console.log("Adding  ", year, rule.start(year).format());
				}
			}
		},

		_sortRules : function (a, b) {
			var sa = a.rule.start(a.year),
				sb = b.rule.start(b.year);

			if (sa > sb) {
				return -1;
			} else if (sa < sb) {
				return 1;
			} else {
				return 0;
			}
		},

		rules : function (mom) {
			var i,
				lastYear = moment.utc([mom.year(), 0, 1, -1]),
				rules = [];

			this._rulesToArray(mom.year(), rules);
			this._rulesToArray(mom.year() - 1, rules);

			rules.sort(this._sortRules);

			for (i = 0; i < rules.length; i++) {
				// console.log("Sorted  ", rules[i].year, rules[i].rule.start(rules[i].year).format());
			}

			return rules;
		},

		// 1. Get rules for this year
		//    this._rulesForYear(year)
		//
		// 2. Eliminate rules that have not taken effect this year
		//
		// 3. If we still have 1 or more rules, use the one that took effect later
		//    this._newestRule(rules)
		//
		// 4. Else, get rules for last year
		//    this._rulesForYear(year - 1)
		//
		// 5. Use the rule that takes effect latest (currRule)
		//    this._newestRule(rules)
		//
		// 6. Using 1-5, get the rule before the correct rule (prevRule)
		//
		// 7. If the moment is before the start of currRule minus the offset of prevRule,
		//    use prevRule instead

		rule : function (mom, offset) {
			//console.log("");

			//console.log(["Finding rule for", mom.format(), mom.clone().utc().format()].join('\n'));

			var rules = this.rules(mom),
				rule,
				last,
				cloned,
				i;

			for (i = 0; i < rules.length - 1; i++) {
				last = rules[i + 1];
				rule = rules[i];
				cloned = mom.clone().utc().add('m', offset + last.rule._offset);

				//console.log("Checking", rule.rule.start(rule.year).format(), cloned.format(), last.rule._offset);

				if (cloned >= rule.rule.start(rule.year)) {
					//console.log("Using   ", rule.rule.start(rule.year).format(), cloned.format());
					return rule.rule;
				}
			}

			rule = rules[rules.length - 1];
			//console.log("Using fb ", rule.rule.start(rule.year).format(), cloned.format());

			return rule.rule;
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
		this._until = +_until || 9999;
	}

	Zone.prototype = {
		contains : function (mom) {
			if (mom.year() <= this._until) {
				return true;
			}
			return false;
		},

		rule : function (mom) {
			return this._ruleSet.rule(mom, this._offset);
		}
	};

	/************************************
		Zone Set
	************************************/

	function sortZones (a, b) {
		var diff = moment(a._until) - moment(b._until);
		if (diff > 0) {
			return 1;
		}
		if (diff < 0) {
			return -1;
		}
		return 0;
	}

	function ZoneSet (_name) {
		this._name = _name;
		this._zones = [];
	}

	ZoneSet.prototype = {
		_zone : function (mom) {
			var i, zone;
			for (i = 0; i < this._zones.length; i++) {
				if (this._zones[i].contains(mom)) {
					return this._zones[i];
				}
			}
		},

		rule : function (mom) {
			return this._zone(mom).rule(mom);
		},

		add : function (zone) {
			this._zones.push(zone);
			this._zones.sort(sortZones);
		},

		name : function () {
			return this._name;
		},

		format : function (mom) {
			var zone = this._zone(mom),
				rule = this.rule(mom);
			return zone._format.replace("%s", rule.letters());
		},

		offset : function (mom) {
			var zone = this._zone(mom),
				rule = this.rule(mom);
			return -(zone._offset + rule._offset);
		}
	};

	/************************************
		Global Methods
	************************************/

	function addRules (rulesArray) {
		var i;
		for (i = 0; i < rulesArray.length; i++) {
			addRule(rulesArray[i]);
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
		return name.toLowerCase().replace(/\//g, '_');
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

	module.exports = {
		addRule : addRule,
		addRules : addRules,
		getRuleSet : getRuleSet,
		addZone : addZone,
		getZoneSet : getZoneSet
	};

	// add default rule
	addRule("-,0,9999,0,0,0,0,S");

	(function(){
		var north_america = require('./zones/northamerica'),
			name, name2;

		for (name in north_america.rules) {
			north_america.rules[name].forEach(function(rule){
				addRule(name + ',' + rule);
			});
		}

		for (name2 in north_america.zones) {
			north_america.zones[name2].forEach(function(zone){
				addZone(name2 + ',' + zone);
			});
		}
	}());

}).apply(this);
