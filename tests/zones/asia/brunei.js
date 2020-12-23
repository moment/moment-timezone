"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Brunei"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Brunei", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Brunei", { abbr: true, expect: "Asia/Manila" }),


};