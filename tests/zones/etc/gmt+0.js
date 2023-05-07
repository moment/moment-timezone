"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+0"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+0", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+0", { abbr: true, expect: "Africa/Abidjan" }),

	"1970" : helpers.makeTestYear("Etc/GMT+0", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "GMT", 0]
	])
};