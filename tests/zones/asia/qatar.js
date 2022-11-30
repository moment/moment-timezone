"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Qatar"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Qatar", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Qatar", { abbr: true, expect: "Europe/Moscow" }),


};