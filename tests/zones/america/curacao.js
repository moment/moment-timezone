"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Curacao"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Curacao", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Curacao", { abbr: true, expect: "America/Santo_Domingo" }),


};