"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/Reykjavik"] = {

	"guess:by:offset" : helpers.makeTestGuess("Atlantic/Reykjavik", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Atlantic/Reykjavik", { abbr: true, expect: "Africa/Abidjan" }),


};