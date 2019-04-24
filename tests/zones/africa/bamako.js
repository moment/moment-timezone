"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bamako"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bamako", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bamako", { abbr: true, expect: "Africa/Abidjan" }),


};