"use strict";

var helpers = require("../../helpers/helpers");

exports["US/Samoa"] = {

	"guess:by:offset" : helpers.makeTestGuess("US/Samoa", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("US/Samoa", { abbr: true, expect: "Pacific/Pago_Pago" }),


};