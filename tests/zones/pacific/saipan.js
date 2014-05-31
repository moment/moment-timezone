"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Saipan"] = {
	"1969" : helpers.makeTestYear("Pacific/Saipan", [
		["1969-09-30T14:59:59+00:00", "23:59:59", "MPT", -540],
		["1969-09-30T15:00:00+00:00", "01:00:00", "MPT", -600]
	]),

	"2000" : helpers.makeTestYear("Pacific/Saipan", [
		["2000-12-22T13:59:59+00:00", "23:59:59", "MPT", -600],
		["2000-12-22T14:00:00+00:00", "00:00:00", "ChST", -600]
	])
};