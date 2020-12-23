"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Chagos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Chagos", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Chagos", { abbr: true, expect: "Asia/Dhaka" }),


};