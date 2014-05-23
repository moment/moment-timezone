"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Asia/Bahrain"] = {
	"1919" : helpers.makeTestYear("Asia/Bahrain", [
		["1919-12-31T20:37:39+00:00", "23:59:59", "LMT", -12140 / 60],
		["1919-12-31T20:37:40+00:00", "00:37:40", "GST", -240]
	]),

	"1972" : helpers.makeTestYear("Asia/Bahrain", [
		["1972-05-31T19:59:59+00:00", "23:59:59", "GST", -240],
		["1972-05-31T20:00:00+00:00", "23:00:00", "AST", -180]
	])
};