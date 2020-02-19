"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-9"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-9", { offset: true, expect: "Pacific/Palau" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-9", { abbr: true, expect: "Pacific/Palau" }),


};