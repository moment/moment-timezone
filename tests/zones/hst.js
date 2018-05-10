"use strict";

var helpers = require("../helpers/helpers");

exports["HST"] = {

	"guess:by:offset" : helpers.makeTestGuess("HST", { offset: true, expect: "Pacific/Honolulu" }),

	"guess:by:abbr" : helpers.makeTestGuess("HST", { abbr: true, expect: "Pacific/Honolulu" }),


};