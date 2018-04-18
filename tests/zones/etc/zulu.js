"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Zulu"] = {
    "guess" : helpers.makeTestGuess("Etc/Zulu", { offset: false, abbr: true, expect: "Etc/UTC" }),
};