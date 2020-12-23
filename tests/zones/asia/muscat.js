"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Muscat"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Muscat", { offset: true, expect: "Asia/Dubai" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Muscat", { abbr: true, expect: "Asia/Dubai" }),


};