"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/South_Georgia"] = {

	"guess:by:offset" : helpers.makeTestGuess("Atlantic/South_Georgia", { offset: true, expect: "America/Noronha" }),

	"guess:by:abbr" : helpers.makeTestGuess("Atlantic/South_Georgia", { abbr: true, expect: "America/Noronha" }),


};