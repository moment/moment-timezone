"use strict";

var helpers = require("../helpers/helpers");

exports["UCT"] = {

	"guess:by:offset" : helpers.makeTestGuess("UCT", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("UCT", { abbr: true, expect: "Etc/UTC" }),


};