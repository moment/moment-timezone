"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT", { abbr: true, expect: "Africa/Abidjan" }),

	"1970" : helpers.makeTestYear("Etc/GMT", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "GMT", 0]
	])
};