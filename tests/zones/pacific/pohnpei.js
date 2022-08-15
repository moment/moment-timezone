"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pohnpei"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Pohnpei", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Pohnpei", { abbr: true, expect: "Asia/Sakhalin" }),


};