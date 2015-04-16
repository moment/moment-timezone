"use strict";

var helpers = require("../../helpers/helpers");

exports["America/La_Paz"] = {
	"1931" : helpers.makeTestYear("America/La_Paz", [
		["1931-10-15T04:32:35+00:00", "23:59:59", "CMT", 16356 / 60],
		["1931-10-15T04:32:36+00:00", "01:00:00", "BOST", 12756 / 60]
	])
};