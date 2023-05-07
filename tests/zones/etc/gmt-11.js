"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-11"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-11", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-11", { abbr: true, expect: "Asia/Sakhalin" }),

	"1970" : helpers.makeTestYear("Etc/GMT-11", [
		["1970-01-01T00:00:00+00:00", "11:00:00", "+11", -660]
	])
};