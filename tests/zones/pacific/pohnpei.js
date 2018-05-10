"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pohnpei"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Pohnpei", { offset: true, expect: "Pacific/Norfolk" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Pohnpei", { abbr: true, expect: "Pacific/Norfolk" }),


};