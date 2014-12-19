"use strict";

var moment = require("../../");

exports.default = {
	// defaultZone : function (t) {
	// 	t.equal(
	// 		moment.defaultZone,
	// 		null,
	// 		'initial default zone should be null'
	// 	);
	// 	t.equal(
	// 		moment.tz.setDefault('America/New_York').defaultZone.name,
	// 		'America/New_York',
	// 		'calling moment.tz.setDefault with a valid timezone should expose it via defaultZone'
	// 	);
	// 	t.equal(
	// 		moment.tz.setDefault().defaultZone,
	// 		null,
	// 		'calling moment.tz.setDefault with a falsey argument should unset defaultZone'
	// 	);
	// 	t.done();
	// },
	// normal: function (t) {
	// 	moment.tz.setDefault('America/New_York');
	// 	var m = moment();
	// 	t.equal(
	// 		m._z.name,
	// 		'America/New_York',
	// 		'creating moments should set their default timezone if it is set'
	// 	);

	// 	moment.tz.setDefault();
	// 	var m2 = moment();
	// 	moment.tz.setDefault('America/New_York');
	// 	m2.millisecond(0);
	// 	t.equal(
	// 		m2._z,
	// 		null,
	// 		'calling updateOffset on moments created before setting a default timezone should not affect their timezone'
	// 	);
	// 	moment.tz.setDefault();
	// 	t.done();
	// },
	// utc : function (t) {
	// 	moment.tz.setDefault('America/New_York');
	// 	t.equal(
	// 		moment.utc().format('ZZ'),
	// 		'+0000',
	// 		'creating moments in UTC mode should ignore default timezone'
	// 	);
	// 	t.notEqual(
	// 		moment().format('ZZ'),
	// 		'+0000',
	// 		'using UTC mode should not affect normal moment creation'
	// 	);

	// 	var utc_moment = moment.utc(),
	// 	    normal_moment = moment(),
	// 	    normal_moment_offset = normal_moment.format('ZZ');
	// 	moment.tz.setDefault();
	// 	utc_moment.millisecond(0);
	// 	normal_moment.millisecond(0);
	// 	t.equal(
	// 		utc_moment.format('ZZ'),
	// 		'+0000',
	// 		'resetting default timezone should not affect existing moments created in UTC mode'
	// 	);
	// 	t.equal(
	// 		normal_moment.format('ZZ'),
	// 		normal_moment_offset,
	// 		'resetting default timezone should not affect existing moments'
	// 	);
	// 	t.done();
	// }
};
