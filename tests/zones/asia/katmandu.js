"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Katmandu"] = {
	"1919" : helpers.makeTestYear("Asia/Katmandu", [
		["1919-12-31T18:18:43Z", "23:59:59", "LMT", -20476 / 60],
		["1919-12-31T18:18:44Z", "23:48:44", "IST", -330]
	]),

	"1985" : helpers.makeTestYear("Asia/Katmandu", [
		["1985-12-31T18:29:59Z", "23:59:59", "IST", -330],
		["1985-12-31T18:30:00Z", "00:15:00", "NPT", -345]
	])
};