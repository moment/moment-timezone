"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Creston"] = {
	"1916" : helpers.makeTestYear("America/Creston", [
		["1916-10-01T06:59:59Z", "23:59:59", "MST", 420],
		["1916-10-01T07:00:00Z", "23:00:00", "PST", 480]
	]),

	"1918" : helpers.makeTestYear("America/Creston", [
		["1918-06-02T07:59:59Z", "23:59:59", "PST", 480],
		["1918-06-02T08:00:00Z", "01:00:00", "MST", 420]
	])
};