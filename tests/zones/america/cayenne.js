"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayenne"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Cayenne", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Cayenne", { abbr: true, expect: "America/Sao_Paulo" }),

	"1911" : helpers.makeTestYear("America/Cayenne", [
		["1911-07-01T03:29:20+00:00", "23:29:20", "-04", 240]
	]),

	"1967" : helpers.makeTestYear("America/Cayenne", [
		["1967-10-01T03:59:59+00:00", "23:59:59", "-04", 240]
	])
};