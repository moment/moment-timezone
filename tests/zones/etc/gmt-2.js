"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-2"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-2", { offset: true, expect: "Europe/Kaliningrad" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-2", { abbr: true, expect: "Europe/Kaliningrad" }),


};