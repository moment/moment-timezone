"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Martinique"] = {
	"1911" : helpers.makeTestYear("America/Martinique", [
		["1911-05-01T04:04:19+00:00", "23:59:59", "FFMT", 14660 / 60],
		["1911-05-01T04:04:20+00:00", "00:04:20", "AST", 240]
	]),

	"1980" : helpers.makeTestYear("America/Martinique", [
		["1980-04-06T03:59:59+00:00", "23:59:59", "AST", 240],
		["1980-04-06T04:00:00+00:00", "01:00:00", "ADT", 180]
	])
};