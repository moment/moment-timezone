"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Syowa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Syowa", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Syowa", { abbr: true, expect: "Europe/Moscow" }),


};