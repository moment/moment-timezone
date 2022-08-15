"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Rothera"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Rothera", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Rothera", { abbr: true, expect: "America/Sao_Paulo" }),


};