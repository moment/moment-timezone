"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Thomas"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Thomas", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Thomas", { abbr: true, expect: "America/Santo_Domingo" }),


};