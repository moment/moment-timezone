"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+0"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+0", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+0", { abbr: true, expect: "Etc/UTC" }),


};