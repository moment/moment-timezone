"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Aden"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Aden", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Aden", { abbr: true, expect: "Europe/Moscow" }),

	"1947" : helpers.makeTestYear("Asia/Aden", [
		["1947-03-13T20:53:07+00:00", "23:59:59", "LMT", -11212 / 60],
		["1947-03-13T20:53:08+00:00", "23:53:08", "+03", -180]
	])
};