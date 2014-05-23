"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["America/Antigua"] = {
	"1912" : helpers.makeTestYear("America/Antigua", [
		["1912-03-02T04:07:11+00:00", "23:59:59", "LMT", 14832 / 60],
		["1912-03-02T04:07:12+00:00", "23:07:12", "EST", 300]
	]),

	"1951" : helpers.makeTestYear("America/Antigua", [
		["1951-01-01T04:59:59+00:00", "23:59:59", "EST", 300],
		["1951-01-01T05:00:00+00:00", "01:00:00", "AST", 240]
	])
};