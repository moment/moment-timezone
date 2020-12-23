"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Bahrain"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Bahrain", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Bahrain", { abbr: true, expect: "Europe/Moscow" }),


};