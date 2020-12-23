"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Virgin"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Virgin", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Virgin", { abbr: true, expect: "America/Santo_Domingo" }),


};