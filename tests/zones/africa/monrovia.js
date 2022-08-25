"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Monrovia"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Monrovia", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Monrovia", { abbr: true, expect: "Africa/Abidjan" }),

	"1882" : helpers.makeTestYear("Africa/Monrovia", [
		["1882-01-01T00:43:08+00:00", "00:00:00", "MMT", 2588 / 60]
	]),

	"1919" : helpers.makeTestYear("Africa/Monrovia", [
		["1919-03-01T00:43:07+00:00", "23:59:59", "MMT", 2588 / 60],
		["1919-03-01T00:43:08+00:00", "23:58:38", "MMT", 2670 / 60]
	]),

	"1972" : helpers.makeTestYear("Africa/Monrovia", [
		["1972-01-07T00:44:29+00:00", "23:59:59", "MMT", 2670 / 60]
	])
};