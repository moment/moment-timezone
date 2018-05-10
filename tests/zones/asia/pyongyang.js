"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Pyongyang"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Pyongyang", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Pyongyang", { abbr: true }),

	"1908" : helpers.makeTestYear("Asia/Pyongyang", [
		["1908-03-31T15:36:59+00:00", "23:59:59", "LMT", -503],
		["1908-03-31T15:37:00+00:00", "00:07:00", "KST", -510]
	]),

	"1911" : helpers.makeTestYear("Asia/Pyongyang", [
		["1911-12-31T15:29:59+00:00", "23:59:59", "KST", -510],
		["1911-12-31T15:30:00+00:00", "00:30:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Pyongyang", [
		["1945-08-23T14:59:59+00:00", "23:59:59", "JST", -540],
		["1945-08-23T15:00:00+00:00", "00:00:00", "KST", -540]
	]),

	"2015" : helpers.makeTestYear("Asia/Pyongyang", [
		["2015-08-14T14:59:59+00:00", "23:59:59", "KST", -540],
		["2015-08-14T15:00:00+00:00", "23:30:00", "KST", -510]
	]),

	"2018" : helpers.makeTestYear("Asia/Pyongyang", [
		["2018-05-04T15:29:59+00:00", "23:59:59", "KST", -510],
		["2018-05-04T15:30:00+00:00", "00:30:00", "KST", -540]
	])
};