"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Riyadh"] = {
	"1947" : helpers.makeTestYear("Asia/Riyadh", [
		["1947-03-13T20:53:07Z", "23:59:59", "LMT", -11212 / 60],
		["1947-03-13T20:53:08Z", "23:53:08", "AST", -180]
	])
};