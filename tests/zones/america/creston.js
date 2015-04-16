"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Creston"] = {
	"1916" : helpers.makeTestYear("America/Creston", [
		["1916-10-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1916-10-01T07:00:00+00:00", "23:00:00", "PST", 480]
	])
};