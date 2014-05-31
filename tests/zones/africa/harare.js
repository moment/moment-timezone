"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Harare"] = {
	"1903" : helpers.makeTestYear("Africa/Harare", [
		["1903-02-28T21:55:47+00:00", "23:59:59", "LMT", -7452 / 60],
		["1903-02-28T21:55:48+00:00", "23:55:48", "CAT", -120]
	])
};