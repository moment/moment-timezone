"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Asia/Qatar"] = {
	"1919" : helpers.makeTestYear("Asia/Qatar", [
		["1919-12-31T20:33:51+00:00", "23:59:59", "LMT", -12368 / 60],
		["1919-12-31T20:33:52+00:00", "00:33:52", "GST", -240]
	]),

	"1972" : helpers.makeTestYear("Asia/Qatar", [
		["1972-05-31T19:59:59+00:00", "23:59:59", "GST", -240],
		["1972-05-31T20:00:00+00:00", "23:00:00", "AST", -180]
	])
};