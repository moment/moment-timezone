"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Pyongyang"] = {
	"1911" : helpers.makeTestYear("Asia/Pyongyang", [
		["1911-12-31T15:29:59+00:00", "23:59:59", "KST", -510],
		["1911-12-31T15:30:00+00:00", "00:30:00", "JCST", -540]
	]),

	"1937" : helpers.makeTestYear("Asia/Pyongyang", [
		["1937-09-30T14:59:59+00:00", "23:59:59", "JCST", -540],
		["1937-09-30T15:00:00+00:00", "00:00:00", "JST", -540]
	])
};