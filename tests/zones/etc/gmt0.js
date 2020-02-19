"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT0"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT0", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT0", { abbr: true, expect: "Etc/UTC" }),


};