"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kabul"] = {
	"1944" : helpers.makeTestYear("Asia/Kabul", [
		["1944-12-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1944-12-31T20:00:00+00:00", "00:30:00", "+0430", -270]
	])
};