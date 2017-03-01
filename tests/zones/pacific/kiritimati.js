"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kiritimati"] = {
	"1979" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1979-10-01T10:39:59+00:00", "23:59:59", "-1040", 640],
		["1979-10-01T10:40:00+00:00", "00:40:00", "-10", 600]
	]),

	"1995" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1995-01-01T09:59:59+00:00", "23:59:59", "-10", 600],
		["1995-01-01T10:00:00+00:00", "00:00:00", "+14", -840]
	])
};