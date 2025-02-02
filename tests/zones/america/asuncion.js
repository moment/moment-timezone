"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Asuncion"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Asuncion", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Asuncion", { abbr: true }),

	"1890" : helpers.makeTestYear("America/Asuncion", [
		["1890-01-01T03:50:39+00:00", "23:59:59", "LMT", 13840 / 60],
		["1890-01-01T03:50:40+00:00", "00:00:00", "AMT", 13840 / 60]
	]),

	"1931" : helpers.makeTestYear("America/Asuncion", [
		["1931-10-10T03:50:39+00:00", "23:59:59", "AMT", 13840 / 60],
		["1931-10-10T03:50:40+00:00", "23:50:40", "-04", 240]
	]),

	"1972" : helpers.makeTestYear("America/Asuncion", [
		["1972-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1972-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1974" : helpers.makeTestYear("America/Asuncion", [
		["1974-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1974-04-01T03:00:00+00:00", "23:00:00", "-04", 240]
	]),

	"1975" : helpers.makeTestYear("America/Asuncion", [
		["1975-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1975-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1976" : helpers.makeTestYear("America/Asuncion", [
		["1976-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1976-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1976-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1976-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1977" : helpers.makeTestYear("America/Asuncion", [
		["1977-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1977-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1977-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1977-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1978" : helpers.makeTestYear("America/Asuncion", [
		["1978-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1978-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1978-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1978-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1979" : helpers.makeTestYear("America/Asuncion", [
		["1979-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1979-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1979-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1979-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1980" : helpers.makeTestYear("America/Asuncion", [
		["1980-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1980-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1980-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1980-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1981" : helpers.makeTestYear("America/Asuncion", [
		["1981-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1981-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1981-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1981-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1982" : helpers.makeTestYear("America/Asuncion", [
		["1982-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1982-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1982-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1982-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1983" : helpers.makeTestYear("America/Asuncion", [
		["1983-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1983-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1983-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1983-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1984" : helpers.makeTestYear("America/Asuncion", [
		["1984-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1984-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1984-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1984-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1985" : helpers.makeTestYear("America/Asuncion", [
		["1985-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1985-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1985-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1985-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1986" : helpers.makeTestYear("America/Asuncion", [
		["1986-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1986-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1986-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1986-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1987" : helpers.makeTestYear("America/Asuncion", [
		["1987-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1987-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1987-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1987-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1988" : helpers.makeTestYear("America/Asuncion", [
		["1988-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1988-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1988-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1988-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1989" : helpers.makeTestYear("America/Asuncion", [
		["1989-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1989-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1989-10-22T03:59:59+00:00", "23:59:59", "-04", 240],
		["1989-10-22T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1990" : helpers.makeTestYear("America/Asuncion", [
		["1990-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1990-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1990-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1990-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1991" : helpers.makeTestYear("America/Asuncion", [
		["1991-04-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1991-04-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1991-10-06T03:59:59+00:00", "23:59:59", "-04", 240],
		["1991-10-06T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1992" : helpers.makeTestYear("America/Asuncion", [
		["1992-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1992-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1992-10-05T03:59:59+00:00", "23:59:59", "-04", 240],
		["1992-10-05T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1993" : helpers.makeTestYear("America/Asuncion", [
		["1993-03-31T02:59:59+00:00", "23:59:59", "-03", 180],
		["1993-03-31T03:00:00+00:00", "23:00:00", "-04", 240],
		["1993-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1993-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1994" : helpers.makeTestYear("America/Asuncion", [
		["1994-02-27T02:59:59+00:00", "23:59:59", "-03", 180],
		["1994-02-27T03:00:00+00:00", "23:00:00", "-04", 240],
		["1994-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1994-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1995" : helpers.makeTestYear("America/Asuncion", [
		["1995-02-26T02:59:59+00:00", "23:59:59", "-03", 180],
		["1995-02-26T03:00:00+00:00", "23:00:00", "-04", 240],
		["1995-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1995-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1996" : helpers.makeTestYear("America/Asuncion", [
		["1996-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1996-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1996-10-06T03:59:59+00:00", "23:59:59", "-04", 240],
		["1996-10-06T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1997" : helpers.makeTestYear("America/Asuncion", [
		["1997-02-23T02:59:59+00:00", "23:59:59", "-03", 180],
		["1997-02-23T03:00:00+00:00", "23:00:00", "-04", 240],
		["1997-10-05T03:59:59+00:00", "23:59:59", "-04", 240],
		["1997-10-05T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1998" : helpers.makeTestYear("America/Asuncion", [
		["1998-03-01T02:59:59+00:00", "23:59:59", "-03", 180],
		["1998-03-01T03:00:00+00:00", "23:00:00", "-04", 240],
		["1998-10-04T03:59:59+00:00", "23:59:59", "-04", 240],
		["1998-10-04T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"1999" : helpers.makeTestYear("America/Asuncion", [
		["1999-03-07T02:59:59+00:00", "23:59:59", "-03", 180],
		["1999-03-07T03:00:00+00:00", "23:00:00", "-04", 240],
		["1999-10-03T03:59:59+00:00", "23:59:59", "-04", 240],
		["1999-10-03T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2000" : helpers.makeTestYear("America/Asuncion", [
		["2000-03-05T02:59:59+00:00", "23:59:59", "-03", 180],
		["2000-03-05T03:00:00+00:00", "23:00:00", "-04", 240],
		["2000-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["2000-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2001" : helpers.makeTestYear("America/Asuncion", [
		["2001-03-04T02:59:59+00:00", "23:59:59", "-03", 180],
		["2001-03-04T03:00:00+00:00", "23:00:00", "-04", 240],
		["2001-10-07T03:59:59+00:00", "23:59:59", "-04", 240],
		["2001-10-07T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2002" : helpers.makeTestYear("America/Asuncion", [
		["2002-04-07T02:59:59+00:00", "23:59:59", "-03", 180],
		["2002-04-07T03:00:00+00:00", "23:00:00", "-04", 240],
		["2002-09-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["2002-09-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2003" : helpers.makeTestYear("America/Asuncion", [
		["2003-04-06T02:59:59+00:00", "23:59:59", "-03", 180],
		["2003-04-06T03:00:00+00:00", "23:00:00", "-04", 240],
		["2003-09-07T03:59:59+00:00", "23:59:59", "-04", 240],
		["2003-09-07T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2004" : helpers.makeTestYear("America/Asuncion", [
		["2004-04-04T02:59:59+00:00", "23:59:59", "-03", 180],
		["2004-04-04T03:00:00+00:00", "23:00:00", "-04", 240],
		["2004-10-17T03:59:59+00:00", "23:59:59", "-04", 240],
		["2004-10-17T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2005" : helpers.makeTestYear("America/Asuncion", [
		["2005-03-13T02:59:59+00:00", "23:59:59", "-03", 180],
		["2005-03-13T03:00:00+00:00", "23:00:00", "-04", 240],
		["2005-10-16T03:59:59+00:00", "23:59:59", "-04", 240],
		["2005-10-16T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2006" : helpers.makeTestYear("America/Asuncion", [
		["2006-03-12T02:59:59+00:00", "23:59:59", "-03", 180],
		["2006-03-12T03:00:00+00:00", "23:00:00", "-04", 240],
		["2006-10-15T03:59:59+00:00", "23:59:59", "-04", 240],
		["2006-10-15T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2007" : helpers.makeTestYear("America/Asuncion", [
		["2007-03-11T02:59:59+00:00", "23:59:59", "-03", 180],
		["2007-03-11T03:00:00+00:00", "23:00:00", "-04", 240],
		["2007-10-21T03:59:59+00:00", "23:59:59", "-04", 240],
		["2007-10-21T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2008" : helpers.makeTestYear("America/Asuncion", [
		["2008-03-09T02:59:59+00:00", "23:59:59", "-03", 180],
		["2008-03-09T03:00:00+00:00", "23:00:00", "-04", 240],
		["2008-10-19T03:59:59+00:00", "23:59:59", "-04", 240],
		["2008-10-19T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2009" : helpers.makeTestYear("America/Asuncion", [
		["2009-03-08T02:59:59+00:00", "23:59:59", "-03", 180],
		["2009-03-08T03:00:00+00:00", "23:00:00", "-04", 240],
		["2009-10-18T03:59:59+00:00", "23:59:59", "-04", 240],
		["2009-10-18T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2010" : helpers.makeTestYear("America/Asuncion", [
		["2010-04-11T02:59:59+00:00", "23:59:59", "-03", 180],
		["2010-04-11T03:00:00+00:00", "23:00:00", "-04", 240],
		["2010-10-03T03:59:59+00:00", "23:59:59", "-04", 240],
		["2010-10-03T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2011" : helpers.makeTestYear("America/Asuncion", [
		["2011-04-10T02:59:59+00:00", "23:59:59", "-03", 180],
		["2011-04-10T03:00:00+00:00", "23:00:00", "-04", 240],
		["2011-10-02T03:59:59+00:00", "23:59:59", "-04", 240],
		["2011-10-02T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2012" : helpers.makeTestYear("America/Asuncion", [
		["2012-04-08T02:59:59+00:00", "23:59:59", "-03", 180],
		["2012-04-08T03:00:00+00:00", "23:00:00", "-04", 240],
		["2012-10-07T03:59:59+00:00", "23:59:59", "-04", 240],
		["2012-10-07T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2013" : helpers.makeTestYear("America/Asuncion", [
		["2013-03-24T02:59:59+00:00", "23:59:59", "-03", 180],
		["2013-03-24T03:00:00+00:00", "23:00:00", "-04", 240],
		["2013-10-06T03:59:59+00:00", "23:59:59", "-04", 240],
		["2013-10-06T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2014" : helpers.makeTestYear("America/Asuncion", [
		["2014-03-23T02:59:59+00:00", "23:59:59", "-03", 180],
		["2014-03-23T03:00:00+00:00", "23:00:00", "-04", 240],
		["2014-10-05T03:59:59+00:00", "23:59:59", "-04", 240],
		["2014-10-05T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2015" : helpers.makeTestYear("America/Asuncion", [
		["2015-03-22T02:59:59+00:00", "23:59:59", "-03", 180],
		["2015-03-22T03:00:00+00:00", "23:00:00", "-04", 240],
		["2015-10-04T03:59:59+00:00", "23:59:59", "-04", 240],
		["2015-10-04T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2016" : helpers.makeTestYear("America/Asuncion", [
		["2016-03-27T02:59:59+00:00", "23:59:59", "-03", 180],
		["2016-03-27T03:00:00+00:00", "23:00:00", "-04", 240],
		["2016-10-02T03:59:59+00:00", "23:59:59", "-04", 240],
		["2016-10-02T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2017" : helpers.makeTestYear("America/Asuncion", [
		["2017-03-26T02:59:59+00:00", "23:59:59", "-03", 180],
		["2017-03-26T03:00:00+00:00", "23:00:00", "-04", 240],
		["2017-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["2017-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2018" : helpers.makeTestYear("America/Asuncion", [
		["2018-03-25T02:59:59+00:00", "23:59:59", "-03", 180],
		["2018-03-25T03:00:00+00:00", "23:00:00", "-04", 240],
		["2018-10-07T03:59:59+00:00", "23:59:59", "-04", 240],
		["2018-10-07T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2019" : helpers.makeTestYear("America/Asuncion", [
		["2019-03-24T02:59:59+00:00", "23:59:59", "-03", 180],
		["2019-03-24T03:00:00+00:00", "23:00:00", "-04", 240],
		["2019-10-06T03:59:59+00:00", "23:59:59", "-04", 240],
		["2019-10-06T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2020" : helpers.makeTestYear("America/Asuncion", [
		["2020-03-22T02:59:59+00:00", "23:59:59", "-03", 180],
		["2020-03-22T03:00:00+00:00", "23:00:00", "-04", 240],
		["2020-10-04T03:59:59+00:00", "23:59:59", "-04", 240],
		["2020-10-04T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2021" : helpers.makeTestYear("America/Asuncion", [
		["2021-03-28T02:59:59+00:00", "23:59:59", "-03", 180],
		["2021-03-28T03:00:00+00:00", "23:00:00", "-04", 240],
		["2021-10-03T03:59:59+00:00", "23:59:59", "-04", 240],
		["2021-10-03T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2022" : helpers.makeTestYear("America/Asuncion", [
		["2022-03-27T02:59:59+00:00", "23:59:59", "-03", 180],
		["2022-03-27T03:00:00+00:00", "23:00:00", "-04", 240],
		["2022-10-02T03:59:59+00:00", "23:59:59", "-04", 240],
		["2022-10-02T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2023" : helpers.makeTestYear("America/Asuncion", [
		["2023-03-26T02:59:59+00:00", "23:59:59", "-03", 180],
		["2023-03-26T03:00:00+00:00", "23:00:00", "-04", 240],
		["2023-10-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["2023-10-01T04:00:00+00:00", "01:00:00", "-03", 180]
	]),

	"2024" : helpers.makeTestYear("America/Asuncion", [
		["2024-03-24T02:59:59+00:00", "23:59:59", "-03", 180],
		["2024-03-24T03:00:00+00:00", "23:00:00", "-04", 240],
		["2024-10-06T03:59:59+00:00", "23:59:59", "-04", 240],
		["2024-10-06T04:00:00+00:00", "01:00:00", "-03", 180],
		["2024-10-15T02:59:59+00:00", "23:59:59", "-03", 180],
		["2024-10-15T03:00:00+00:00", "00:00:00", "-03", 180]
	])
};