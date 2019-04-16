"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guadalcanal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Guadalcanal", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Guadalcanal", { abbr: true, expect: "Asia/Sakhalin" }),


};