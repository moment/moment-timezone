"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Noumea"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Noumea", { offset: true, expect: "Pacific/Norfolk" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Noumea", { abbr: true, expect: "Pacific/Norfolk" }),

	"1977" : helpers.makeTestYear("Pacific/Noumea", [
		["1977-12-03T12:59:59+00:00", "23:59:59", "+11", -660],
		["1977-12-03T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1978" : helpers.makeTestYear("Pacific/Noumea", [
		["1978-02-26T11:59:59+00:00", "23:59:59", "+12", -720],
		["1978-02-26T12:00:00+00:00", "23:00:00", "+11", -660],
		["1978-12-02T12:59:59+00:00", "23:59:59", "+11", -660],
		["1978-12-02T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1979" : helpers.makeTestYear("Pacific/Noumea", [
		["1979-02-26T11:59:59+00:00", "23:59:59", "+12", -720],
		["1979-02-26T12:00:00+00:00", "23:00:00", "+11", -660]
	]),

	"1996" : helpers.makeTestYear("Pacific/Noumea", [
		["1996-11-30T14:59:59+00:00", "01:59:59", "+11", -660],
		["1996-11-30T15:00:00+00:00", "03:00:00", "+12", -720]
	])
};