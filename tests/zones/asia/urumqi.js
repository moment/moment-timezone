"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Urumqi"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Urumqi", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Urumqi", { abbr: true, expect: "Asia/Dhaka" }),


};