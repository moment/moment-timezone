"use strict";

var helpers = require("../helpers/helpers");

exports["Iceland"] = {

	"guess:by:offset" : helpers.makeTestGuess("Iceland", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Iceland", { abbr: true, expect: "Africa/Abidjan" }),


};