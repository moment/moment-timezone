"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guyana"] = {
	"1966" : helpers.makeTestYear("America/Guyana", [
		["1966-05-26T03:44:59+00:00", "23:59:59", "GBGT", 225],
		["1966-05-26T03:45:00+00:00", "00:00:00", "GYT", 225]
	]),

	"1975" : helpers.makeTestYear("America/Guyana", [
		["1975-07-31T03:44:59+00:00", "23:59:59", "GYT", 225],
		["1975-07-31T03:45:00+00:00", "00:45:00", "GYT", 180]
	])
};