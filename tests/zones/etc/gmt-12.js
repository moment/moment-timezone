"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-12"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-12", { offset: true, expect: "Pacific/Fiji" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-12", { abbr: true, expect: "Pacific/Fiji" }),

	"1970" : helpers.makeTestYear("Etc/GMT-12", [
		["1970-01-01T00:00:00+00:00", "12:00:00", "+12", -720]
	])
};