"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Kralendijk"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Kralendijk", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Kralendijk", { abbr: true, expect: "America/Santo_Domingo" }),


};