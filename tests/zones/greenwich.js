"use strict";

var helpers = require("../helpers/helpers");

exports["Greenwich"] = {

	"guess:by:offset" : helpers.makeTestGuess("Greenwich", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Greenwich", { abbr: true, expect: "Etc/UTC" }),


};