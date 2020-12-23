"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Reunion"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Reunion", { offset: true, expect: "Asia/Dubai" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Reunion", { abbr: true, expect: "Asia/Dubai" }),


};