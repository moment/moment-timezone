"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Fakaofo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Fakaofo", { offset: true, expect: "Pacific/Tongatapu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Fakaofo", { abbr: true, expect: "Pacific/Tongatapu" }),


};