"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Gambier"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Gambier", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Gambier", { abbr: true }),


};