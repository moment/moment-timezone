"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayman"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Cayman", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Cayman", { abbr: true, expect: "America/Panama" }),


};