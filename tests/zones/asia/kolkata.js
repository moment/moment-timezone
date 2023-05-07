"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kolkata"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kolkata", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kolkata", { abbr: true }),

	"1854" : helpers.makeTestYear("Asia/Kolkata", [
		["1854-06-27T18:06:31+00:00", "23:59:59", "LMT", -21208 / 60],
		["1854-06-27T18:06:32+00:00", "23:59:52", "HMT", -21200 / 60]
	]),

	"1869" : helpers.makeTestYear("Asia/Kolkata", [
		["1869-12-31T18:06:39+00:00", "23:59:59", "HMT", -21200 / 60],
		["1869-12-31T18:06:40+00:00", "23:27:50", "MMT", -19270 / 60]
	]),

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