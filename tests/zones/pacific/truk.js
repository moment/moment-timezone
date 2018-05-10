"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Truk"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Truk", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Truk", { abbr: true, expect: "Australia/Brisbane" }),


};