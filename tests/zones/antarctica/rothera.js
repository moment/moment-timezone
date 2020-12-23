"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Rothera"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Rothera", { offset: true, expect: "America/Fortaleza" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Rothera", { abbr: true, expect: "America/Fortaleza" }),


};