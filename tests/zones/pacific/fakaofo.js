"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Pacific/Fakaofo"] = {
	"2011" : helpers.makeTestYear("Pacific/Fakaofo", [
		["2011-12-30T10:59:59+00:00", "23:59:59", "TKT", 660],
		["2011-12-30T11:00:00+00:00", "00:00:00", "TKT", -780]
	])
};