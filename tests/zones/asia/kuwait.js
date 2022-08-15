"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kuwait"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kuwait", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kuwait", { abbr: true, expect: "Europe/Moscow" }),


};