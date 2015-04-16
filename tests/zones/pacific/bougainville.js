"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Bougainville"] = {
	"1894" : helpers.makeTestYear("Pacific/Bougainville", [
		["1894-12-31T14:11:27+00:00", "23:59:59", "PMMT", -35312 / 60],
		["1894-12-31T14:11:28+00:00", "00:11:28", "PGT", -600]
	]),

	"1942" : helpers.makeTestYear("Pacific/Bougainville", [
		["1942-06-30T13:59:59+00:00", "23:59:59", "PGT", -600],
		["1942-06-30T14:00:00+00:00", "23:00:00", "JST", -540]
	]),

	"1945" : helpers.makeTestYear("Pacific/Bougainville", [
		["1945-08-20T14:59:59+00:00", "23:59:59", "JST", -540],
		["1945-08-20T15:00:00+00:00", "01:00:00", "PGT", -600]
	])
};