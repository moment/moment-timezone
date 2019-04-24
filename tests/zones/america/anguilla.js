"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Anguilla"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Anguilla", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Anguilla", { abbr: true, expect: "America/Santo_Domingo" }),


};