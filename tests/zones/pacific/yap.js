"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Yap"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Yap", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Yap", { abbr: true, expect: "Australia/Brisbane" }),


};