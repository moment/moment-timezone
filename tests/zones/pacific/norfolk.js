"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Pacific/Norfolk"] = {
	"1950" : helpers.makeTestYear("Pacific/Norfolk", [
		["1950-12-31T12:47:59+00:00", "23:59:59", "NMT", -672],
		["1950-12-31T12:48:00+00:00", "00:18:00", "NFT", -690]
	])
};