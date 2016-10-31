"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Kerguelen"] = {
<<<<<<< HEAD
	"guess" : helpers.makeTestGuess("Indian/Kerguelen", { offset: false, abbr: true }),

=======
>>>>>>> origin/Country-Functionality
	"1949" : helpers.makeTestYear("Indian/Kerguelen", [
		["1949-12-31T23:59:59+00:00", "23:59:59", "-00", 0]
	]),

	"1950" : helpers.makeTestYear("Indian/Kerguelen", [
<<<<<<< HEAD
		["1950-01-01T00:00:00+00:00", "05:00:00", "TFT", -300]
=======
		["1950-01-01T00:00:00+00:00", "05:00:00", "+05", -300]
>>>>>>> origin/Country-Functionality
	])
};