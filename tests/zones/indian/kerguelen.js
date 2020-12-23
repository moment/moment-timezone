"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Kerguelen"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Kerguelen", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Kerguelen", { abbr: true, expect: "Asia/Karachi" }),


};