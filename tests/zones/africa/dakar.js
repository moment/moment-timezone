"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Dakar"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Dakar", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Dakar", { abbr: true, expect: "Africa/Abidjan" }),


};