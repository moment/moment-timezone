"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Jayapura"] = {
	"1944" : helpers.makeTestYear("Asia/Jayapura", [
		["1944-08-31T14:59:59+00:00", "23:59:59", "WIT", -540],
		["1944-08-31T15:00:00+00:00", "00:30:00", "ACST", -570]
	])
};