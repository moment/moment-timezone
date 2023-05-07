"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+7"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+7", { offset: true, expect: "America/Phoenix" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+7", { abbr: true, expect: "America/Phoenix" }),

	"1970" : helpers.makeTestYear("Etc/GMT+7", [
		["1970-01-01T00:00:00+00:00", "17:00:00", "-07", 420]
	])
};