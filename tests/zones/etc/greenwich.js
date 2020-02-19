"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Greenwich"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Greenwich", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Greenwich", { abbr: true, expect: "Etc/UTC" }),


};