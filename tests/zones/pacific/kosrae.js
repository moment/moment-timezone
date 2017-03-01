"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kosrae"] = {
	"1969" : helpers.makeTestYear("Pacific/Kosrae", [
		["1969-09-30T12:59:59+00:00", "23:59:59", "+11", -660],
		["1969-09-30T13:00:00+00:00", "01:00:00", "+12", -720]
	]),

	"1998" : helpers.makeTestYear("Pacific/Kosrae", [
		["1998-12-31T11:59:59+00:00", "23:59:59", "+12", -720],
		["1998-12-31T12:00:00+00:00", "23:00:00", "+11", -660]
	])
};