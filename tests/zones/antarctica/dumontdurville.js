"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/DumontDUrville"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/DumontDUrville", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/DumontDUrville", { abbr: true, expect: "Australia/Brisbane" }),

	"1952" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1952-01-13T13:59:59+00:00", "23:59:59", "+10", -600],
		["1952-01-13T14:00:00+00:00", "14:00:00", "-00", 0]
	])
};