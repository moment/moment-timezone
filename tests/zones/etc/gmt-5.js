"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-5"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-5", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-5", { abbr: true, expect: "Asia/Karachi" }),

	"1970" : helpers.makeTestYear("Etc/GMT-5", [
		["1970-01-01T00:00:00+00:00", "05:00:00", "+05", -300]
	])
};