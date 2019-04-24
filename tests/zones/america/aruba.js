"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Aruba"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Aruba", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Aruba", { abbr: true, expect: "America/Santo_Domingo" }),


};