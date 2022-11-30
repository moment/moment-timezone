"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Maldives"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Maldives", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Maldives", { abbr: true, expect: "Asia/Karachi" }),


};