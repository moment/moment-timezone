"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Hermosillo"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Hermosillo", { offset: true, expect: "America/Phoenix" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Hermosillo", { abbr: true, expect: "America/Phoenix" }),

	"1922" : helpers.makeTestYear("America/Hermosillo", [
		["1922-01-01T07:00:00+00:00", "00:00:00", "MST", 420]
	]),

	"1927" : helpers.makeTestYear("America/Hermosillo", [
		["1927-06-11T05:59:59+00:00", "22:59:59", "MST", 420],
		["1927-06-11T06:00:00+00:00", "00:00:00", "CST", 360]
	]),

	"1930" : helpers.makeTestYear("America/Hermosillo", [
		["1930-11-15T05:59:59+00:00", "23:59:59", "CST", 360],
		["1930-11-15T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1931" : helpers.makeTestYear("America/Hermosillo", [
		["1931-05-02T05:59:59+00:00", "22:59:59", "MST", 420],
		["1931-05-02T06:00:00+00:00", "00:00:00", "CST", 360],
		["1931-10-01T05:59:59+00:00", "23:59:59", "CST", 360],
		["1931-10-01T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1932" : helpers.makeTestYear("America/Hermosillo", [
		["1932-04-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1932-04-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1942" : helpers.makeTestYear("America/Hermosillo", [
		["1942-04-24T05:59:59+00:00", "23:59:59", "CST", 360],
		["1942-04-24T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1949" : helpers.makeTestYear("America/Hermosillo", [
		["1949-01-14T06:59:59+00:00", "23:59:59", "MST", 420],
		["1949-01-14T07:00:00+00:00", "23:00:00", "PST", 480]
	]),

	"1970" : helpers.makeTestYear("America/Hermosillo", [
		["1970-01-01T07:59:59+00:00", "23:59:59", "PST", 480],
		["1970-01-01T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1996" : helpers.makeTestYear("America/Hermosillo", [
		["1996-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["1996-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1996-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1996-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1997" : helpers.makeTestYear("America/Hermosillo", [
		["1997-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["1997-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1997-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1997-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1998" : helpers.makeTestYear("America/Hermosillo", [
		["1998-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["1998-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1998-10-25T07:59:59+00:00", "01:59:59", "MDT", 360]
	])
};