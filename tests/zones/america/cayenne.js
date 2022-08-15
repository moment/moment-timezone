"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayenne"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Cayenne", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Cayenne", { abbr: true, expect: "America/Sao_Paulo" }),


};