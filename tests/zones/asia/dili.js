"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Dili"] = {
	"1942" : helpers.makeTestYear("Asia/Dili", [
		["1942-02-21T14:59:59+00:00", "22:59:59", "TLT", -480],
		["1942-02-21T15:00:00+00:00", "00:00:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Dili", [
		["1945-09-22T14:59:59+00:00", "23:59:59", "JST", -540],
		["1945-09-22T15:00:00+00:00", "00:00:00", "TLT", -540]
	]),

	"1976" : helpers.makeTestYear("Asia/Dili", [
		["1976-05-02T14:59:59+00:00", "23:59:59", "TLT", -540],
		["1976-05-02T15:00:00+00:00", "23:00:00", "WITA", -480]
	])
};