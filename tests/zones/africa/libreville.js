"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Libreville"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Libreville", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Libreville", { abbr: true, expect: "Africa/Lagos" }),


};