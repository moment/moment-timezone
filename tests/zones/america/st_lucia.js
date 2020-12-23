"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Lucia"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Lucia", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Lucia", { abbr: true, expect: "America/Santo_Domingo" }),


};