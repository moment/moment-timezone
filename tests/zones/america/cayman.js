"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayman"] = {
	"1908" : helpers.makeTestYear("America/Cayman", [
		["1908-04-22T05:19:35+00:00", "23:59:59", "CMT", 19176 / 60],
		["1908-04-22T05:19:36+00:00", "00:19:36", "EST", 300]
	])
};