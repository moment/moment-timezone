"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kiritimati"] = {
	"1979" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1979-10-01T10:39:59+00:00", "23:59:59", "LINT", 640],
		["1979-10-01T10:40:00+00:00", "00:40:00", "LINT", 600]
	])
};