"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Tahiti"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Tahiti", { offset: true, expect: "Pacific/Honolulu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Tahiti", { abbr: true, expect: "Pacific/Honolulu" }),


};