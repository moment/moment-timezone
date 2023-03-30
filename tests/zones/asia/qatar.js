"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Qatar"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Qatar", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Qatar", { abbr: true, expect: "Europe/Moscow" }),

	"1919" : helpers.makeTestYear("Asia/Qatar", [
		["1919-12-31T20:33:51+00:00", "23:59:59", "LMT", -12368 / 60],
		["1919-12-31T20:33:52+00:00", "00:33:52", "+04", -240]
	]),

	"1972" : helpers.makeTestYear("Asia/Qatar", [
		["1972-05-31T19:59:59+00:00", "23:59:59", "+04", -240],
		["1972-05-31T20:00:00+00:00", "23:00:00", "+03", -180]
	])
};