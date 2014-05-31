"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Antananarivo"] = {
	"1911" : helpers.makeTestYear("Indian/Antananarivo", [
		["1911-06-30T20:49:55+00:00", "23:59:59", "LMT", -11404 / 60],
		["1911-06-30T20:49:56+00:00", "23:49:56", "EAT", -180]
	]),

	"1954" : helpers.makeTestYear("Indian/Antananarivo", [
		["1954-02-27T19:59:59+00:00", "22:59:59", "EAT", -180],
		["1954-02-27T20:00:00+00:00", "00:00:00", "EAST", -240],
		["1954-05-29T19:59:59+00:00", "23:59:59", "EAST", -240],
		["1954-05-29T20:00:00+00:00", "23:00:00", "EAT", -180]
	])
};