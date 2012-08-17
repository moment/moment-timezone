// moment-timezone.js
// version : 0.0.1
// author : Tim Wood
// license : MIT
// github.com/timrwood/moment-timezone

(function () {

    var momentTZ,

        rules = [],
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

    function Rule (_name, _from, _to, _type, _in, _on, _at, _save, _letters) {
        this._name    = _name;
        this._from    = +_from;
        this._to      = +_to;
        this._type    = _type;
        this._in      = +_in;
        this._on      = parseOnRule(_on);
        this._at      = _at;
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
            if (month < this._in) {
                return false;
            }
            return true;
        },

        _onDateForYear : function (year) {
            if (this._on.last) {
                
            }
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
        var p = ruleString.split(',');
        rules.push(new Rule(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9]) );
    }

    module.exports = {
        Rule : Rule,
        ZoneRule : ZoneRule,
        Zone : Zone
    };

    addRules(require('./data/js/northamerica').rules);

}).apply(this);
