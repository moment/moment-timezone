"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Kitts"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Kitts", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Kitts", { abbr: true, expect: "America/Santo_Domingo" }),


};