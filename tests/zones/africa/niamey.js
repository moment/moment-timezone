"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Niamey"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Niamey", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Niamey", { abbr: true, expect: "Africa/Lagos" }),


};