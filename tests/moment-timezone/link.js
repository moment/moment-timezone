"use strict";

var tz = require("../../").tz;

var tempLinks = {},
	tempZones = {},
	tempNames = {};

function moveProperties (a, b) {
	var key;
	for (key in a) {
		if (a.hasOwnProperty(key)) {
			b[key] = a[key];
			delete a[key];
		}
	}

}

exports.link = {
	setUp : function (done) {
		moveProperties(tz._links, tempLinks);
		moveProperties(tz._zones, tempZones);
		moveProperties(tz._names, tempNames);
		done();
	},

	tearDown : function (done) {
		moveProperties(tz._links, {});
		moveProperties(tz._zones, {});
		moveProperties(tz._names, {});
		moveProperties(tempLinks, tz._links);
		moveProperties(tempZones, tz._zones);
		moveProperties(tempNames, tz._names);
		done();
	},

	linking : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");
		test.ok(!tz.zone('Alias2'), "Links should have been reset.");
		test.ok(!tz.zone('Alias3'), "Links should have been reset.");
		test.ok(!tz._zones.zone1,   "Zones should have been reset.");
		test.ok(!tz._links.alias1,  "Links should have been reset.");
		test.ok(!tz._links.alias2,  "Links should have been reset.");
		test.ok(!tz._links.alias3,  "Links should have been reset.");

		tz.add("Zone1|ASDF|0|0|0");

		tz.link("Alias1|Zone1");
		tz.link(["Alias2|Zone1", "Alias3|Zone1"]);

		test.ok(tz.zone('Zone1'),  "Should be able to add a zone.");
		test.ok(tz.zone('Alias1'), "Should be able to add an alias with 'Alias|Zone' format.");
		test.ok(tz.zone('Alias2'), "Should be able to add an alias with ['Alias|Zone'] format.");
		test.ok(tz.zone('Alias3'), "Should be able to add an alias with ['Alias|Zone'] format");

		test.equal(tz.zone('Zone1').name,  'Zone1', "Should get the right zone.");
		test.equal(tz.zone('Alias1').name, 'Alias1', "Should get the right zone from an alias.");
		test.equal(tz.zone('Alias2').name, 'Alias2', "Should get the right zone from an alias.");
		test.equal(tz.zone('Alias3').name, 'Alias3', "Should get the right zone from an alias.");

		test.done();
	},

	reversed : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");
		test.ok(!tz.zone('Alias2'), "Links should have been reset.");
		test.ok(!tz.zone('Alias3'), "Links should have been reset.");
		test.ok(!tz._zones.zone1,   "Zones should have been reset.");
		test.ok(!tz._links.alias1,  "Links should have been reset.");
		test.ok(!tz._links.alias2,  "Links should have been reset.");
		test.ok(!tz._links.alias3,  "Links should have been reset.");

		tz.add("Zone1|ASDF|0|0|0");

		tz.link("Zone1|Alias1");
		tz.link(["Zone1|Alias2", "Zone1|Alias3"]);

		test.ok(tz.zone('Zone1'),  "Should be able to add a zone.");
		test.ok(tz.zone('Alias1'), "Should be able to add an alias with 'Zone|Alias' format.");
		test.ok(tz.zone('Alias2'), "Should be able to add an alias with ['Zone|Alias'] format.");
		test.ok(tz.zone('Alias3'), "Should be able to add an alias with ['Zone|Alias'] format");

		test.equal(tz.zone('Zone1').name,  'Zone1', "Should get the right zone.");
		test.equal(tz.zone('Alias1').name, 'Alias1', "Should get the right zone from an alias.");
		test.equal(tz.zone('Alias2').name, 'Alias2', "Should get the right zone from an alias.");
		test.equal(tz.zone('Alias3').name, 'Alias3', "Should get the right zone from an alias.");

		test.done();
	},

	outOfOrder : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");
		test.ok(!tz.zone('Alias2'), "Links should have been reset.");
		test.ok(!tz.zone('Alias3'), "Links should have been reset.");

		tz.link("Alias1|Zone1");
		tz.add("Zone1|ASDF|0|0|0");

		test.ok(tz.zone('Zone1'),  "Should be able to add a zone.");
		test.ok(tz.zone('Alias1'), "Should be able to add an alias before adding the zone.");

		test.equal(tz.zone('Zone1').name,  'Zone1', "Should get the right zone.");
		test.equal(tz.zone('Alias1').name, 'Alias1', "Should get the right zone from an alias.");

		tz.link("Alias2|Zone2");
		test.ok(!tz.zone('Alias2'), "Aliases without zones should be null.");

		test.done();
	},

	namesOfAliases : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");
		test.ok(!tz.zone('Alias2'), "Links should have been reset.");
		test.ok(!tz.zone('Alias3'), "Links should have been reset.");

		tz.link("Alias1|Zone1");
		tz.add("Zone1|ASDF|0|0|0");
		test.deepEqual(tz.names(), ["Alias1", "Zone1"], "Should be able to get the names of aliased zones.");

		tz.link("Alias2|Zone1");
		test.deepEqual(tz.names(), ["Alias1", "Alias2", "Zone1"], "Should be able to get the names of aliased zones.");

		tz.link("Alias3|Zone2");
		test.deepEqual(tz.names(), ["Alias1", "Alias2", "Zone1"], "Should be able to get the names of aliased zones.");

		tz.link("Alias3|Zone1");
		test.deepEqual(tz.names(), ["Alias1", "Alias2", "Alias3", "Zone1"], "Should be able to get the names of aliased zones.");

		test.done();
	},

	zoneAndAliasNotLoaded : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");

		tz.link("Alias1|Zone1");

		test.ok(!tz.zone('Zone1'),  "Zone should not exist if it wasn't loaded.");
		test.ok(!tz.zone('Alias1'), "Link should not exist if its zone wasn't loaded.");

		test.done();
	}
};
