"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Gaborone"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Gaborone", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Gaborone", { abbr: true, expect: "Africa/Khartoum" }),


};