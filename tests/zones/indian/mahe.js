"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Mahe"] = {
	"1906" : helpers.makeTestYear("Indian/Mahe", [
		["1906-05-31T20:18:11+00:00", "23:59:59", "LMT", -13308 / 60],
		["1906-05-31T20:18:12+00:00", "00:18:12", "+04", -240]
	])
};