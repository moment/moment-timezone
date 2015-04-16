"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/DumontDUrville"] = {
	"1952" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1952-01-13T13:59:59+00:00", "23:59:59", "PMT", -600],
		["1952-01-13T14:00:00+00:00", "14:00:00", "zzz", 0]
	])
};