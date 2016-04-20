"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/Darwin"] = {
	"guess" : helpers.makeTestGuess("Australia/Darwin", { offset: true, abbr: true }),

	"1916" : helpers.makeTestYear("Australia/Darwin", [
		["1916-12-31T14:30:59Z", "00:00:59", "ACST", -570],
		["1916-12-31T14:31:00Z", "01:01:00", "ACDT", -630]
	]),

	"1917" : helpers.makeTestYear("Australia/Darwin", [
		["1917-03-24T15:29:59Z", "01:59:59", "ACDT", -630],
		["1917-03-24T15:30:00Z", "01:00:00", "ACST", -570]
	]),

	"1941" : helpers.makeTestYear("Australia/Darwin", [
		["1941-12-31T16:29:59Z", "01:59:59", "ACST", -570],
		["1941-12-31T16:30:00Z", "03:00:00", "ACDT", -630]
	]),

	"1942" : helpers.makeTestYear("Australia/Darwin", [
		["1942-03-28T15:29:59Z", "01:59:59", "ACDT", -630],
		["1942-03-28T15:30:00Z", "01:00:00", "ACST", -570],
		["1942-09-26T16:29:59Z", "01:59:59", "ACST", -570],
		["1942-09-26T16:30:00Z", "03:00:00", "ACDT", -630]
	]),

	"1943" : helpers.makeTestYear("Australia/Darwin", [
		["1943-03-27T15:29:59Z", "01:59:59", "ACDT", -630],
		["1943-03-27T15:30:00Z", "01:00:00", "ACST", -570],
		["1943-10-02T16:29:59Z", "01:59:59", "ACST", -570],
		["1943-10-02T16:30:00Z", "03:00:00", "ACDT", -630]
	]),

	"1944" : helpers.makeTestYear("Australia/Darwin", [
		["1944-03-25T15:29:59Z", "01:59:59", "ACDT", -630],
		["1944-03-25T15:30:00Z", "01:00:00", "ACST", -570]
	])
};