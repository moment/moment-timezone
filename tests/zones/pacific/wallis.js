"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Wallis"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Wallis", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Wallis", { abbr: true, expect: "Asia/Kamchatka" }),


};