"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Jayapura"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Jayapura", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Jayapura", { abbr: true }),

	"1944" : helpers.makeTestYear("Asia/Jayapura", [
		["1944-08-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1944-08-31T15:00:00+00:00", "00:30:00", "+0930", -570, 0]
	])
};