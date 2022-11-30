"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bissau"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bissau", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bissau", { abbr: true, expect: "Africa/Abidjan" }),


};