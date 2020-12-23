"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Douala"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Douala", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Douala", { abbr: true, expect: "Africa/Lagos" }),


};