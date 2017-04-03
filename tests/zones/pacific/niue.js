"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Niue"] = {
	"1951" : helpers.makeTestYear("Pacific/Niue", [
		["1951-01-01T11:19:59+00:00", "23:59:59", "-1120", 680],
		["1951-01-01T11:20:00+00:00", "23:50:00", "-1130", 690]
	]),

	"1978" : helpers.makeTestYear("Pacific/Niue", [
		["1978-10-01T11:29:59+00:00", "23:59:59", "-1130", 690],
		["1978-10-01T11:30:00+00:00", "00:30:00", "-11", 660]
	])
};