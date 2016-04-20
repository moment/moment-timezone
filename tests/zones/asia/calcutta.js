"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Calcutta"] = {
	"1941" : helpers.makeTestYear("Asia/Calcutta", [
		["1941-09-30T18:06:39Z", "23:59:59", "HMT", -21200 / 60],
		["1941-09-30T18:06:40Z", "00:36:40", "BURT", -390]
	]),

	"1942" : helpers.makeTestYear("Asia/Calcutta", [
		["1942-05-14T17:29:59Z", "23:59:59", "BURT", -390],
		["1942-05-14T17:30:00Z", "23:00:00", "IST", -330],
		["1942-08-31T18:29:59Z", "23:59:59", "IST", -330],
		["1942-08-31T18:30:00Z", "01:00:00", "IST", -390]
	]),

	"1945" : helpers.makeTestYear("Asia/Calcutta", [
		["1945-10-14T17:29:59Z", "23:59:59", "IST", -390],
		["1945-10-14T17:30:00Z", "23:00:00", "IST", -330]
	])
};