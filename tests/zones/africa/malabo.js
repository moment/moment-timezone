"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Malabo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Malabo", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Malabo", { abbr: true, expect: "Africa/Lagos" }),


};