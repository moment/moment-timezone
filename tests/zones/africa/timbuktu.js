"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Timbuktu"] = {
	"1912" : helpers.makeTestYear("Africa/Timbuktu", [
		["1912-01-01T00:16:07Z", "23:59:59", "LMT", 968 / 60],
		["1912-01-01T00:16:08Z", "00:16:08", "GMT", 0]
	])
};