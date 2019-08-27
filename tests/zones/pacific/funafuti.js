"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Funafuti"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Funafuti", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Funafuti", { abbr: true, expect: "Asia/Kamchatka" }),


};