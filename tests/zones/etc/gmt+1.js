"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+1"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+1", { offset: true, expect: "Atlantic/Cape_Verde" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+1", { abbr: true, expect: "Atlantic/Cape_Verde" }),

	"1970" : helpers.makeTestYear("Etc/GMT+1", [
		["1970-01-01T00:00:00+00:00", "23:00:00", "-01", 60]
	])
};