"use strict";

var helpers = require("../helpers/helpers");

exports.issue1096 = {
	"roundTo rounds floating point numbers to specified decimal places" : function (t) {
		t.equal(helpers.roundTo(4.866666666666667, 4), helpers.roundTo(4.866666666666666, 4));
		t.equal(helpers.roundTo(4.866666666666667, 4), 4.8667);
		t.equal(helpers.roundTo(-4.866666666666667, 4), -4.8667);
		t.done();
	},

	"makeTestYear tolerates tiny floating point inaccuracies in offsets" : function (t) {
		var fakeTest = {
			expectCount: 0,
			expect: function (n) { this.expectCount = n; },
			equal: function (actual, expected, message) {
				t.equal(actual, expected, message);
			},
			done: function () {
				t.done();
			}
		};

		var testFn = helpers.makeTestYear("Africa/Lome", [
			["1912-01-01T00:16:07+00:00", "23:59:59", "LMT", 968 / 60 + 0.000000000000001]
		]);
		testFn(fakeTest);
	}
};
