"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kathmandu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kathmandu", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kathmandu", { abbr: true }),


};