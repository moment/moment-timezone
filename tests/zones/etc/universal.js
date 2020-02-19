"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Universal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Universal", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Universal", { abbr: true, expect: "Etc/UTC" }),


};