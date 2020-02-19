"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Coral_Harbour"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Coral_Harbour", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Coral_Harbour", { abbr: true, expect: "America/Panama" }),

	"1918" : helpers.makeTestYear("America/Coral_Harbour", [
		["1918-04-14T07:59:59+00:00", "01:59:59", "CST", 360],
		["1918-04-14T08:00:00+00:00", "03:00:00", "CDT", 300],
		["1918-10-27T06:59:59+00:00", "01:59:59", "CDT", 300],
		["1918-10-27T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1940" : helpers.makeTestYear("America/Coral_Harbour", [
		["1940-09-29T05:59:59+00:00", "23:59:59", "CST", 360],
		["1940-09-29T06:00:00+00:00", "01:00:00", "CDT", 300]
	]),

	"1942" : helpers.makeTestYear("America/Coral_Harbour", [
		["1942-02-09T07:59:59+00:00", "02:59:59", "CDT", 300],
		["1942-02-09T08:00:00+00:00", "03:00:00", "CWT", 300]
	]),

	"1945" : helpers.makeTestYear("America/Coral_Harbour", [
		["1945-08-14T22:59:59+00:00", "17:59:59", "CWT", 300],
		["1945-08-14T23:00:00+00:00", "18:00:00", "CPT", 300],
		["1945-09-30T06:59:59+00:00", "01:59:59", "CPT", 300],
		["1945-09-30T07:00:00+00:00", "02:00:00", "EST", 300]
	])
};