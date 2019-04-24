"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Freetown"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Freetown", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Freetown", { abbr: true, expect: "Africa/Abidjan" }),


};