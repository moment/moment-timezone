"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bamako"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bamako", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bamako", { abbr: true, expect: "Etc/UTC" }),

	"1912" : helpers.makeTestYear("Africa/Bamako", [
		["1912-01-01T00:16:07+00:00", "23:59:59", "LMT", 968 / 60],
		["1912-01-01T00:16:08+00:00", "00:16:08", "GMT", 0]
	])
};