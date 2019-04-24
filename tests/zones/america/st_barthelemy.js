"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Barthelemy"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Barthelemy", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Barthelemy", { abbr: true, expect: "America/Santo_Domingo" }),


};