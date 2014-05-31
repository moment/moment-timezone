"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Enderbury"] = {
	"1979" : helpers.makeTestYear("Pacific/Enderbury", [
		["1979-10-01T11:59:59+00:00", "23:59:59", "PHOT", 720],
		["1979-10-01T12:00:00+00:00", "01:00:00", "PHOT", 660]
	]),

	"1995" : helpers.makeTestYear("Pacific/Enderbury", [
		["1995-01-01T10:59:59+00:00", "23:59:59", "PHOT", 660],
		["1995-01-01T11:00:00+00:00", "00:00:00", "PHOT", -780]
	])
};