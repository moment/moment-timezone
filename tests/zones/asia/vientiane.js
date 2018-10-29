"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Vientiane"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Vientiane", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Vientiane", { abbr: true, expect: "Asia/Jakarta" }),


};