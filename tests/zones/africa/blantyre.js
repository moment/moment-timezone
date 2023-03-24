"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Blantyre"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Blantyre", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Blantyre", { abbr: true, expect: "Africa/Khartoum" }),


};