"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/North"] = {

	"guess:by:offset" : helpers.makeTestGuess("Australia/North", { offset: true, expect: "Australia/Darwin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Australia/North", { abbr: true, expect: "Australia/Darwin" }),

	"1899" : helpers.makeTestYear("Australia/North", [
		["1899-04-30T14:59:59+00:00", "23:59:59", "ACST", -540],
		["1899-04-30T15:00:00+00:00", "00:30:00", "ACST", -570]
	]),

	"1916" : helpers.makeTestYear("Australia/North", [
		["1916-12-31T14:30:59+00:00", "00:00:59", "ACST", -570],
		["1916-12-31T14:31:00+00:00", "01:01:00", "ACDT", -630]
	]),

	"1917" : helpers.makeTestYear("Australia/North", [
		["1917-03-24T15:29:59+00:00", "01:59:59", "ACDT", -630],
		["1917-03-24T15:30:00+00:00", "01:00:00", "ACST", -570]
	]),

	"1941" : helpers.makeTestYear("Australia/North", [
		["1941-12-31T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1941-12-31T16:30:00+00:00", "03:00:00", "ACDT", -630]
	]),

	"1942" : helpers.makeTestYear("Australia/North", [
		["1942-03-28T15:29:59+00:00", "01:59:59", "ACDT", -630],
		["1942-03-28T15:30:00+00:00", "01:00:00", "ACST", -570],
		["1942-09-26T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1942-09-26T16:30:00+00:00", "03:00:00", "ACDT", -630]
	]),

	"1943" : helpers.makeTestYear("Australia/North", [
		["1943-03-27T15:29:59+00:00", "01:59:59", "ACDT", -630],
		["1943-03-27T15:30:00+00:00", "01:00:00", "ACST", -570],
		["1943-10-02T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1943-10-02T16:30:00+00:00", "03:00:00", "ACDT", -630]
	])
};