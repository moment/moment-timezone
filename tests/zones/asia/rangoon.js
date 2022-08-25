"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Rangoon"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Rangoon", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Rangoon", { abbr: true }),

	"1879" : helpers.makeTestYear("Asia/Rangoon", [
		["1879-12-31T17:35:13+00:00", "00:00:00", "RMT", -23087 / 60]
	]),

	"1919" : helpers.makeTestYear("Asia/Rangoon", [
		["1919-12-31T17:35:12+00:00", "23:59:59", "RMT", -23087 / 60],
		["1919-12-31T17:35:13+00:00", "00:05:13", "+0630", -390]
	]),

	"1942" : helpers.makeTestYear("Asia/Rangoon", [
		["1942-04-30T17:29:59+00:00", "23:59:59", "+0630", -390],
		["1942-04-30T17:30:00+00:00", "02:30:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Rangoon", [
		["1945-05-02T14:59:59+00:00", "23:59:59", "+09", -540]
	])
};