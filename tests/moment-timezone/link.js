"use strict";

var tz = require("../../").tz;

function clearObject (obj) {
	var key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			delete obj[key];
		}
	}
}

exports.link = {
	setUp : function (done) {
		clearObject(tz._links);
		clearObject(tz._zones);
		done();
	},

	linking : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");
		test.ok(!tz.zone('Alias2'), "Links should have been reset.");
		test.ok(!tz.zone('Alias3'), "Links should have been reset.");

		tz.add("Zone1|ASDF|0|0|0");

		tz.link("Alias1", "Zone1");
		tz.link("Alias2|Zone1");
		tz.link(["Alias3|Zone1"]);

		test.ok(tz.zone('Zone1'),  "Should be able to add a zone.");
		test.ok(tz.zone('Alias1'), "Should be able to add an alias with 2 parameters.");
		test.ok(tz.zone('Alias2'), "Should be able to add an alias with 'Alias|Zone' format.");
		test.ok(tz.zone('Alias3'), "Should be able to add an alias with ['Alias|Zone'] format");

		test.equal(tz.zone('Zone1').name,  'Zone1', "Should get the right zone.");
		test.equal(tz.zone('Alias1').name, 'Zone1', "Should get the right zone from an alias.");
		test.equal(tz.zone('Alias2').name, 'Zone1', "Should get the right zone from an alias.");
		test.equal(tz.zone('Alias3').name, 'Zone1', "Should get the right zone from an alias.");

		test.done();
	},

	outOfOrder : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Alias1'), "Links should have been reset.");

		tz.link("Alias1", "Zone1");
		tz.add("Zone1|ASDF|0|0|0");

		test.ok(tz.zone('Zone1'),  "Should be able to add a zone.");
		test.ok(tz.zone('Alias1'), "Should be able to add an alias before adding the zone.");

		test.equal(tz.zone('Zone1').name,  'Zone1', "Should get the right zone.");
		test.equal(tz.zone('Alias1').name, 'Zone1', "Should get the right zone from an alias.");

		tz.link("Alias2", "Zone2");
		test.ok(!tz.zone('Alias2'), "Aliases without zones should be null.");

		test.done();
	}
};
