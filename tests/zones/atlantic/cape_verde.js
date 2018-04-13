"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/Cape_Verde"] = {
	"1912" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1912-01-01T01:59:59+00:00", "00:25:55", "LMT", 5644 / 60],
		["1912-01-01T02:00:00+00:00", "00:00:00", "-02", 120]
	]),

	"1942" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1942-09-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1942-09-01T02:00:00+00:00", "01:00:00", "-01", 60]
	]),

	"1945" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1945-10-15T00:59:59+00:00", "23:59:59", "-01", 60],
		["1945-10-15T01:00:00+00:00", "23:00:00", "-02", 120]
	]),

	"1975" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1975-11-25T03:59:59+00:00", "01:59:59", "-02", 120],
		["1975-11-25T04:00:00+00:00", "03:00:00", "-01", 60]
	])
};