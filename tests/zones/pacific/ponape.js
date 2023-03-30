"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Ponape"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Ponape", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Ponape", { abbr: true, expect: "Asia/Sakhalin" }),

	"1912" : helpers.makeTestYear("Pacific/Ponape", [
		["1912-09-30T13:20:11+00:00", "23:59:59", "LMT", -38388 / 60],
		["1912-09-30T13:20:12+00:00", "00:20:12", "+11", -660]
	])
};