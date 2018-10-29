"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guadalcanal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Guadalcanal", { offset: true, expect: "Pacific/Norfolk" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Guadalcanal", { abbr: true, expect: "Pacific/Norfolk" }),


};