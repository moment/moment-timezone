"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guam"] = {
	"1900" : helpers.makeTestYear("Pacific/Guam", [
		["1900-12-31T14:20:59+00:00", "23:59:59", "LMT", -579],
		["1900-12-31T14:21:00+00:00", "00:21:00", "GST", -600]
	])
};