"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kabul"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kabul", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kabul", { abbr: true }),

	"1889" : helpers.makeTestYear("Asia/Kabul", [
		["1889-12-31T19:23:12+00:00", "23:23:12", "+04", -240]
	]),

	"1944" : helpers.makeTestYear("Asia/Kabul", [
		["1944-12-31T19:59:59+00:00", "23:59:59", "+04", -240]
	])
};