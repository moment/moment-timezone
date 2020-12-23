"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kashgar"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kashgar", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kashgar", { abbr: true, expect: "Asia/Dhaka" }),


};