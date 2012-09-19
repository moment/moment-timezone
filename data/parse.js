var fs = require('fs'),
	path = require('path');

var map = "jan feb mar apr may jun jul aug sep oct nov dec".split(" ");

function addZone(list, zone) {
	list.push(zone);
}


function formatRule(rule) {
	var i;

	// convert month names to numbers
	for (i = 0; i < 12; i++) {
		if (map[i] === rule[4].toLowerCase()) {
			rule[4] = i;
			break;
		}
	}

	// remove type
	rule.splice(3, 1);
	return rule.join(',');
}

function parseZone(_zone) {
	fs.readFile(path.join(__dirname, 'raw', _zone), 'ascii', function(err, str) {
		if (err) {
			throw err;
		}
		var s = '';
		var lines = str.split('\n');
		var arr = [];
		var chunk = '';
		var zone = null;
		var rule = null;
		var zones = [],
			rules = [];

		for (var i = 0; i < lines.length; i++) {
			l = lines[i];
			if (l.match(/^\s/)) {
				l = "Zone " + zone + l;
			}
			l = l.split("#")[0];
			if (l.length > 3) {
				arr = l.split(/\s+/);
				chunk = arr.shift();
				switch(chunk) {
					case 'Zone':
						zones.push(arr.join(','));
						break;
					case 'Rule':
						rules.push(formatRule(arr));
						break;
					case 'Link':
						zones[arr[1]] = zones[arr[1]] || [];
						zones[arr[1]] = arr[0];
						break;
					case 'Leap':
						break;
					default:
						// Fail silently
						break;
				}
			}
		}
		var str2 = 'module.exports = ';
		str2 += JSON.stringify({
			rules : rules,
			zones : zones
		}, null, '\t') + ';\n';
		var outPath = path.join(__dirname, 'js', _zone + '.js');

		fs.writeFile(outPath, str2, function(err) {
			if (err) {
				throw err;
			}
			console.log('Wrote ' + outPath);
		});

	});
}

function parseZones(zones) {
	for (var i = 0; i < zones.length; i++) {
		parseZone(zones[i]);
	}
}

parseZones('africa antarctica asia australasia etcetera europe northamerica pacificnew southamerica'.split(' '));
