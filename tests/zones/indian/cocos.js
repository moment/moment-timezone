"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Cocos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Cocos", { offset: true, expect: "Asia/Rangoon" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Cocos", { abbr: true, expect: "Asia/Rangoon" }),


};