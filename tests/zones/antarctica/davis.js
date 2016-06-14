"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Davis"] = {
	"guess" : helpers.makeTestGuess("Antarctica/Davis", { offset: false, abbr: true }),

	"1957" : helpers.makeTestYear("Antarctica/Davis", [
		["1957-01-12T23:59:59+00:00", "23:59:59", "-00", 0],
		["1957-01-13T00:00:00+00:00", "07:00:00", "DAVT", -420]
	]),

	"1964" : helpers.makeTestYear("Antarctica/Davis", [
		["1964-10-31T16:59:59+00:00", "23:59:59", "DAVT", -420],
		["1964-10-31T17:00:00+00:00", "17:00:00", "-00", 0]
	]),

	"1969" : helpers.makeTestYear("Antarctica/Davis", [
		["1969-01-31T23:59:59+00:00", "23:59:59", "-00", 0],
		["1969-02-01T00:00:00+00:00", "07:00:00", "DAVT", -420]
	]),

	"2009" : helpers.makeTestYear("Antarctica/Davis", [
		["2009-10-17T18:59:59+00:00", "01:59:59", "DAVT", -420],
		["2009-10-17T19:00:00+00:00", "00:00:00", "DAVT", -300]
	]),

	"2010" : helpers.makeTestYear("Antarctica/Davis", [
		["2010-03-10T19:59:59+00:00", "00:59:59", "DAVT", -300],
		["2010-03-10T20:00:00+00:00", "03:00:00", "DAVT", -420]
	]),

	"2011" : helpers.makeTestYear("Antarctica/Davis", [
		["2011-10-27T18:59:59+00:00", "01:59:59", "DAVT", -420],
		["2011-10-27T19:00:00+00:00", "00:00:00", "DAVT", -300]
	]),

	"2012" : helpers.makeTestYear("Antarctica/Davis", [
		["2012-02-21T19:59:59+00:00", "00:59:59", "DAVT", -300],
		["2012-02-21T20:00:00+00:00", "03:00:00", "DAVT", -420]
	])
};