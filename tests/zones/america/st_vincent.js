"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Vincent"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Vincent", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Vincent", { abbr: true, expect: "America/Santo_Domingo" }),


};