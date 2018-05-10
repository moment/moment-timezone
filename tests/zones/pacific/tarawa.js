"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Tarawa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Tarawa", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Tarawa", { abbr: true, expect: "Asia/Kamchatka" }),


};