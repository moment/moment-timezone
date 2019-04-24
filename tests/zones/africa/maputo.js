"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Maputo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Maputo", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Maputo", { abbr: true }),


};