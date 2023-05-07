"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/Darwin"] = {

	"guess:by:offset" : helpers.makeTestGuess("Australia/Darwin", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Australia/Darwin", { abbr: true }),

	"1895" : helpers.makeTestYear("Australia/Darwin", [
		["1895-01-31T15:16:39+00:00", "23:59:59", "LMT", -31400 / 60],
		["1895-01-31T15:16:40+00:00", "00:16:40", "ACST", -540]
	]),

	"1899" : helpers.makeTestYear("Australia/Darwin", [
		["1899-04-30T14:59:59+00:00", "23:59:59", "ACST", -540],
		["1899-04-30T15:00:00+00:00", "00:30:00", "ACST", -570]
	]),

	"1916" : helpers.makeTestYear("Australia/Darwin", [
		["1916-12-31T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1916-12-31T16:30:00+00:00", "03:00:00", "ACDT", -630]
	]),

	"1917" : helpers.makeTestYear("Australia/Darwin", [
		["1917-03-24T16:29:59+00:00", "02:59:59", "ACDT", -630],
		["1917-03-24T16:30:00+00:00", "02:00:00", "ACST", -570]
	]),

	"1941" : helpers.makeTestYear("Australia/Darwin", [
		["1941-12-31T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1941-12-31T16:30:00+00:00", "03:00:00", "ACDT", -630]
	]),

	"1942" : helpers.makeTestYear("Australia/Darwin", [
		["1942-03-28T16:29:59+00:00", "02:59:59", "ACDT", -630],
		["1942-03-28T16:30:00+00:00", "02:00:00", "ACST", -570],
		["1942-09-26T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1942-09-26T16:30:00+00:00", "03:00:00", "ACDT", -630]
	]),

	"1943" : helpers.makeTestYear("Australia/Darwin", [
		["1943-03-27T16:29:59+00:00", "02:59:59", "ACDT", -630],
		["1943-03-27T16:30:00+00:00", "02:00:00", "ACST", -570],
		["1943-10-02T16:29:59+00:00", "01:59:59", "ACST", -570],
		["1943-10-02T16:30:00+00:00", "03:00:00", "ACDT", -630]
	]),

	"1944" : helpers.makeTestYear("Australia/Darwin", [
		["1944-03-25T16:29:59+00:00", "02:59:59", "ACDT", -630],
		["1944-03-25T16:30:00+00:00", "02:00:00", "ACST", -570]
	])
};