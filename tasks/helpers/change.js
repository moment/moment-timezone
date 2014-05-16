"use strict";

var moment = require('moment');

function Change (line) {
	var s = line.split(/\s+/),
		format = "MMM D HH:mm:ss YYYY",
		utc = moment.utc(s.slice(2, 6).join(' '), format),
		local = moment.utc(s.slice(9, 13).join(' '), format);

	this.utc = utc;
	this.start = +utc;
	this.until = Infinity;
	this.name = s[13];
	this.offset = Math.round(utc.diff(local, 'seconds', true));
	this.year = s[5];
	this.time = s[11];

	if (this.offset % 60 === 0) {
		this.offsetFraction = Math.round(this.offset / 60);
	} else {
		this.offsetFraction = this.offset + ' / 60';
	}
}

module.exports = Change;

Change.prototype = {
	isSameAs : function (other) {
		return (other.offset === this.offset) && (other.name === this.name);
	},

	formatTest : function () {
		return '[' + [
			'"' + this.utc.format() + '"',
			'"' + this.time + '"',
			'"' + this.name + '"',
			this.offsetFraction
		].join(', ') + ']';
	}
};