"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+5"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+5", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+5", { abbr: true, expect: "America/Lima" }),


};