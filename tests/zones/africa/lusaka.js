"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lusaka"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lusaka", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lusaka", { abbr: true, expect: "Africa/Maputo" }),


};