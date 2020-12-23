"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayenne"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Cayenne", { offset: true, expect: "America/Fortaleza" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Cayenne", { abbr: true, expect: "America/Fortaleza" }),


};