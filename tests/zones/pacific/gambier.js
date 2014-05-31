"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Gambier"] = {
	"1912" : helpers.makeTestYear("Pacific/Gambier", [
		["1912-10-01T08:59:47+00:00", "23:59:59", "LMT", 32388 / 60],
		["1912-10-01T08:59:48+00:00", "23:59:48", "GAMT", 540]
	])
};