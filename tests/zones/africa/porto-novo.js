"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Porto-Novo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Porto-Novo", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Porto-Novo", { abbr: true, expect: "Africa/Lagos" }),


};