"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Port_Moresby"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Port_Moresby", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Port_Moresby", { abbr: true, expect: "Australia/Brisbane" }),


};