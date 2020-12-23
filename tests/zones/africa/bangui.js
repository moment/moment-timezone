"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bangui"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bangui", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bangui", { abbr: true, expect: "Africa/Lagos" }),


};