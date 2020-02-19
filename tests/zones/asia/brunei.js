"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Brunei"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Brunei", { offset: true, expect: "Etc/GMT-8" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Brunei", { abbr: true, expect: "Etc/GMT-8" }),

	"1926" : helpers.makeTestYear("Asia/Brunei", [
		["1926-02-28T16:20:19+00:00", "23:59:59", "LMT", -27580 / 60],
		["1926-02-28T16:20:20+00:00", "23:50:20", "+0730", -450]
	]),

	"1932" : helpers.makeTestYear("Asia/Brunei", [
		["1932-12-31T16:29:59+00:00", "23:59:59", "+0730", -450],
		["1932-12-31T16:30:00+00:00", "00:30:00", "+08", -480]
	])
};