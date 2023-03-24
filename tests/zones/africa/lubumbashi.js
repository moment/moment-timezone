"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lubumbashi"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lubumbashi", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lubumbashi", { abbr: true, expect: "Africa/Khartoum" }),


};