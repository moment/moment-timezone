"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Addis_Ababa"] = {
	"1936" : helpers.makeTestYear("Africa/Addis_Ababa", [
		["1936-05-04T21:24:39+00:00", "23:59:59", "ADMT", -9320 / 60],
		["1936-05-04T21:24:40+00:00", "00:24:40", "EAT", -180]
	])
};