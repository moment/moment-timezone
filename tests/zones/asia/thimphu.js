"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Thimphu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Thimphu", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Thimphu", { abbr: true, expect: "Asia/Dhaka" }),

	"1947" : helpers.makeTestYear("Asia/Thimphu", [
		["1947-08-14T18:01:23+00:00", "23:59:59", "LMT", -21516 / 60],
		["1947-08-14T18:01:24+00:00", "23:31:24", "+0530", -330]
	]),

	"1987" : helpers.makeTestYear("Asia/Thimphu", [
		["1987-09-30T18:29:59+00:00", "23:59:59", "+0530", -330],
		["1987-09-30T18:30:00+00:00", "00:30:00", "+06", -360]
	])
};