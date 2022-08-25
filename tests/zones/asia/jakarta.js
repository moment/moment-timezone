"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Jakarta"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Jakarta", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Jakarta", { abbr: true }),

	"1867" : helpers.makeTestYear("Asia/Jakarta", [
		["1867-08-09T16:52:48+00:00", "00:00:00", "BMT", -25632 / 60]
	]),

	"1923" : helpers.makeTestYear("Asia/Jakarta", [
		["1923-12-31T16:39:59+00:00", "23:47:11", "BMT", -25632 / 60],
		["1923-12-31T16:40:00+00:00", "00:00:00", "+0720", -440]
	]),

	"1932" : helpers.makeTestYear("Asia/Jakarta", [
		["1932-10-31T16:39:59+00:00", "23:59:59", "+0720", -440],
		["1932-10-31T16:40:00+00:00", "00:10:00", "+0730", -450]
	]),

	"1942" : helpers.makeTestYear("Asia/Jakarta", [
		["1942-03-22T16:29:59+00:00", "23:59:59", "+0730", -450],
		["1942-03-22T16:30:00+00:00", "01:30:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Jakarta", [
		["1945-09-22T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-22T15:00:00+00:00", "22:30:00", "+0730", -450]
	]),

	"1948" : helpers.makeTestYear("Asia/Jakarta", [
		["1948-04-30T16:29:59+00:00", "23:59:59", "+0730", -450],
		["1948-04-30T16:30:00+00:00", "00:30:00", "+08", -480]
	]),

	"1950" : helpers.makeTestYear("Asia/Jakarta", [
		["1950-04-30T15:59:59+00:00", "23:59:59", "+08", -480],
		["1950-04-30T16:00:00+00:00", "23:30:00", "+0730", -450]
	]),

	"1963" : helpers.makeTestYear("Asia/Jakarta", [
		["1963-12-31T16:29:59+00:00", "23:59:59", "+0730", -450]
	])
};