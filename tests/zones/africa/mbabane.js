"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Mbabane"] = {
	"1903" : helpers.makeTestYear("Africa/Mbabane", [
		["1903-02-28T21:55:35+00:00", "23:59:59", "LMT", -7464 / 60],
		["1903-02-28T21:55:36+00:00", "23:55:36", "SAST", -120]
	])
};