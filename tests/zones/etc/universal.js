"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Universal"] = {
    "guess" : helpers.makeTestGuess("Etc/Universal", { offset: false, abbr: true, expect: "Etc/UTC" }),
};