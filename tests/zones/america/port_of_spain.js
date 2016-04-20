"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Port_of_Spain"] = {
	"1912" : helpers.makeTestYear("America/Port_of_Spain", [
		["1912-03-02T04:06:03Z", "23:59:59", "LMT", 14764 / 60],
		["1912-03-02T04:06:04Z", "00:06:04", "AST", 240]
	])
};