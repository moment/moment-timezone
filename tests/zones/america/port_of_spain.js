"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Port_of_Spain"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Port_of_Spain", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Port_of_Spain", { abbr: true, expect: "America/Santo_Domingo" }),


};