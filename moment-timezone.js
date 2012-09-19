// moment-timezone.js
// version : 0.0.1
// author : Tim Wood
// license : MIT
// github.com/timrwood/moment-timezone

(function () {

	var moment = require('moment'),

		momentTZ,

		rules = {},
		rulesets = {},
		zoneRules = [],
		zones = {};

	/************************************
		Rules
	************************************/

	/*
	 * Rule
	 *
	 * @param _name    The string identifier for the timezone name (eg. US, NYC, Mexico...)
	 * @param _from    The start year
	 * @param _to      The end year
	 * @param _type
	 * @param _in      The month to start on
	 * @param _on      The day to start on. A colon separated tuple of a letter and a number
	 *                 eg. "l:1", "e:20", "f:1"
	 *                 "l" The last on this day of week (while num > 7, skip a week)
	 *                 "f" The first of this day of week (while num > 7, skip a week)
	 *                 "e" This exact date of the month
	 * @param _at      The 24 hour time of day that the switch takes place
	 * @param _save    The number of hours to save. Usually 1 or 0
	 * @param _letters The string to replace the ZoneRule with
	 */
	function Rule (_name, _from, _to, _type, _in, _on, _at, _save, _letters) {
		this._name    = _name;
		this._from    = +_from;
		this._to      = +_to;
		this._type    = _type;
		this._month   = +_in;

		_on = _on.split(':');
		this._dayRule = _on[0];
		this._dayVal  = +_on[1];

		this._time    = _at;
		this._save    = _save;
		this._letters = _letters;
	}

	Rule.prototype = {
		contains : function (mom) {
			var year = mom.year(),
				month = mom.month();
			// if the year is out of range, it did not apply
			if (year < this._from || year > this._to) {
				return false;
			}
			// if the moment is earlier than the start date...
			if (mom < this._momentForYear(year)) {
				// if the rule applied last year, it applies all of this year too
				if (year > this._from) {
					return true;
				}
				// the moment is too early for this year
				return false;
			}
			return true;
		},

		_momentForYear : function (year) {
			return moment([year, this._month, this._dateForYear(year)]);
		},

		_dateForYear : function (year) {
			var firstDowOfMonth,
				lastDowOfMonth,
				daysInMonth,
				day = this._dayVal,
				dow = day % 7,
				output;
			switch (this._dayRule) {
				case "l":
					// find last day of month
					lastDowOfMonth = moment([year, this._month + 1, 0]).day();
					daysInMonth = moment([year, this._month, 1]).daysInMonth();
					output = daysInMonth + (dow - (lastDowOfMonth - 1)) - (~~(day / 7) * 7);
					if (dow >= lastDowOfMonth) {
						output -= 7;
					}
					return output;
				case "f":
					// find first day of month
					firstDowOfMonth = moment([year, this._month, 1]).day();
					output = day + 1 - firstDowOfMonth;
					if (dow < firstDowOfMonth) {
						output += 7;
					}
					return output;
				case "e":
					return this._dayVal;
			}
			throw "Unexpected Rule._dayRule";
		}
	};

	/************************************
		Rulesets
	************************************/

	function Ruleset (_name) {
		this._name = _name;
		this._rules = [];
	}

	Ruleset.prototype = {
		addRule : function (rule) {
			this._rules.push(rule);
		},

		_pickRule : function (startRule, endRule, mom) {
			var tmp,
				start, end,
				year = mom.year();

			if (!endRule) {
				return startRule;
			}

			start = startRule._momentForYear(year);
			end = endRule._momentForYear(year);

			if (start > end) {
				tmp = start;
				start = end;
				end = tmp;
			}

			if (mom < start || mom >= end) {
				return endRule;
			}
			return startRule;
		},

		rule : function (mom) {
			var i, startRule, endRule;
			for (i = 0; i < this._rules.length; i++) {
				if (this._rules[i].contains(mom)) {
					if (startRule) {
						endRule = this._rules[i];
					} else {
						startRule = this._rules[i];
					}
				}
			}

			return this._pickRule(startRule, endRule, mom);
		}
	};

	/************************************
		ZoneRules
	************************************/

	function ZoneRule (_name, _offset, _rule, _format, _until) {
		this._name = _name;
	}

	ZoneRule.prototype = {

	};

	/************************************
		Zones
	************************************/

	function Zone (_name) {

	}

	Zone.prototype = {

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
			name = p[0],
			rule = new Rule(name, p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);

		// cache the rule so we don't add it again
		rules[ruleString] = rule;

		// add to the ruleset and create ruleset if it doesn't exist yet
		if (!rulesets[name]) {
			rulesets[name] = new Ruleset(name);
		}
		rulesets[name].addRule(rule);

		return rule;
	}

	function getRuleSet (name) {
		return rulesets[name];
	}

	module.exports = {
		addRule : addRule,
		addRules : addRules,
		getRuleSet : getRuleSet
	};

	// addRules(require('./data/js/northamerica').rules);

}).apply(this);
