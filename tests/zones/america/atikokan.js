"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Atikokan"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Atikokan", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Atikokan", { abbr: true, expect: "America/Panama" }),


};