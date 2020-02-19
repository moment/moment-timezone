"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-3"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-3", { offset: true, expect: "Europe/Simferopol" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-3", { abbr: true, expect: "Europe/Simferopol" }),


};