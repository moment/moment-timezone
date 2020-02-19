"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Wallis"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Wallis", { offset: true, expect: "Pacific/Tarawa" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Wallis", { abbr: true, expect: "Pacific/Tarawa" }),


};