"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+9"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+9", { offset: true, expect: "Pacific/Gambier" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+9", { abbr: true, expect: "Pacific/Gambier" }),

	"1970" : helpers.makeTestYear("Etc/GMT+9", [
		["1970-01-01T00:00:00+00:00", "15:00:00", "-09", 540]
	])
};