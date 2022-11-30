"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Coral_Harbour"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Coral_Harbour", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Coral_Harbour", { abbr: true, expect: "America/Panama" }),


};