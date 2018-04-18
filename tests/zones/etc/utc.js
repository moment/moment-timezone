"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/UTC"] = {
    "guess" : helpers.makeTestGuess("Etc/UTC", { offset: false, abbr: true }),
};