"use strict";

var helpers = require("../helpers/helpers");

exports["GMT"] = {

	"guess:by:offset" : helpers.makeTestGuess("GMT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("GMT", { abbr: true, expect: "Africa/Abidjan" }),

	"1970" : helpers.makeTestYear("GMT", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "GMT", 0]
	])
};