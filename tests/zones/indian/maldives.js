"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Indian/Maldives"] = {
	"1959" : helpers.makeTestYear("Indian/Maldives", [
		["1959-12-31T19:05:59+00:00", "23:59:59", "MMT", -294],
		["1959-12-31T19:06:00+00:00", "00:06:00", "MVT", -300]
	])
};