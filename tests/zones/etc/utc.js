"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/UTC"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/UTC", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/UTC", { abbr: true }),


};