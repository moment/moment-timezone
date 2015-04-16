"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Niue"] = {
	"1951" : helpers.makeTestYear("Pacific/Niue", [
		["1951-01-01T11:19:59+00:00", "23:59:59", "NUT", 680],
		["1951-01-01T11:20:00+00:00", "23:50:00", "NUT", 690]
	])
};