"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Panama"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Panama", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Panama", { abbr: true }),


};