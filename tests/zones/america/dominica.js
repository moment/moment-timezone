"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Dominica"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Dominica", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Dominica", { abbr: true, expect: "America/Santo_Domingo" }),


};