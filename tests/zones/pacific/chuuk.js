"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Chuuk"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Chuuk", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Chuuk", { abbr: true, expect: "Australia/Brisbane" }),


};