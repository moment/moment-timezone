"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Ponape"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Ponape", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Ponape", { abbr: true, expect: "Asia/Sakhalin" }),


};