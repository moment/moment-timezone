"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Aden"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Aden", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Aden", { abbr: true, expect: "Europe/Moscow" }),


};