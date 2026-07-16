"use strict";

var moment = require("../../index");

exports.clone = {
	"clone preserves the wall time after add() lands on a skipped DST-start hour" : function (t) {
		// America/Havana turns clocks forward 1 hour at 2020-03-08 00:00,
		// so that midnight instant does not actually exist. moment.tz
		// rolls it forward to 2020-03-08 00:00 -04:00, and a clone of
		// that moment should represent the exact same wall time.
		var m = moment.tz("2020-03-01", "America/Havana");
		m.add(1, "week");

		var original = m.format("YYYY-MM-DD HH:mm:ss Z");
		var cloned = m.clone().format("YYYY-MM-DD HH:mm:ss Z");

		t.equal(original, "2020-03-08 00:00:00 -04:00", "The original moment should land on the DST start");
		t.equal(cloned, original, "Cloning should not change the displayed wall time");
		t.equal(m.valueOf(), m.clone().valueOf(), "Cloning should not change the underlying instant");

		t.done();
	}
};
