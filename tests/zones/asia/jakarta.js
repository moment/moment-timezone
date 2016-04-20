"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Jakarta"] = {
	"guess" : helpers.makeTestGuess("Asia/Jakarta", { offset: true, abbr: true }),

	"1923" : helpers.makeTestYear("Asia/Jakarta", [
		["1923-12-31T16:39:59Z", "23:47:11", "BMT", -25632 / 60],
		["1923-12-31T16:40:00Z", "00:00:00", "JAVT", -440]
	]),

	"1932" : helpers.makeTestYear("Asia/Jakarta", [
		["1932-10-31T16:39:59Z", "23:59:59", "JAVT", -440],
		["1932-10-31T16:40:00Z", "00:10:00", "WIB", -450]
	]),

	"1942" : helpers.makeTestYear("Asia/Jakarta", [
		["1942-03-22T16:29:59Z", "23:59:59", "WIB", -450],
		["1942-03-22T16:30:00Z", "01:30:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Jakarta", [
		["1945-09-22T14:59:59Z", "23:59:59", "JST", -540],
		["1945-09-22T15:00:00Z", "22:30:00", "WIB", -450]
	]),

	"1948" : helpers.makeTestYear("Asia/Jakarta", [
		["1948-04-30T16:29:59Z", "23:59:59", "WIB", -450],
		["1948-04-30T16:30:00Z", "00:30:00", "WIB", -480]
	]),

	"1950" : helpers.makeTestYear("Asia/Jakarta", [
		["1950-04-30T15:59:59Z", "23:59:59", "WIB", -480],
		["1950-04-30T16:00:00Z", "23:30:00", "WIB", -450]
	]),

	"1963" : helpers.makeTestYear("Asia/Jakarta", [
		["1963-12-31T16:29:59Z", "23:59:59", "WIB", -450],
		["1963-12-31T16:30:00Z", "23:30:00", "WIB", -420]
	])
};