"use strict";

var helpers = require("../helpers/helpers");

exports["MST"] = {

	"guess:by:offset" : helpers.makeTestGuess("MST", { offset: true, expect: "America/Phoenix" }),

	"guess:by:abbr" : helpers.makeTestGuess("MST", { abbr: true, expect: "America/Phoenix" }),


};