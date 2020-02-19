"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/DumontDUrville"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/DumontDUrville", { offset: true, expect: "Pacific/Port_Moresby" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/DumontDUrville", { abbr: true, expect: "Pacific/Port_Moresby" }),

	"1946" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1946-12-31T23:59:59+00:00", "23:59:59", "-00", 0]
	]),

	"1947" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1947-01-01T00:00:00+00:00", "10:00:00", "+10", -600]
	]),

	"1952" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1952-01-13T13:59:59+00:00", "23:59:59", "+10", -600],
		["1952-01-13T14:00:00+00:00", "14:00:00", "-00", 0]
	]),

	"1956" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1956-10-31T23:59:59+00:00", "23:59:59", "-00", 0],
		["1956-11-01T00:00:00+00:00", "10:00:00", "+10", -600]
	])
};