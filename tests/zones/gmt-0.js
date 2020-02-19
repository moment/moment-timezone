"use strict";

var helpers = require("../helpers/helpers");

exports["GMT-0"] = {

	"guess:by:offset" : helpers.makeTestGuess("GMT-0", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("GMT-0", { abbr: true, expect: "Etc/UTC" }),


};