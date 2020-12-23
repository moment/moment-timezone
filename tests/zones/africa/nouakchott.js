"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Nouakchott"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Nouakchott", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Nouakchott", { abbr: true, expect: "Africa/Abidjan" }),


};