"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Majuro"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Majuro", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Majuro", { abbr: true, expect: "Asia/Kamchatka" }),


};