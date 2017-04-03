"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pitcairn"] = {
	"1998" : helpers.makeTestYear("Pacific/Pitcairn", [
		["1998-04-27T08:29:59+00:00", "23:59:59", "-0830", 510],
		["1998-04-27T08:30:00+00:00", "00:30:00", "-08", 480]
	])
};