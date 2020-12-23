"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Marigot"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Marigot", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Marigot", { abbr: true, expect: "America/Santo_Domingo" }),


};