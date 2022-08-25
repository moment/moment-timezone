"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Maldives"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Maldives", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Maldives", { abbr: true, expect: "Asia/Karachi" }),

	"1879" : helpers.makeTestYear("Indian/Maldives", [
		["1879-12-31T19:06:00+00:00", "00:00:00", "MMT", -294]
	]),

	"1959" : helpers.makeTestYear("Indian/Maldives", [
		["1959-12-31T19:05:59+00:00", "23:59:59", "MMT", -294]
	])
};