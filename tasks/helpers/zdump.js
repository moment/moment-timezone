"use strict";

var exec = require('child_process').exec;

function splitToLines (stdout) {
	return stdout.split('\n').filter(function (line) {
		return !!line;
	});
}

module.exports = function zdump(name, cb) {
	exec('zdump -v ' + name, function (err, stdout) {
		if (err) {
			cb(err);
		} else {
			cb(null, splitToLines(stdout));
		}
	});
};