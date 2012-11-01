var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"setUp" : function (cb) {
		TZ.addRule("ZONEA,2000,2008,2,e:2,0,60,A");
		TZ.addRule("ZONEA,2000,2008,6,e:3,0,0,B");

		TZ.addRule("ZONEB,2000,2008,2,e:5,0,60,C");
		TZ.addRule("ZONEB,2000,2008,6,e:6,0,0,D");

		TZ.addZone("ZONESETA,-300,ZONEA,E%sT,2004");
		TZ.addZone("ZONESETA,-300,ZONEB,E%sT,2006");
		TZ.addZone("ZONESETA,-300,ZONEA,E%sT");

		cb();
	},

	// "contains month" : function (test) {
	// 	test.expect(12);

	// 	var zoneset = TZ.getZoneSet('ZONESETA');

	// 	test.equal(zoneset.rule(moment.utc([2004, 1, 2, 5])).letters(), 'B', "ZoneSet should get correct rule on earlier month 2004");
	// 	test.equal(zoneset.rule(moment.utc([2004, 2, 2, 5])).letters(), 'A', "ZoneSet should get correct rule on exact month 2004");
	// 	test.equal(zoneset.rule(moment.utc([2004, 3, 2, 5])).letters(), 'A', "ZoneSet should get correct rule on later month 2004");

	// 	test.equal(zoneset.rule(moment.utc([2005, 5, 6, 5])).letters(), 'C', "ZoneSet should get correct rule on earlier month 2005");
	// 	test.equal(zoneset.rule(moment.utc([2005, 6, 6, 5])).letters(), 'D', "ZoneSet should get correct rule on exact month 2005");
	// 	test.equal(zoneset.rule(moment.utc([2005, 7, 6, 5])).letters(), 'D', "ZoneSet should get correct rule on later month 2005");

	// 	test.equal(zoneset.rule(moment.utc([2006, 1, 5, 5])).letters(), 'D', "ZoneSet should get correct rule on earlier month 2006");
	// 	test.equal(zoneset.rule(moment.utc([2006, 2, 5, 5])).letters(), 'C', "ZoneSet should get correct rule on exact month 2006");
	// 	test.equal(zoneset.rule(moment.utc([2006, 3, 5, 5])).letters(), 'C', "ZoneSet should get correct rule on later month 2006");

	// 	test.equal(zoneset.rule(moment.utc([2007, 5, 3, 5])).letters(), 'A', "ZoneSet should get correct rule on earlier month 2007");
	// 	test.equal(zoneset.rule(moment.utc([2007, 6, 3, 5])).letters(), 'B', "ZoneSet should get correct rule on exact month 2007");
	// 	test.equal(zoneset.rule(moment.utc([2007, 7, 3, 5])).letters(), 'B', "ZoneSet should get correct rule on later month 2007");

	// 	test.done();
	// },

	// "formatting letters" : function (test) {
	// 	test.expect(4);

	// 	var zoneset = TZ.getZoneSet('ZONESETA');

	// 	test.equal(zoneset.format(moment.utc([2004, 2, 2, 5])), 'EAT', "ZoneSet should get correct format on exact month 2004");
	// 	test.equal(zoneset.format(moment.utc([2004, 1, 2, 5])), 'EBT', "ZoneSet should get correct format on earlier month 2004");
	// 	test.equal(zoneset.format(moment.utc([2005, 5, 6, 5])), 'ECT', "ZoneSet should get correct format on earlier month 2005");
	// 	test.equal(zoneset.format(moment.utc([2005, 6, 6, 5])), 'EDT', "ZoneSet should get correct format on exact month 2005");

	// 	test.done();
	// },

	// "offsets" : function (test) {
	// 	test.expect(4);

	// 	var zoneset = TZ.getZoneSet('ZONESETA');

	// 	test.equal(zoneset.offset(moment.utc([2004, 2, 2, 5])), 240, "ZoneSet should get correct offset on exact month 2004");
	// 	test.equal(zoneset.offset(moment.utc([2004, 1, 2, 5])), 300, "ZoneSet should get correct offset on earlier month 2004");
	// 	test.equal(zoneset.offset(moment.utc([2005, 5, 6, 5])), 240, "ZoneSet should get correct offset on earlier month 2005");
	// 	test.equal(zoneset.offset(moment.utc([2005, 6, 6, 5])), 300, "ZoneSet should get correct offset on exact month 2005");

	// 	test.done();
	// }
};
