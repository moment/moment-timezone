"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Tortola"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Tortola", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Tortola", { abbr: true, expect: "America/Santo_Domingo" }),


};