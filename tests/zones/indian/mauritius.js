"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Mauritius"] = {
	"1906" : helpers.makeTestYear("Indian/Mauritius", [
		["1906-12-31T20:09:59+00:00", "23:59:59", "LMT", -230],
		["1906-12-31T20:10:00+00:00", "00:10:00", "MUT", -240]
	]),

	"1982" : helpers.makeTestYear("Indian/Mauritius", [
		["1982-10-09T19:59:59+00:00", "23:59:59", "MUT", -240],
		["1982-10-09T20:00:00+00:00", "01:00:00", "MUST", -300]
	]),

	"1983" : helpers.makeTestYear("Indian/Mauritius", [
		["1983-03-20T18:59:59+00:00", "23:59:59", "MUST", -300],
		["1983-03-20T19:00:00+00:00", "23:00:00", "MUT", -240]
	]),

	"2008" : helpers.makeTestYear("Indian/Mauritius", [
		["2008-10-25T21:59:59+00:00", "01:59:59", "MUT", -240],
		["2008-10-25T22:00:00+00:00", "03:00:00", "MUST", -300]
	]),

	"2009" : helpers.makeTestYear("Indian/Mauritius", [
		["2009-03-28T20:59:59+00:00", "01:59:59", "MUST", -300],
		["2009-03-28T21:00:00+00:00", "01:00:00", "MUT", -240]
	])
};