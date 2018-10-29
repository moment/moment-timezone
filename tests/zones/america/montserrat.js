"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Montserrat"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Montserrat", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Montserrat", { abbr: true, expect: "America/Santo_Domingo" }),


};