"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Blantyre"] = {
	"1903" : helpers.makeTestYear("Africa/Blantyre", [
		["1903-02-28T21:39:59+00:00", "23:59:59", "LMT", -140],
		["1903-02-28T21:40:00+00:00", "23:40:00", "CAT", -120]
	])
};