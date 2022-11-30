"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Phnom_Penh"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Phnom_Penh", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Phnom_Penh", { abbr: true, expect: "Asia/Jakarta" }),


};