"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Riyadh"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Riyadh", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Riyadh", { abbr: true, expect: "Europe/Moscow" }),


};