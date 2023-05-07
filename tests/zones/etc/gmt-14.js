"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-14"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-14", { offset: true, expect: "Pacific/Kiritimati" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-14", { abbr: true, expect: "Pacific/Kiritimati" }),

	"1970" : helpers.makeTestYear("Etc/GMT-14", [
		["1970-01-01T00:00:00+00:00", "14:00:00", "+14", -840]
	])
};