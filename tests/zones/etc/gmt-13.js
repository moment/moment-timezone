"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-13"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-13", { offset: true, expect: "Pacific/Tongatapu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-13", { abbr: true, expect: "Pacific/Tongatapu" }),

	"1970" : helpers.makeTestYear("Etc/GMT-13", [
		["1970-01-01T00:00:00+00:00", "13:00:00", "+13", -780]
	])
};