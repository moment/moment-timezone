"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Rangoon"] = {
	"guess" : helpers.makeTestGuess("Asia/Rangoon", { offset: true, abbr: true }),

	"1919" : helpers.makeTestYear("Asia/Rangoon", [
		["1919-12-31T17:35:19Z", "23:59:59", "RMT", -23080 / 60],
		["1919-12-31T17:35:20Z", "00:05:20", "BURT", -390]
	]),

	"1942" : helpers.makeTestYear("Asia/Rangoon", [
		["1942-04-30T17:29:59Z", "23:59:59", "BURT", -390],
		["1942-04-30T17:30:00Z", "02:30:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Rangoon", [
		["1945-05-02T14:59:59Z", "23:59:59", "JST", -540],
		["1945-05-02T15:00:00Z", "21:30:00", "MMT", -390]
	])
};