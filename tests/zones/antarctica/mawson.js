"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Mawson"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Mawson", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Mawson", { abbr: true, expect: "Asia/Karachi" }),


};