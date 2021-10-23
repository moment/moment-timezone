"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Yangon"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Yangon", { offset: true, expect: "Asia/Rangoon" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Yangon", { abbr: true, expect: "Asia/Rangoon" }),

	"1919" : helpers.makeTestYear("Asia/Yangon", [
		["1919-12-31T17:35:12+00:00", "23:59:59", "RMT", -23087 / 60, 0],
		["1919-12-31T17:35:13+00:00", "00:05:13", "+0630", -390, 0]
	]),

	"1942" : helpers.makeTestYear("Asia/Yangon", [
		["1942-04-30T17:29:59+00:00", "23:59:59", "+0630", -390, 0],
		["1942-04-30T17:30:00+00:00", "02:30:00", "+09", -540, 0]
	])
};