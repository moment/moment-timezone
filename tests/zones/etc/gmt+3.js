"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT+3"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT+3", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT+3", { abbr: true, expect: "America/Sao_Paulo" }),

	"1970" : helpers.makeTestYear("Etc/GMT+3", [
		["1970-01-01T00:00:00+00:00", "21:00:00", "-03", 180]
	])
};