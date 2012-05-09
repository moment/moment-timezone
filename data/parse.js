var fs = require('fs'),
    path = require('path');

function addZone(list, zone, name) {
    if (!zone[3] || zone[3] > 1970) {
        list[name] = list[name] || [];
        list[name].push(zone);
    }
}


function addRule(list, rule, name) {
    if (rule[1] > 1970 || rule[1] == "max") {
        list[name] = list[name] || [];
        list[name].push(rule);
    }
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
        var zones = {},
            rules = {};

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
                        zone = arr.shift();
                        addZone(zones, arr, zone);
                        break;
                    case 'Rule':
                        rule = arr.shift();
                        addRule(rules, arr, rule);
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
        var str2 = '\\\\ ' + _zone;
        str2 += 'module.exports = {};\n';
        str2 += 'module.exports.rules = ' + JSON.stringify(rules, null, 4) + ';\n';
        str2 += 'module.exports.zones = ' + JSON.stringify(zones, null, 4) + ';\n';
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