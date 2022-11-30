"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Thimbu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Thimbu", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Thimbu", { abbr: true, expect: "Asia/Dhaka" }),


};