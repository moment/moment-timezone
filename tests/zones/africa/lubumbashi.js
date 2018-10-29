"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lubumbashi"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lubumbashi", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lubumbashi", { abbr: true, expect: "Africa/Maputo" }),


};