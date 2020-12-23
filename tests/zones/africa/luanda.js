"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Luanda"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Luanda", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Luanda", { abbr: true, expect: "Africa/Lagos" }),


};