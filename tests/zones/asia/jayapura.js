"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Jayapura"] = {
	"guess" : helpers.makeTestGuess("Asia/Jayapura", { offset: false, abbr: true }),

	"1932" : helpers.makeTestYear("Asia/Jayapura", [
		["1932-10-31T14:37:11+00:00", "23:59:59", "LMT", -33768 / 60],
		["1932-10-31T14:37:12+00:00", "23:37:12", "+09", -540]
	]),

	"1944" : helpers.makeTestYear("Asia/Jayapura", [
		["1944-08-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1944-08-31T15:00:00+00:00", "00:30:00", "+0930", -570]
	]),

	"1963" : helpers.makeTestYear("Asia/Jayapura", [
		["1963-12-31T14:29:59+00:00", "23:59:59", "+0930", -570],
		["1963-12-31T14:30:00+00:00", "23:30:00", "WIT", -540]
	])
};