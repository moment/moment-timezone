"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kigali"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Kigali", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Kigali", { abbr: true, expect: "Africa/Khartoum" }),


};