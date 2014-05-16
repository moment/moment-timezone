"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["America/Cayman"] = {
	"1912" : helpers.makeTestYear("America/Cayman", [
		["1912-02-01T05:07:10+00:00", "23:59:59", "KMT", 18431 / 60],
		["1912-02-01T05:07:11+00:00", "00:07:11", "EST", 300]
	])
};