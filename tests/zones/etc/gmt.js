"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT", { abbr: true, expect: "Africa/Abidjan" }),


};