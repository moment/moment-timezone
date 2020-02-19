"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Bahrain"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Bahrain", { offset: true, expect: "Europe/Simferopol" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Bahrain", { abbr: true, expect: "Europe/Simferopol" }),

	"1919" : helpers.makeTestYear("Asia/Bahrain", [
		["1919-12-31T20:33:51+00:00", "23:59:59", "LMT", -12368 / 60],
		["1919-12-31T20:33:52+00:00", "00:33:52", "+04", -240]
	]),

	"1972" : helpers.makeTestYear("Asia/Bahrain", [
		["1972-05-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1972-05-31T20:00:00+00:00", "23:00:00", "+03", -180]
	])
};