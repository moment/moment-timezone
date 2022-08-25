"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Accra"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Accra", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Accra", { abbr: true, expect: "Africa/Abidjan" }),


};