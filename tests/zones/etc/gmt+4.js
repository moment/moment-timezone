"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+4"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+4", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+4", { abbr: true, expect: "America/Santo_Domingo" }),

	"1970" : helpers.makeTestYear("Etc/GMT+4", [
		["1970-01-01T00:00:00+00:00", "20:00:00", "-04", 240]
	])
};