"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kuala_Lumpur"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kuala_Lumpur", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kuala_Lumpur", { abbr: true, expect: "Asia/Manila" }),

	"1905" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1905-05-31T17:04:34+00:00", "23:59:59", "SMT", -24925 / 60],
		["1905-05-31T17:04:35+00:00", "00:04:35", "+07", -420]
	]),

	"1932" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1932-12-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1932-12-31T17:00:00+00:00", "00:20:00", "+0720", -440]
	]),

	"1935" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1935-12-31T16:39:59+00:00", "23:59:59", "+0720", -440],
		["1935-12-31T16:40:00+00:00", "00:00:00", "+0720", -440]
	]),

	"1941" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1941-08-31T16:39:59+00:00", "23:59:59", "+0720", -440],
		["1941-08-31T16:40:00+00:00", "00:10:00", "+0730", -450]
	]),

	"1942" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1942-02-15T16:29:59+00:00", "23:59:59", "+0730", -450],
		["1942-02-15T16:30:00+00:00", "01:30:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1945-09-11T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-11T15:00:00+00:00", "22:30:00", "+0730", -450]
	]),

	"1981" : helpers.makeTestYear("Asia/Kuala_Lumpur", [
		["1981-12-31T16:29:59+00:00", "23:59:59", "+0730", -450],
		["1981-12-31T16:30:00+00:00", "00:30:00", "+08", -480]
	])
};