"use strict";

var helpers = require("../helpers/helpers");

exports["GMT0"] = {

	"guess:by:offset" : helpers.makeTestGuess("GMT0", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("GMT0", { abbr: true, expect: "Etc/UTC" }),


};