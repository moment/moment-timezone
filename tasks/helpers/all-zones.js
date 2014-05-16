"use strict";

var zoneNames = require('./zone-names'),
	zdump = require('./zdump'),
	Zone = require('./zone');

function sortZones (a, b) {
	if (a.name < b.name) { return -1; }
	if (a.name > b.name) { return 1; }
	return 0;
}

module.exports = function allZones (cb) {
	var all = [],
		remaining = zoneNames.length;

	zoneNames.forEach(function (name) {
		zdump(name, function (err, lines) {
			if (err) {
				console.log('!! ' + name);
				console.error(err);
			} else {
				all.push(new Zone(name, lines));
				console.log('zdump -v ' + name);
			}

			remaining--;
			if (remaining === 0) {
				cb(all.sort(sortZones));
			}
		});
	});
};