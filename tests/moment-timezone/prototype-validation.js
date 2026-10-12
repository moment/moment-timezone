"use strict";

var moment = require("../../"),
	origConsoleError = console.error,
	checkProps = [
		'__proto__',
		'constructor',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'prototype',
		'toLocaleString',
		'toString',
		'valueOf',
	];

exports['prototype chain validation'] = {
	setUp : function (done) {
		// Suppress the "has no data" warning
		console.error = function () {};
		done();
	},

	tearDown : function (done) {
		console.error = origConsoleError;
		moment.tz.setDefault(null);
		done();
	},

	'moment.tz() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz(prop);
				moment.tz('2026-10-11', prop);
			}, Error, prop);
		});

		t.done();
	},

	'moment().tz() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment('2026-10-11').tz(prop);
			}, Error, prop);
		});

		t.done();
	},

	'moment.tz.setDefault() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz.setDefault(prop);
			}, Error, prop);
		});

		t.done();
	},

	'moment.tz.zone() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz.zone(prop);
			}, Error, prop);
		});

		t.done();
	},

	'moment.tz.zonesForCountry() checks object prototypes' : function (t) {
		t.expect(checkProps.length * 2);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz.zonesForCountry(prop);
			}, Error, 'throw: ' + prop);
			t.equal(moment.tz.zonesForCountry(prop), null, 'read: ' + prop);
		});

		t.done();
	},

	'moment.tz.add() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz.add([prop, prop, 0, 0, 0].join('|'));
			}, Error, prop);
		});

		t.done();
	},

	'moment.tz.link() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz.link([prop, prop].join('|'));
			}, Error, prop);
		});

		t.done();
	},

	'moment.tz.load() checks object prototypes' : function (t) {
		t.expect(checkProps.length);

		checkProps.forEach(function (prop) {
			t.doesNotThrow(function () {
				moment.tz.load({
					version: prop,
					zones: [[prop, prop, 0, 0, 0].join('|')],
					links: [[prop, prop].join('|')],
					countries: [[prop, prop].join('|')],
				});
			}, Error, prop);
		});

		t.done();
	},
};
