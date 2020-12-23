"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Harare"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Harare", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Harare", { abbr: true, expect: "Africa/Khartoum" }),


};