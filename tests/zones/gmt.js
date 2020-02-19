"use strict";

var helpers = require("../helpers/helpers");

exports["GMT"] = {

	"guess:by:offset" : helpers.makeTestGuess("GMT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("GMT", { abbr: true, expect: "Africa/Abidjan" }),


};