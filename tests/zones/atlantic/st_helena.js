"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/St_Helena"] = {

	"guess:by:offset" : helpers.makeTestGuess("Atlantic/St_Helena", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Atlantic/St_Helena", { abbr: true, expect: "Africa/Abidjan" }),


};