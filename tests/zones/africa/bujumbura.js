"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bujumbura"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bujumbura", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bujumbura", { abbr: true, expect: "Africa/Maputo" }),


};