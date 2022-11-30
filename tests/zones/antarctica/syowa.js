"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Syowa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Syowa", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Syowa", { abbr: true, expect: "Europe/Moscow" }),

	"1947" : helpers.makeTestYear("Antarctica/Syowa", [
		["1947-03-13T20:53:07+00:00", "23:59:59", "LMT", -11212 / 60],
		["1947-03-13T20:53:08+00:00", "23:53:08", "+03", -180]
	])
};