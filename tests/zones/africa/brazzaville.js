"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Brazzaville"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Brazzaville", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Brazzaville", { abbr: true, expect: "Africa/Lagos" }),


};