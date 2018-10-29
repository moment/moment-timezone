"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Saipan"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Saipan", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Saipan", { abbr: true, expect: "Pacific/Guam" }),

	"1900" : helpers.makeTestYear("Pacific/Saipan", [
		["1900-12-31T14:20:59+00:00", "23:59:59", "LMT", -579],
		["1900-12-31T14:21:00+00:00", "00:21:00", "GST", -600]
	])
};