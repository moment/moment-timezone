"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Asia/Muscat"] = {
	"1919" : helpers.makeTestYear("Asia/Muscat", [
		["1919-12-31T20:05:35+00:00", "23:59:59", "LMT", -14064 / 60],
		["1919-12-31T20:05:36+00:00", "00:05:36", "GST", -240]
	])
};