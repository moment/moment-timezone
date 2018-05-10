"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Wake"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Wake", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Wake", { abbr: true, expect: "Asia/Kamchatka" }),


};