"use strict";

var helpers = require("../helpers/helpers");

exports["Zulu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Zulu", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Zulu", { abbr: true, expect: "Etc/UTC" }),


};