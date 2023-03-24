"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Maputo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Maputo", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Maputo", { abbr: true, expect: "Africa/Khartoum" }),


};