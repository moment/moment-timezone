"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Dili"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Dili", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Dili", { abbr: true, expect: "Asia/Tokyo" }),

	"1911" : helpers.makeTestYear("Asia/Dili", [
		["1911-12-31T15:59:59+00:00", "00:22:19", "LMT", -30140 / 60],
		["1911-12-31T16:00:00+00:00", "00:00:00", "+08", -480]
	]),

	"1942" : helpers.makeTestYear("Asia/Dili", [
		["1942-02-21T14:59:59+00:00", "22:59:59", "+08", -480],
		["1942-02-21T15:00:00+00:00", "00:00:00", "+09", -540]
	]),

	"1976" : helpers.makeTestYear("Asia/Dili", [
		["1976-05-02T14:59:59+00:00", "23:59:59", "+09", -540],
		["1976-05-02T15:00:00+00:00", "23:00:00", "+08", -480]
	]),

	"2000" : helpers.makeTestYear("Asia/Dili", [
		["2000-09-16T15:59:59+00:00", "23:59:59", "+08", -480],
		["2000-09-16T16:00:00+00:00", "01:00:00", "+09", -540]
	])
};