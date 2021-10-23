"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Makassar"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Makassar", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Makassar", { abbr: true }),

	"1932" : helpers.makeTestYear("Asia/Makassar", [
		["1932-10-31T16:02:23+00:00", "23:59:59", "MMT", -28656 / 60, 0],
		["1932-10-31T16:02:24+00:00", "00:02:24", "+08", -480, 0]
	]),

	"1942" : helpers.makeTestYear("Asia/Makassar", [
		["1942-02-08T15:59:59+00:00", "23:59:59", "+08", -480, 0],
		["1942-02-08T16:00:00+00:00", "01:00:00", "+09", -540, 0]
	])
};