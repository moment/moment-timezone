"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/South_Georgia"] = {

	"guess:by:offset" : helpers.makeTestGuess("Atlantic/South_Georgia", { offset: true, expect: "America/Noronha" }),

	"guess:by:abbr" : helpers.makeTestGuess("Atlantic/South_Georgia", { abbr: true, expect: "America/Noronha" }),

	"1890" : helpers.makeTestYear("Atlantic/South_Georgia", [
		["1890-01-01T02:26:07+00:00", "23:59:59", "LMT", 8768 / 60],
		["1890-01-01T02:26:08+00:00", "00:26:08", "-02", 120]
	])
};