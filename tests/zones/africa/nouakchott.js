"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Nouakchott"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Nouakchott", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Nouakchott", { abbr: true, expect: "Africa/Abidjan" }),

	"1912" : helpers.makeTestYear("Africa/Nouakchott", [
		["1912-01-01T00:16:07+00:00", "23:59:59", "LMT", 968 / 60],
		["1912-01-01T00:16:08+00:00", "00:16:08", "GMT", 0]
	])
};