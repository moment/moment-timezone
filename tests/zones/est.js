"use strict";

var helpers = require("../helpers/helpers");

exports["EST"] = {

	"guess:by:offset" : helpers.makeTestGuess("EST", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("EST", { abbr: true, expect: "America/Panama" }),


};