// moment-timezone.js
// version : 0.0.1
// author : Tim Wood
// license : MIT
// github.com/timrwood/moment-timezone

(function () {

    var moment = require('moment'),

        momentTZ,

        rules = [],
        rulesets = [],
        zoneRules = [],
        zones = {};

    /************************************
        Rules
    ************************************/

    function parseOnRule (_on) {
        if (_on.match(/^last/)) {
            return {
                last: _on.split('last')[1]
            };
        }
    }

    /*
     * Rule
     *
     * @param _name    The string identifier for the timezone name (eg. US, NYC, Mexico...)
     * @param _from    The start year
     * @param _to      The end year
     * @param _type    
     * @param _in      The month to start on
     * @param _on      The day to start on. A colon separated tuple of a letter and a number
                       eg. "l:1", "e:20", "f:1"
                       "l" The last on this day of week (while num > 7, skip a week)
                       "f" The first of this day of week (while num > 7, skip a week)
                       "e" This exact date of the month
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
        this._dayRule = _on.split(':')[0];
        this._dayVal  = +_on.split(':')[1];
        this._time    = _at;
        this._save    = _save;
        this._letters = _letters;
    }

    Rule.prototype = {
        contains : function (mom) {
            var year = mom.year(),
                month = mom.month();
            if (year < this._from || year > this._to) {
                return false;
            }
            if (month < this._month) {
                return false;
            }
            if (mom.date() < this._dateForYear(year)) {
                return false;
            }
            return true;
        },

        _dateForYear : function (year) {
            var a; // placeholder
            switch (this._dayRule) {
                case "l":
                    // last this._dayVal day of the week for this month
                    return moment([year, this._month + 1, 0]).day(this._dayVal).date();
                case "f":
                    // first this._dayVal day of the week for this month
                    return moment([year, this._month , this._dayVal]).date();
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
        
    }

    ZoneRule.prototype = {

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
        var p = ruleString.split(',');
            rule = new Rule(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]);
        rules.push(rule);
        return rule;
    }

    module.exports = {
        addRule : addRule,
        addRules : addRules
    };

    addRules(require('./data/js/northamerica').rules);

}).apply(this);
