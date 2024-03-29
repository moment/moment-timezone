"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Bougainville"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Bougainville", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Bougainville", { abbr: true, expect: "Asia/Sakhalin" }),

	"1879" : helpers.makeTestYear("Pacific/Bougainville", [
		["1879-12-31T13:37:43+00:00", "23:59:59", "LMT", -37336 / 60],
		["1879-12-31T13:37:44+00:00", "23:26:16", "PMMT", -35312 / 60]
	]),

	"1894" : helpers.makeTestYear("Pacific/Bougainville", [
		["1894-12-31T14:11:27+00:00", "23:59:59", "PMMT", -35312 / 60],
		["1894-12-31T14:11:28+00:00", "00:11:28", "+10", -600]
	]),

	"1942" : helpers.makeTestYear("Pacific/Bougainville", [
		["1942-06-30T13:59:59+00:00", "23:59:59", "+10", -600],
		["1942-06-30T14:00:00+00:00", "23:00:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Pacific/Bougainville", [
		["1945-08-20T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-08-20T15:00:00+00:00", "01:00:00", "+10", -600]
	]),

	"2014" : helpers.makeTestYear("Pacific/Bougainville", [
		["2014-12-27T15:59:59+00:00", "01:59:59", "+10", -600],
		["2014-12-27T16:00:00+00:00", "03:00:00", "+11", -660]
	])
};