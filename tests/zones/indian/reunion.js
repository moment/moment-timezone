"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Reunion"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Reunion", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Reunion", { abbr: true }),

	"1911" : helpers.makeTestYear("Indian/Reunion", [
		["1911-05-31T20:18:07+00:00", "23:59:59", "LMT", -13312 / 60],
		["1911-05-31T20:18:08+00:00", "00:18:08", "+04", -240]
	])
};