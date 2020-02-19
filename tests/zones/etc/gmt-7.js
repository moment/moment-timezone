"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-7"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-7", { offset: true, expect: "Indian/Christmas" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-7", { abbr: true, expect: "Indian/Christmas" }),


};