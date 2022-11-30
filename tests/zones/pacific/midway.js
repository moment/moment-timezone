"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Midway"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Midway", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Midway", { abbr: true, expect: "Pacific/Pago_Pago" }),


};