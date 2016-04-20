"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Ho_Chi_Minh"] = {
	"1906" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1906-06-30T16:53:19Z", "23:59:59", "LMT", -25600 / 60],
		["1906-06-30T16:53:20Z", "23:59:50", "PLMT", -25590 / 60]
	]),

	"1911" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1911-04-30T16:53:29Z", "23:59:59", "PLMT", -25590 / 60],
		["1911-04-30T16:53:30Z", "23:53:30", "ICT", -420]
	]),

	"1942" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1942-12-31T15:59:59Z", "22:59:59", "ICT", -420],
		["1942-12-31T16:00:00Z", "00:00:00", "IDT", -480]
	]),

	"1945" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1945-03-14T14:59:59Z", "22:59:59", "IDT", -480],
		["1945-03-14T15:00:00Z", "00:00:00", "JST", -540],
		["1945-09-01T14:59:59Z", "23:59:59", "JST", -540],
		["1945-09-01T15:00:00Z", "22:00:00", "ICT", -420]
	]),

	"1947" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1947-03-31T16:59:59Z", "23:59:59", "ICT", -420],
		["1947-03-31T17:00:00Z", "01:00:00", "IDT", -480]
	]),

	"1955" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1955-06-30T15:59:59Z", "23:59:59", "IDT", -480],
		["1955-06-30T16:00:00Z", "23:00:00", "ICT", -420]
	]),

	"1959" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1959-12-31T15:59:59Z", "22:59:59", "ICT", -420],
		["1959-12-31T16:00:00Z", "00:00:00", "IDT", -480]
	]),

	"1975" : helpers.makeTestYear("Asia/Ho_Chi_Minh", [
		["1975-06-12T15:59:59Z", "23:59:59", "IDT", -480],
		["1975-06-12T16:00:00Z", "23:00:00", "ICT", -420]
	])
};