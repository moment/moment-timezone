"use strict";

var Change = require('./change'),
	Year = require('./year'),
	toBase60 = require('./to-base-60');

function Zone (name, lines) {
	this.years = {};
	this.changes = [];
	this.name = name;
	this.addChanges(lines);
	this.addTests(lines);
}

module.exports = Zone;




// TESTS

Zone.prototype.addTests = function (data) {
	// Ignore first two and last two lines
	data.slice(2, -2).forEach(function (item) {
		this.addTestForChange(new Change(item));
	}.bind(this));
};

Zone.prototype.addTestForChange = function (change) {
	var years = this.years;
	if (!years[change.year]) {
		years[change.year] = new Year(this.name, change.year);
	}
	years[change.year].add(change);
};

Zone.prototype.renderTestYears = function () {
	var o = [],
		years = this.years,
		i;

	for (i in years) {
		if (years.hasOwnProperty(i)) {
			o.push(years[i].format());
		}
	}
	return o.join(',\n\n');
};

Zone.prototype.renderTestRequire = function () {
	var levels = (this.name.match(/\//g) || []).length,
		i,
		o = '';

	if (levels === 0) {
		return './';
	}

	for (i = 0; i < levels; i++) {
		o += '../';
	}
	return o;
};

Zone.prototype.renderTests = function () {
	return [
		'"use strict";',
		'',
		'var helpers = require("' + this.renderTestRequire() + '../../tests/helpers/helpers");',
		'',
		'exports["' + this.name + '"] = {',
		this.renderTestYears(),
		'};'
	].join('\n');
};




// CHANGES

Zone.prototype.addChanges = function (data) {
	data.forEach(function (item) {
		this.addChange(new Change(item));
	}.bind(this));
};

Zone.prototype.addChange = function (change) {
	var changes = this.changes,
		last = changes[changes.length - 1];

	if (last && last.isSameAs(change)) {
		changes.pop();
		last = changes[changes.length - 1];
	} else if (last) {
		last.until = +change.start;
	}

	changes.push(change);
};

Zone.prototype.renderUntils = function () {
	var last = 0;

	return this.changes.slice(0, -1).map(function (change) {
		var diff = change.until - last;
		last = change.until;
		return diff;
	}).map(function (number) {
		return Math.round(number / 1000);
	}).map(toBase60).join(' ');
};

Zone.prototype.renderMapIndex = function () {
	var count = 0,
		indices = [],
		map = {},
		names = [],
		offsets = [];

	this.changes.forEach(function (change, i) {
		var value = change.name + '|' + change.offset;
		if (map[value] === undefined) {
			map[value] = count;
			names[count] = change.name;
			offsets[count] = change.offset;
			count++;
		}
		indices[i] = map[value];
	});

	return [
		names.join(' '),
		offsets.map(toBase60).join(' '),
		indices.map(toBase60).join('')
	].join('|');
};

Zone.prototype.renderChanges = function () {
	return [
		this.name,
		this.renderMapIndex(),
		this.renderUntils()
	].join('|');
};
