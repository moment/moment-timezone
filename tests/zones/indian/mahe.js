"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Mahe"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Mahe", { offset: true, expect: "Asia/Dubai" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Mahe", { abbr: true, expect: "Asia/Dubai" }),


};