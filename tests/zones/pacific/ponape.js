"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Ponape"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Ponape", { offset: true, expect: "Pacific/Norfolk" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Ponape", { abbr: true, expect: "Pacific/Norfolk" }),


};