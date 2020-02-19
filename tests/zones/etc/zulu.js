"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Zulu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Zulu", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Zulu", { abbr: true, expect: "Etc/UTC" }),


};