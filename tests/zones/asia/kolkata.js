"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kolkata"] = {
	"guess" : helpers.makeTestGuess("Asia/Kolkata", { offset: true, abbr: true }),

	"1941" : helpers.makeTestYear("Asia/Kolkata", [
		["1941-09-30T18:06:39+00:00", "23:59:59", "HMT", -21200 / 60],
		["1941-09-30T18:06:40+00:00", "00:36:40", "BURT", -390]
	]),

	"1942" : helpers.makeTestYear("Asia/Kolkata", [
		["1942-05-14T17:29:59+00:00", "23:59:59", "BURT", -390],
		["1942-05-14T17:30:00+00:00", "23:00:00", "IST", -330],
		["1942-08-31T18:29:59+00:00", "23:59:59", "IST", -330],
		["1942-08-31T18:30:00+00:00", "01:00:00", "IST", -390]
	]),

	"1945" : helpers.makeTestYear("Asia/Kolkata", [
		["1945-10-14T17:29:59+00:00", "23:59:59", "IST", -390],
		["1945-10-14T17:30:00+00:00", "23:00:00", "IST", -330]
	])
};