"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+6"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+6", { offset: true, expect: "America/Managua" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+6", { abbr: true, expect: "America/Managua" }),


};