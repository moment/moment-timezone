"use strict";

var helpers = require("../helpers/helpers");

exports["Kwajalein"] = {
	"1969" : helpers.makeTestYear("Kwajalein", [
		["1969-09-30T12:59:59+00:00", "23:59:59", "MHT", -660],
		["1969-09-30T13:00:00+00:00", "01:00:00", "KWAT", 720]
	]),

	"1993" : helpers.makeTestYear("Kwajalein", [
		["1993-08-20T11:59:59+00:00", "23:59:59", "KWAT", 720],
		["1993-08-20T12:00:00+00:00", "00:00:00", "MHT", -720]
	])
};