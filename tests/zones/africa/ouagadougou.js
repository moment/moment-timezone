"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Ouagadougou"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Ouagadougou", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Ouagadougou", { abbr: true, expect: "Africa/Abidjan" }),


};