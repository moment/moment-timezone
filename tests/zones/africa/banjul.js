"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Banjul"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Banjul", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Banjul", { abbr: true, expect: "Africa/Abidjan" }),


};