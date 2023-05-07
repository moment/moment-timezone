"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-3"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-3", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-3", { abbr: true, expect: "Europe/Moscow" }),

	"1970" : helpers.makeTestYear("Etc/GMT-3", [
		["1970-01-01T00:00:00+00:00", "03:00:00", "+03", -180]
	])
};