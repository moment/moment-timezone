"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Katmandu"] = {
	"1919" : helpers.makeTestYear("Asia/Katmandu", [
		["1919-12-31T18:18:43+00:00", "23:59:59", "LMT", -20476 / 60],
		["1919-12-31T18:18:44+00:00", "23:48:44", "+0530", -330]
	]),

	"1985" : helpers.makeTestYear("Asia/Katmandu", [
		["1985-12-31T18:29:59+00:00", "23:59:59", "+0530", -330],
		["1985-12-31T18:30:00+00:00", "00:15:00", "+0545", -345]
	])
};