var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		TZ.addRule("ZONEA,2000,2008,,2,e:2,2:00,1:00,D");
		TZ.addRule("ZONEA,2000,2008,,6,e:3,2:00,0:00,D");

		TZ.addRule("ZONEB,2000,2008,,2,e:5,2:00,1:00,D");
		TZ.addRule("ZONEB,2000,2008,,6,e:6,2:00,0:00,D");

		TZ.addZone("ZONESETA,300,ZONEA,E%sT,2004");
		TZ.addZone("ZONESETA,300,ZONEB,E%sT,2006");
		TZ.addZone("ZONESETA,300,ZONEA,E%sT");

		cb();
	},

	"contains month" : function (test) {
		test.expect(6);

		var zoneset = TZ.getZoneSet('ZONESETA');

		test.equal(zoneset.rule(moment([2004, 1, 2]))._dayVal, 3, "ZoneSet should get correct rule on earlier month");
		test.equal(zoneset.rule(moment([2004, 2, 2]))._dayVal, 2, "ZoneSet should get correct rule on exact month");
		test.equal(zoneset.rule(moment([2004, 3, 2]))._dayVal, 2, "ZoneSet should get correct rule on later month");

		test.equal(zoneset.rule(moment([2005, 5, 4]))._dayVal, 6, "ZoneSet should get correct rule on earlier month");
		test.equal(zoneset.rule(moment([2005, 6, 5]))._dayVal, 5, "ZoneSet should get correct rule on exact month");
		test.equal(zoneset.rule(moment([2005, 7, 6]))._dayVal, 5, "ZoneSet should get correct rule on later month");

		test.equal(zoneset.rule(moment([2006, 1, 4]))._dayVal, 5, "ZoneSet should get correct rule on earlier month");
		test.equal(zoneset.rule(moment([2006, 2, 5]))._dayVal, 6, "ZoneSet should get correct rule on exact month");
		test.equal(zoneset.rule(moment([2006, 3, 6]))._dayVal, 6, "ZoneSet should get correct rule on later month");

		test.equal(zoneset.rule(moment([2007, 5, 3]))._dayVal, 2, "ZoneSet should get correct rule on earlier month");
		test.equal(zoneset.rule(moment([2007, 6, 3]))._dayVal, 3, "ZoneSet should get correct rule on exact month");
		test.equal(zoneset.rule(moment([2007, 7, 3]))._dayVal, 3, "ZoneSet should get correct rule on later month");

		test.done();
	}
};
