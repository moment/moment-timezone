"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lome"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lome", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lome", { abbr: true, expect: "Africa/Abidjan" }),


};