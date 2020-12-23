"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kinshasa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Kinshasa", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Kinshasa", { abbr: true, expect: "Africa/Lagos" }),


};