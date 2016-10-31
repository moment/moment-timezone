"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/DumontDUrville"] = {
<<<<<<< HEAD
	"guess" : helpers.makeTestGuess("Antarctica/DumontDUrville", { offset: false, abbr: true }),

=======
>>>>>>> origin/Country-Functionality
	"1946" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1946-12-31T23:59:59+00:00", "23:59:59", "-00", 0]
	]),

	"1947" : helpers.makeTestYear("Antarctica/DumontDUrville", [
<<<<<<< HEAD
		["1947-01-01T00:00:00+00:00", "10:00:00", "PMT", -600]
	]),

	"1952" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1952-01-13T13:59:59+00:00", "23:59:59", "PMT", -600],
=======
		["1947-01-01T00:00:00+00:00", "10:00:00", "+10", -600]
	]),

	"1952" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1952-01-13T13:59:59+00:00", "23:59:59", "+10", -600],
>>>>>>> origin/Country-Functionality
		["1952-01-13T14:00:00+00:00", "14:00:00", "-00", 0]
	]),

	"1956" : helpers.makeTestYear("Antarctica/DumontDUrville", [
		["1956-10-31T23:59:59+00:00", "23:59:59", "-00", 0],
<<<<<<< HEAD
		["1956-11-01T00:00:00+00:00", "10:00:00", "DDUT", -600]
=======
		["1956-11-01T00:00:00+00:00", "10:00:00", "+10", -600]
>>>>>>> origin/Country-Functionality
	])
};