"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Anguilla"] = {
	"1912" : helpers.makeTestYear("America/Anguilla", [
		["1912-03-02T04:06:03Z", "23:59:59", "LMT", 14764 / 60],
		["1912-03-02T04:06:04Z", "00:06:04", "AST", 240]
	])
};