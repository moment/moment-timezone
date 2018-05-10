"use strict";

var helpers = require("../helpers/helpers");

exports["UCT"] = {

	"guess:by:offset" : helpers.makeTestGuess("UCT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("UCT", { abbr: true, expect: "Etc/UCT" }),


};