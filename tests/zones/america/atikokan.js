"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Atikokan"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Atikokan", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Atikokan", { abbr: true, expect: "America/Panama" }),

	"1918" : helpers.makeTestYear("America/Atikokan", [
		["1918-04-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["1918-04-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1918-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1918-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1940" : helpers.makeTestYear("America/Atikokan", [
		["1940-09-29T05:59:59+00:00", "23:59:59", "CST", 360],
		["1940-09-29T06:00:00+00:00", "01:00:00", "CDT", 300]
	]),

	"1942" : helpers.makeTestYear("America/Atikokan", [
		["1942-02-09T07:59:59+00:00", "02:59:59", "CDT", 300],
		["1942-02-09T08:00:00+00:00", "03:00:00", "CWT", 300]
	]),

	"1945" : helpers.makeTestYear("America/Atikokan", [
		["1945-08-14T22:59:59+00:00", "17:59:59", "CWT", 300],
		["1945-08-14T23:00:00+00:00", "18:00:00", "CPT", 300]
	])
};