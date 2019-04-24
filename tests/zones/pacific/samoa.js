"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Samoa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Samoa", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Samoa", { abbr: true, expect: "Pacific/Pago_Pago" }),


};