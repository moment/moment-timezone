"use strict";

var helpers = require("../helpers/helpers");

exports["EST"] = {

	"guess:by:offset" : helpers.makeTestGuess("EST", { offset: true, expect: "Etc/GMT+5" }),

	"guess:by:abbr" : helpers.makeTestGuess("EST", { abbr: true }),


};