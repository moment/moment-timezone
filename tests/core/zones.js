var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		TZ.addRule("ZONEA,2000,2008,2,e:2,120,60,A");
		TZ.addRule("ZONEA,2000,2008,6,e:3,120,0,B");

		TZ.addRule("ZONEB,2000,2008,2,e:5,120,60,C");
		TZ.addRule("ZONEB,2000,2008,6,e:6,120,0,D");

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
	},

	"formatting letters" : function (test) {
		test.expect(4);

		var zoneset = TZ.getZoneSet('ZONESETA');

		test.equal(zoneset.format(moment([2004, 2, 2])), 'EAT', "ZoneSet should get correct format on exact month 2004");
		test.equal(zoneset.format(moment([2004, 1, 2])), 'EBT', "ZoneSet should get correct format on earlier month 2004");
		test.equal(zoneset.format(moment([2005, 5, 6])), 'ECT', "ZoneSet should get correct format on earlier month 2005");
		test.equal(zoneset.format(moment([2005, 6, 6])), 'EDT', "ZoneSet should get correct format on exact month 2005");

		test.done();
	},

	"offsets" : function (test) {
		test.expect(4);

		var zoneset = TZ.getZoneSet('ZONESETA');

		test.equal(zoneset.offset(moment([2004, 2, 2])), 360, "ZoneSet should get correct offset on exact month 2004");
		test.equal(zoneset.offset(moment([2004, 1, 2])), 300, "ZoneSet should get correct offset on earlier month 2004");
		test.equal(zoneset.offset(moment([2005, 5, 6])), 360, "ZoneSet should get correct offset on earlier month 2005");
		test.equal(zoneset.offset(moment([2005, 6, 6])), 300, "ZoneSet should get correct offset on exact month 2005");

		test.done();
	}
};
