"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/DumontDUrville"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/DumontDUrville", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/DumontDUrville", { abbr: true, expect: "Australia/Brisbane" }),


};