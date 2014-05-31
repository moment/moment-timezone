"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Aden"] = {
	"1949" : helpers.makeTestYear("Asia/Aden", [
		["1949-12-31T21:00:05+00:00", "23:59:59", "LMT", -10794 / 60],
		["1949-12-31T21:00:06+00:00", "00:00:06", "AST", -180]
	])
};