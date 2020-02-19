"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-6"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-6", { offset: true, expect: "Indian/Chagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-6", { abbr: true, expect: "Indian/Chagos" }),


};