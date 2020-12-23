"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Bangkok"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Bangkok", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Bangkok", { abbr: true, expect: "Asia/Jakarta" }),


};