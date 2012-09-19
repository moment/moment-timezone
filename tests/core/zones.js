var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		TZ.addRule("ZONEA,2000,2008,,2,e:2,2:00,1:00,A");
		TZ.addRule("ZONEA,2000,2008,,6,e:3,2:00,0:00,B");

		TZ.addRule("ZONEB,2000,2008,,2,e:5,2:00,1:00,C");
		TZ.addRule("ZONEB,2000,2008,,6,e:6,2:00,0:00,D");

		TZ.addZone("ZONESETA,300,ZONEA,E%sT,2004");
		TZ.addZone("ZONESETA,300,ZONEB,E%sT,2006");
		TZ.addZone("ZONESETA,300,ZONEA,E%sT");

		cb();
	},

	"contains month" : function (test) {
		test.expect(12);

		var zoneset = TZ.getZoneSet('ZONESETA');

		test.equal(zoneset.rule(moment([2004, 1, 2])).letters(), 'B', "ZoneSet should get correct rule on earlier month 2004");
		test.equal(zoneset.rule(moment([2004, 2, 2])).letters(), 'A', "ZoneSet should get correct rule on exact month 2004");
		test.equal(zoneset.rule(moment([2004, 3, 2])).letters(), 'A', "ZoneSet should get correct rule on later month 2004");

		test.equal(zoneset.rule(moment([2005, 5, 6])).letters(), 'C', "ZoneSet should get correct rule on earlier month 2005");
		test.equal(zoneset.rule(moment([2005, 6, 6])).letters(), 'D', "ZoneSet should get correct rule on exact month 2005");
		test.equal(zoneset.rule(moment([2005, 7, 6])).letters(), 'D', "ZoneSet should get correct rule on later month 2005");

		test.equal(zoneset.rule(moment([2006, 1, 5])).letters(), 'D', "ZoneSet should get correct rule on earlier month 2006");
		test.equal(zoneset.rule(moment([2006, 2, 5])).letters(), 'C', "ZoneSet should get correct rule on exact month 2006");
		test.equal(zoneset.rule(moment([2006, 3, 5])).letters(), 'C', "ZoneSet should get correct rule on later month 2006");

		test.equal(zoneset.rule(moment([2007, 5, 3])).letters(), 'A', "ZoneSet should get correct rule on earlier month 2007");
		test.equal(zoneset.rule(moment([2007, 6, 3])).letters(), 'B', "ZoneSet should get correct rule on exact month 2007");
		test.equal(zoneset.rule(moment([2007, 7, 3])).letters(), 'B', "ZoneSet should get correct rule on later month 2007");

		test.done();
	}
};
