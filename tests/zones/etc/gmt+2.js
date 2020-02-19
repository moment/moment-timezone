"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+2"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+2", { offset: true, expect: "Atlantic/South_Georgia" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+2", { abbr: true, expect: "Atlantic/South_Georgia" }),


};