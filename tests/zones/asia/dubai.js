"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Dubai"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Dubai", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Dubai", { abbr: true }),


};