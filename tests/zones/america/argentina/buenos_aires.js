"use strict";

var helpers = require("../../../helpers/helpers");

exports["America/Argentina/Buenos_Aires"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Argentina/Buenos_Aires", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Argentina/Buenos_Aires", { abbr: true, expect: "America/Sao_Paulo" }),

	"1894" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1894-10-31T03:53:47+00:00", "23:59:59", "LMT", 14028 / 60],
		["1894-10-31T03:53:48+00:00", "23:37:00", "CMT", 15408 / 60]
	]),

	"1920" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1920-05-01T04:16:47+00:00", "23:59:59", "CMT", 15408 / 60],
		["1920-05-01T04:16:48+00:00", "00:16:48", "-04", 240]
	]),

	"1930" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1930-12-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1930-12-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1931" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1931-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1931-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1931-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1931-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1932" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1932-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1932-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1932-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1932-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1933" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1933-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1933-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1933-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1933-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1934" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1934-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1934-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1934-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1934-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1935" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1935-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1935-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1935-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1935-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1936" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1936-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1936-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1936-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1936-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1937" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1937-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1937-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1937-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1937-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1938" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1938-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1938-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1938-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1938-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1939" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1939-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1939-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1939-11-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1939-11-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1940" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1940-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1940-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1940-07-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1940-07-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1941" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1941-06-15T02:59:59+00:00", "23:59:59", "-03", 180],
		["1941-06-15T03:00:00+00:00", "23:00:00", "-04", 240],
		["1941-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1941-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1943" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1943-08-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1943-08-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1943-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1943-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1946" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1946-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1946-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1946-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1946-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1963" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1963-10-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1963-10-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1963-12-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1963-12-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1964" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1964-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1964-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1964-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1964-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1965" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1965-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1965-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1965-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1965-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1966" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1966-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1966-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1966-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["1966-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1967" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1967-04-02T02:59:59+00:00", "23:59:59", "-03", 180],
		["1967-04-02T03:00:00+00:00", "23:00:00", "-04", 240],
		["1967-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1967-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1968" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1968-04-07T02:59:59+00:00", "23:59:59", "-03", 180],
		["1968-04-07T03:00:00+00:00", "23:00:00", "-04", 240],
		["1968-10-06T03:59:59+00:00", "23:59:59", "-04", 240],
		["1968-10-06T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1969" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1969-04-06T02:59:59+00:00", "23:59:59", "-03", 180],
		["1969-04-06T03:00:00+00:00", "23:00:00", "-04", 240],
		["1969-10-05T03:59:59+00:00", "23:59:59", "-04", 240],
		["1969-10-05T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1974" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1974-01-23T02:59:59+00:00", "23:59:59", "-03", 180],
		["1974-01-23T03:00:00+00:00", "01:00:00", "-02", 120],
		["1974-05-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1974-05-01T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1988" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1988-12-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1988-12-01T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1989" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1989-03-05T01:59:59+00:00", "23:59:59", "-02", 120],
		["1989-03-05T02:00:00+00:00", "23:00:00", "-03", 180],
		["1989-10-15T02:59:59+00:00", "23:59:59", "-03", 180],
		["1989-10-15T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1990" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1990-03-04T01:59:59+00:00", "23:59:59", "-02", 120],
		["1990-03-04T02:00:00+00:00", "23:00:00", "-03", 180],
		["1990-10-21T02:59:59+00:00", "23:59:59", "-03", 180],
		["1990-10-21T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1991" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1991-03-03T01:59:59+00:00", "23:59:59", "-02", 120],
		["1991-03-03T02:00:00+00:00", "23:00:00", "-03", 180],
		["1991-10-20T02:59:59+00:00", "23:59:59", "-03", 180],
		["1991-10-20T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1992" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1992-03-01T01:59:59+00:00", "23:59:59", "-02", 120],
		["1992-03-01T02:00:00+00:00", "23:00:00", "-03", 180],
		["1992-10-18T02:59:59+00:00", "23:59:59", "-03", 180],
		["1992-10-18T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"1993" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1993-03-07T01:59:59+00:00", "23:59:59", "-02", 120],
		["1993-03-07T02:00:00+00:00", "23:00:00", "-03", 180]
	]),

	"1999" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["1999-10-03T02:59:59+00:00", "23:59:59", "-03", 180],
		["1999-10-03T03:00:00+00:00", "00:00:00", "-03", 180]
	]),

	"2000" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["2000-03-03T02:59:59+00:00", "23:59:59", "-03", 180],
		["2000-03-03T03:00:00+00:00", "00:00:00", "-03", 180]
	]),

	"2007" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["2007-12-30T02:59:59+00:00", "23:59:59", "-03", 180],
		["2007-12-30T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"2008" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["2008-03-16T01:59:59+00:00", "23:59:59", "-02", 120],
		["2008-03-16T02:00:00+00:00", "23:00:00", "-03", 180],
		["2008-10-19T02:59:59+00:00", "23:59:59", "-03", 180],
		["2008-10-19T03:00:00+00:00", "01:00:00", "-02", 120]
	]),

	"2009" : helpers.makeTestYear("America/Argentina/Buenos_Aires", [
		["2009-03-15T01:59:59+00:00", "23:59:59", "-02", 120],
		["2009-03-15T02:00:00+00:00", "23:00:00", "-03", 180]
	])
};