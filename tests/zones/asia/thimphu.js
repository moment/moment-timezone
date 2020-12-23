"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Thimphu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Thimphu", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Thimphu", { abbr: true, expect: "Asia/Dhaka" }),


};