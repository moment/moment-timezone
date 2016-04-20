"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Noumea"] = {
	"guess" : helpers.makeTestGuess("Pacific/Noumea", { offset: false, abbr: true }),

	"1912" : helpers.makeTestYear("Pacific/Noumea", [
		["1912-01-12T12:54:11Z", "23:59:59", "LMT", -39948 / 60],
		["1912-01-12T12:54:12Z", "23:54:12", "NCT", -660]
	]),

	"1977" : helpers.makeTestYear("Pacific/Noumea", [
		["1977-12-03T12:59:59Z", "23:59:59", "NCT", -660],
		["1977-12-03T13:00:00Z", "01:00:00", "NCST", -720]
	]),

	"1978" : helpers.makeTestYear("Pacific/Noumea", [
		["1978-02-26T11:59:59Z", "23:59:59", "NCST", -720],
		["1978-02-26T12:00:00Z", "23:00:00", "NCT", -660],
		["1978-12-02T12:59:59Z", "23:59:59", "NCT", -660],
		["1978-12-02T13:00:00Z", "01:00:00", "NCST", -720]
	]),

	"1979" : helpers.makeTestYear("Pacific/Noumea", [
		["1979-02-26T11:59:59Z", "23:59:59", "NCST", -720],
		["1979-02-26T12:00:00Z", "23:00:00", "NCT", -660]
	]),

	"1996" : helpers.makeTestYear("Pacific/Noumea", [
		["1996-11-30T14:59:59Z", "01:59:59", "NCT", -660],
		["1996-11-30T15:00:00Z", "03:00:00", "NCST", -720]
	]),

	"1997" : helpers.makeTestYear("Pacific/Noumea", [
		["1997-03-01T14:59:59Z", "02:59:59", "NCST", -720],
		["1997-03-01T15:00:00Z", "02:00:00", "NCT", -660]
	])
};