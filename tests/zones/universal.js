"use strict";

var helpers = require("../helpers/helpers");

exports["Universal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Universal", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Universal", { abbr: true, expect: "Etc/UTC" }),


};