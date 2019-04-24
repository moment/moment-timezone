"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guadeloupe"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Guadeloupe", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Guadeloupe", { abbr: true, expect: "America/Santo_Domingo" }),


};