"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Grenada"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Grenada", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Grenada", { abbr: true, expect: "America/Santo_Domingo" }),


};