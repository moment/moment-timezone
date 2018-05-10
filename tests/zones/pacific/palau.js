"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Palau"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Palau", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Palau", { abbr: true, expect: "Asia/Tokyo" }),


};