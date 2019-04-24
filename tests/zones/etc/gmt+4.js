"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+4"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+4", { offset: true, expect: "America/Caracas" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+4", { abbr: true, expect: "America/Caracas" }),


};