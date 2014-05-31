"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Riyadh"] = {
	"1949" : helpers.makeTestYear("Asia/Riyadh", [
		["1949-12-31T20:53:07+00:00", "23:59:59", "LMT", -11212 / 60],
		["1949-12-31T20:53:08+00:00", "23:53:08", "AST", -180]
	])
};