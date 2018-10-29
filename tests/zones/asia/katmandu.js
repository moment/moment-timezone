"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Katmandu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Katmandu", { offset: true, expect: "Asia/Kathmandu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Katmandu", { abbr: true, expect: "Asia/Kathmandu" }),


};