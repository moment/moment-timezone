"use strict";

var helpers = require("../helpers/helpers");

exports["GMT0"] = {

	"guess:by:offset" : helpers.makeTestGuess("GMT0", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("GMT0", { abbr: true, expect: "Africa/Abidjan" }),


};