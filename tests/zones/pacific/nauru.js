"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Nauru"] = {
	"1942" : helpers.makeTestYear("Pacific/Nauru", [
		["1942-03-14T12:29:59+00:00", "23:59:59", "NRT", -690],
		["1942-03-14T12:30:00+00:00", "21:30:00", "JST", -540]
	]),

	"1944" : helpers.makeTestYear("Pacific/Nauru", [
		["1944-08-14T14:59:59+00:00", "23:59:59", "JST", -540],
		["1944-08-14T15:00:00+00:00", "02:30:00", "NRT", -690]
	])
};