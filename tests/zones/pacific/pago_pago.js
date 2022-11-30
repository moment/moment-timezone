"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pago_Pago"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Pago_Pago", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Pago_Pago", { abbr: true }),


};