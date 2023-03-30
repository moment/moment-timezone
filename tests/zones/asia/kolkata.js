"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kolkata"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kolkata", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kolkata", { abbr: true }),

	"1905" : helpers.makeTestYear("Asia/Kolkata", [
		["1905-12-31T18:38:49+00:00", "23:59:59", "MMT", -19270 / 60],
		["1905-12-31T18:38:50+00:00", "00:08:50", "IST", -330]
	]),

	"1941" : helpers.makeTestYear("Asia/Kolkata", [
		["1941-09-30T18:29:59+00:00", "23:59:59", "IST", -330],
		["1941-09-30T18:30:00+00:00", "01:00:00", "+0630", -390]
	]),

	"1942" : helpers.makeTestYear("Asia/Kolkata", [
		["1942-05-14T17:29:59+00:00", "23:59:59", "+0630", -390],
		["1942-05-14T17:30:00+00:00", "23:00:00", "IST", -330],
		["1942-08-31T18:29:59+00:00", "23:59:59", "IST", -330],
		["1942-08-31T18:30:00+00:00", "01:00:00", "+0630", -390]
	]),

	"1945" : helpers.makeTestYear("Asia/Kolkata", [
		["1945-10-14T17:29:59+00:00", "23:59:59", "+0630", -390],
		["1945-10-14T17:30:00+00:00", "23:00:00", "IST", -330]
	])
};