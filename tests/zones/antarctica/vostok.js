"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Vostok"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Vostok", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Vostok", { abbr: true, expect: "Asia/Dhaka" }),


};