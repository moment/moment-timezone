"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Blantyre"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Blantyre", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Blantyre", { abbr: true, expect: "Africa/Maputo" }),


};