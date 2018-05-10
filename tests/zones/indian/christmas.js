"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Christmas"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Christmas", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Christmas", { abbr: true, expect: "Asia/Jakarta" }),


};