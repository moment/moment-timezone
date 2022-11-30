"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kabul"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kabul", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kabul", { abbr: true }),


};