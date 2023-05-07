"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+2"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+2", { offset: true, expect: "America/Noronha" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+2", { abbr: true, expect: "America/Noronha" }),

	"1970" : helpers.makeTestYear("Etc/GMT+2", [
		["1970-01-01T00:00:00+00:00", "22:00:00", "-02", 120]
	])
};