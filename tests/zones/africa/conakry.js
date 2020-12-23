"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Conakry"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Conakry", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Conakry", { abbr: true, expect: "Africa/Abidjan" }),


};