"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Funafuti"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Funafuti", { offset: true, expect: "Pacific/Tarawa" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Funafuti", { abbr: true, expect: "Pacific/Tarawa" }),


};