"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Gaborone"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Gaborone", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Gaborone", { abbr: true, expect: "Africa/Khartoum" }),

	"1908" : helpers.makeTestYear("Africa/Gaborone", [
		["1908-12-31T21:49:41+00:00", "23:59:59", "LMT", -7818 / 60],
		["1908-12-31T21:49:42+00:00", "23:49:42", "CAT", -120]
	])
};