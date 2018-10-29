"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Antigua"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Antigua", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Antigua", { abbr: true, expect: "America/Santo_Domingo" }),


};