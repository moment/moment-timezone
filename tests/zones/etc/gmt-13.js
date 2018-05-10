"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-13"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-13", { offset: true, expect: "Pacific/Fakaofo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-13", { abbr: true, expect: "Pacific/Fakaofo" }),


};