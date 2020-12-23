"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Lower_Princes"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Lower_Princes", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Lower_Princes", { abbr: true, expect: "America/Santo_Domingo" }),


};