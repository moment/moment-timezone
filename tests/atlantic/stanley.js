var moment = require("../../moment-timezone");

exports["Atlantic/Stanley"] = {

	"1912" : function (t) {
		t.equal(moment("1912-03-12T03:51:23+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1912-03-12T03:51:23+00:00 should be 23:59:59 SMT");
		t.equal(moment("1912-03-12T03:51:24+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:51:24", "1912-03-12T03:51:24+00:00 should be 23:51:24 FKT");

		t.equal(moment("1912-03-12T03:51:23+00:00").tz("Atlantic/Stanley").zone(), 231, "1912-03-12T03:51:23+00:00 should be 231 minutes offset in SMT");
		t.equal(moment("1912-03-12T03:51:24+00:00").tz("Atlantic/Stanley").zone(), 240, "1912-03-12T03:51:24+00:00 should be 240 minutes offset in FKT");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-09-26T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1937-09-26T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1937-09-26T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1937-09-26T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1937-09-26T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1937-09-26T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1937-09-26T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1937-09-26T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-03-20T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1938-03-20T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1938-03-20T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1938-03-20T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1938-09-25T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1938-09-25T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1938-09-25T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1938-09-25T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1938-03-20T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1938-03-20T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1938-03-20T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1938-03-20T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1938-09-25T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1938-09-25T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1938-09-25T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1938-09-25T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-03-19T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1939-03-19T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1939-03-19T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1939-03-19T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1939-10-01T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1939-10-01T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1939-10-01T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1939-10-01T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1939-03-19T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1939-03-19T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1939-03-19T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1939-03-19T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1939-10-01T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1939-10-01T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1939-10-01T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1939-10-01T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-03-24T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1940-03-24T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1940-03-24T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1940-03-24T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1940-09-29T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1940-09-29T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1940-09-29T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1940-09-29T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1940-03-24T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1940-03-24T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1940-03-24T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1940-03-24T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1940-09-29T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1940-09-29T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1940-09-29T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1940-09-29T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-03-23T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1941-03-23T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1941-03-23T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1941-03-23T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1941-09-28T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1941-09-28T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1941-09-28T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1941-09-28T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1941-03-23T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1941-03-23T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1941-03-23T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1941-03-23T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1941-09-28T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1941-09-28T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1941-09-28T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1941-09-28T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-22T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1942-03-22T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1942-03-22T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1942-03-22T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1942-09-27T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1942-09-27T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1942-09-27T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1942-09-27T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1942-03-22T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1942-03-22T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1942-03-22T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1942-03-22T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1942-09-27T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1942-09-27T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1942-09-27T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1942-09-27T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-01-01T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1943-01-01T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1943-01-01T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1943-01-01T03:00:00+00:00 should be 23:00:00 FKT");

		t.equal(moment("1943-01-01T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1943-01-01T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1943-01-01T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1943-01-01T03:00:00+00:00 should be 240 minutes offset in FKT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-05-01T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1983-05-01T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1983-05-01T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1983-05-01T04:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("1983-09-25T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1983-09-25T02:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1983-09-25T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1983-09-25T03:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1983-05-01T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1983-05-01T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1983-05-01T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1983-05-01T04:00:00+00:00 should be 180 minutes offset in FKT");
		t.equal(moment("1983-09-25T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1983-09-25T02:59:59+00:00 should be 180 minutes offset in FKT");
		t.equal(moment("1983-09-25T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 120, "1983-09-25T03:00:00+00:00 should be 120 minutes offset in FKST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T01:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1984-04-29T01:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1984-04-29T02:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1984-04-29T02:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1984-09-16T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1984-09-16T02:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1984-09-16T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1984-09-16T03:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1984-04-29T01:59:59+00:00").tz("Atlantic/Stanley").zone(), 120, "1984-04-29T01:59:59+00:00 should be 120 minutes offset in FKST");
		t.equal(moment("1984-04-29T02:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1984-04-29T02:00:00+00:00 should be 180 minutes offset in FKT");
		t.equal(moment("1984-09-16T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1984-09-16T02:59:59+00:00 should be 180 minutes offset in FKT");
		t.equal(moment("1984-09-16T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 120, "1984-09-16T03:00:00+00:00 should be 120 minutes offset in FKST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T01:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1985-04-28T01:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1985-04-28T02:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1985-04-28T02:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1985-09-15T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1985-09-15T02:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1985-09-15T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "00:00:00", "1985-09-15T03:00:00+00:00 should be 00:00:00 FKST");

		t.equal(moment("1985-04-28T01:59:59+00:00").tz("Atlantic/Stanley").zone(), 120, "1985-04-28T01:59:59+00:00 should be 120 minutes offset in FKST");
		t.equal(moment("1985-04-28T02:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1985-04-28T02:00:00+00:00 should be 180 minutes offset in FKT");
		t.equal(moment("1985-09-15T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1985-09-15T02:59:59+00:00 should be 180 minutes offset in FKT");
		t.equal(moment("1985-09-15T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1985-09-15T03:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-20T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1986-04-20T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1986-04-20T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1986-04-20T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1986-09-14T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1986-09-14T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1986-09-14T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1986-09-14T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1986-04-20T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1986-04-20T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1986-04-20T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1986-04-20T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1986-09-14T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1986-09-14T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1986-09-14T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1986-09-14T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-19T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1987-04-19T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1987-04-19T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1987-04-19T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1987-09-13T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1987-09-13T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1987-09-13T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1987-09-13T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1987-04-19T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1987-04-19T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1987-04-19T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1987-04-19T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1987-09-13T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1987-09-13T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1987-09-13T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1987-09-13T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-17T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1988-04-17T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1988-04-17T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1988-04-17T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1988-09-11T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1988-09-11T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1988-09-11T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1988-09-11T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1988-04-17T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1988-04-17T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1988-04-17T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1988-04-17T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1988-09-11T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1988-09-11T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1988-09-11T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1988-09-11T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-16T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1989-04-16T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1989-04-16T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1989-04-16T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1989-09-10T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1989-09-10T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1989-09-10T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1989-09-10T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1989-04-16T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1989-04-16T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1989-04-16T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1989-04-16T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1989-09-10T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1989-09-10T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1989-09-10T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1989-09-10T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-22T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1990-04-22T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1990-04-22T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1990-04-22T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1990-09-09T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1990-09-09T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1990-09-09T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1990-09-09T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1990-04-22T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1990-04-22T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1990-04-22T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1990-04-22T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1990-09-09T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1990-09-09T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1990-09-09T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1990-09-09T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-21T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1991-04-21T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1991-04-21T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1991-04-21T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1991-09-15T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1991-09-15T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1991-09-15T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1991-09-15T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1991-04-21T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1991-04-21T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1991-04-21T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1991-04-21T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1991-09-15T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1991-09-15T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1991-09-15T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1991-09-15T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-19T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1992-04-19T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1992-04-19T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1992-04-19T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1992-09-13T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1992-09-13T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1992-09-13T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1992-09-13T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1992-04-19T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1992-04-19T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1992-04-19T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1992-04-19T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1992-09-13T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1992-09-13T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1992-09-13T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1992-09-13T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-18T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1993-04-18T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1993-04-18T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1993-04-18T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1993-09-12T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1993-09-12T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1993-09-12T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1993-09-12T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1993-04-18T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1993-04-18T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1993-04-18T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1993-04-18T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1993-09-12T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1993-09-12T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1993-09-12T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1993-09-12T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-17T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1994-04-17T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1994-04-17T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1994-04-17T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1994-09-11T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1994-09-11T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1994-09-11T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1994-09-11T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1994-04-17T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1994-04-17T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1994-04-17T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1994-04-17T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1994-09-11T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1994-09-11T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1994-09-11T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1994-09-11T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-16T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1995-04-16T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1995-04-16T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1995-04-16T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1995-09-10T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1995-09-10T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1995-09-10T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1995-09-10T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1995-04-16T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1995-04-16T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1995-04-16T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1995-04-16T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1995-09-10T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1995-09-10T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1995-09-10T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1995-09-10T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-21T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1996-04-21T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1996-04-21T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1996-04-21T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1996-09-15T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1996-09-15T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1996-09-15T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1996-09-15T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1996-04-21T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1996-04-21T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1996-04-21T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1996-04-21T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1996-09-15T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1996-09-15T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1996-09-15T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1996-09-15T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-20T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1997-04-20T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1997-04-20T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1997-04-20T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1997-09-14T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1997-09-14T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1997-09-14T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1997-09-14T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1997-04-20T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1997-04-20T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1997-04-20T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1997-04-20T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1997-09-14T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1997-09-14T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1997-09-14T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1997-09-14T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-19T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1998-04-19T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1998-04-19T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1998-04-19T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1998-09-13T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1998-09-13T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1998-09-13T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1998-09-13T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1998-04-19T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1998-04-19T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1998-04-19T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1998-04-19T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1998-09-13T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1998-09-13T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1998-09-13T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1998-09-13T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-18T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1999-04-18T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("1999-04-18T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "1999-04-18T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("1999-09-12T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "1999-09-12T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("1999-09-12T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "1999-09-12T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("1999-04-18T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "1999-04-18T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("1999-04-18T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "1999-04-18T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1999-09-12T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "1999-09-12T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("1999-09-12T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "1999-09-12T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-16T02:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "2000-04-16T02:59:59+00:00 should be 23:59:59 FKST");
		t.equal(moment("2000-04-16T03:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:00:00", "2000-04-16T03:00:00+00:00 should be 23:00:00 FKT");
		t.equal(moment("2000-09-10T03:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "23:59:59", "2000-09-10T03:59:59+00:00 should be 23:59:59 FKT");
		t.equal(moment("2000-09-10T04:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2000-09-10T04:00:00+00:00 should be 01:00:00 FKST");

		t.equal(moment("2000-04-16T02:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2000-04-16T02:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2000-04-16T03:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2000-04-16T03:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2000-09-10T03:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2000-09-10T03:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2000-09-10T04:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2000-09-10T04:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-15T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2001-04-15T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2001-04-15T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2001-04-15T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2001-09-02T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2001-09-02T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2001-09-02T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2001-09-02T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2001-04-15T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2001-04-15T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2001-04-15T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2001-04-15T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2001-09-02T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2001-09-02T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2001-09-02T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2001-09-02T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-21T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2002-04-21T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2002-04-21T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2002-04-21T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2002-09-01T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2002-09-01T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2002-09-01T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2002-09-01T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2002-04-21T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2002-04-21T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2002-04-21T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2002-04-21T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2002-09-01T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2002-09-01T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2002-09-01T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2002-09-01T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-20T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2003-04-20T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2003-04-20T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2003-04-20T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2003-09-07T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2003-09-07T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2003-09-07T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2003-09-07T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2003-04-20T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2003-04-20T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2003-04-20T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2003-04-20T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2003-09-07T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2003-09-07T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2003-09-07T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2003-09-07T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-18T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2004-04-18T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2004-04-18T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2004-04-18T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2004-09-05T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2004-09-05T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2004-09-05T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2004-09-05T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2004-04-18T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2004-04-18T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2004-04-18T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2004-04-18T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2004-09-05T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2004-09-05T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2004-09-05T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2004-09-05T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-17T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2005-04-17T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2005-04-17T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2005-04-17T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2005-09-04T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2005-09-04T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2005-09-04T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2005-09-04T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2005-04-17T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2005-04-17T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2005-04-17T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2005-04-17T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2005-09-04T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2005-09-04T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2005-09-04T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2005-09-04T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-16T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2006-04-16T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2006-04-16T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2006-04-16T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2006-09-03T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2006-09-03T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2006-09-03T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2006-09-03T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2006-04-16T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2006-04-16T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2006-04-16T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2006-04-16T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2006-09-03T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2006-09-03T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2006-09-03T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2006-09-03T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-04-15T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2007-04-15T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2007-04-15T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2007-04-15T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2007-09-02T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2007-09-02T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2007-09-02T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2007-09-02T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2007-04-15T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2007-04-15T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2007-04-15T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2007-04-15T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2007-09-02T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2007-09-02T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2007-09-02T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2007-09-02T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-20T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2008-04-20T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2008-04-20T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2008-04-20T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2008-09-07T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2008-09-07T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2008-09-07T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2008-09-07T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2008-04-20T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2008-04-20T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2008-04-20T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2008-04-20T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2008-09-07T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2008-09-07T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2008-09-07T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2008-09-07T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-19T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2009-04-19T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2009-04-19T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2009-04-19T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2009-09-06T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2009-09-06T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2009-09-06T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2009-09-06T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2009-04-19T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2009-04-19T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2009-04-19T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2009-04-19T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2009-09-06T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2009-09-06T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2009-09-06T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2009-09-06T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-18T04:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2010-04-18T04:59:59+00:00 should be 01:59:59 FKST");
		t.equal(moment("2010-04-18T05:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:00:00", "2010-04-18T05:00:00+00:00 should be 01:00:00 FKT");
		t.equal(moment("2010-09-05T05:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "01:59:59", "2010-09-05T05:59:59+00:00 should be 01:59:59 FKT");
		t.equal(moment("2010-09-05T06:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm:ss"), "03:00:00", "2010-09-05T06:00:00+00:00 should be 03:00:00 FKST");

		t.equal(moment("2010-04-18T04:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2010-04-18T04:59:59+00:00 should be 180 minutes offset in FKST");
		t.equal(moment("2010-04-18T05:00:00+00:00").tz("Atlantic/Stanley").zone(), 240, "2010-04-18T05:00:00+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2010-09-05T05:59:59+00:00").tz("Atlantic/Stanley").zone(), 240, "2010-09-05T05:59:59+00:00 should be 240 minutes offset in FKT");
		t.equal(moment("2010-09-05T06:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2010-09-05T06:00:00+00:00 should be 180 minutes offset in FKST");

		t.done();
	}
};