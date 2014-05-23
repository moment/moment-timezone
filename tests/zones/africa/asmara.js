"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Asmara"] = {
	"1936" : helpers.makeTestYear("Africa/Asmara", [
		["1936-05-04T21:24:39+00:00", "23:59:59", "ADMT", -9320 / 60],
		["1936-05-04T21:24:40+00:00", "00:24:40", "EAT", -180]
	])
};