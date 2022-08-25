"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Cocos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Cocos", { offset: true, expect: "Asia/Rangoon" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Cocos", { abbr: true, expect: "Asia/Rangoon" }),

	"1879" : helpers.makeTestYear("Indian/Cocos", [
		["1879-12-31T17:35:13+00:00", "00:00:00", "RMT", -23087 / 60]
	]),

	"1919" : helpers.makeTestYear("Indian/Cocos", [
		["1919-12-31T17:35:12+00:00", "23:59:59", "RMT", -23087 / 60],
		["1919-12-31T17:35:13+00:00", "00:05:13", "+0630", -390]
	]),

	"1942" : helpers.makeTestYear("Indian/Cocos", [
		["1942-04-30T17:29:59+00:00", "23:59:59", "+0630", -390],
		["1942-04-30T17:30:00+00:00", "02:30:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Indian/Cocos", [
		["1945-05-02T14:59:59+00:00", "23:59:59", "+09", -540]
	])
};