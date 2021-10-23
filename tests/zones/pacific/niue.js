"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Niue"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Niue", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Niue", { abbr: true, expect: "Pacific/Pago_Pago" }),


};