"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/St_Helena"] = {

	"guess:by:offset" : helpers.makeTestGuess("Atlantic/St_Helena", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Atlantic/St_Helena", { abbr: true, expect: "Etc/UTC" }),

	"1912" : helpers.makeTestYear("Atlantic/St_Helena", [
		["1912-01-01T00:16:07+00:00", "23:59:59", "LMT", 968 / 60],
		["1912-01-01T00:16:08+00:00", "00:16:08", "GMT", 0]
	])
};