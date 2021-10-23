"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Timbuktu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Timbuktu", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Timbuktu", { abbr: true, expect: "Africa/Abidjan" }),


};