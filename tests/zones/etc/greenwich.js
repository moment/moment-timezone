"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Greenwich"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Greenwich", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Greenwich", { abbr: true, expect: "Africa/Abidjan" }),


};