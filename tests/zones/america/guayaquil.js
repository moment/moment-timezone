"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guayaquil"] = {
	"guess" : helpers.makeTestGuess("America/Guayaquil", { offset: false, abbr: true }),

	"1931" : helpers.makeTestYear("America/Guayaquil", [
		["1931-01-01T05:13:59+00:00", "23:59:59", "QMT", 314],
		["1931-01-01T05:14:00+00:00", "00:14:00", "ECT", 300]
	])
};