var moment = require("../../moment-timezone");

exports["America/Barbados"] = {

	"1924" : function (t) {
		t.equal(moment("1924-01-01T03:58:28+00:00").tz("America/Barbados").format("HH:mm:ss"), "23:59:59", "1924-01-01T03:58:28+00:00 should be 23:59:59 LMT");
		t.equal(moment("1924-01-01T03:58:29+00:00").tz("America/Barbados").format("HH:mm:ss"), "00:00:00", "1924-01-01T03:58:29+00:00 should be 00:00:00 BMT");

		t.equal(moment("1924-01-01T03:58:28+00:00").tz("America/Barbados").zone(), 14309 / 60, "1924-01-01T03:58:28+00:00 should be 14309 / 60 minutes offset in LMT");
		t.equal(moment("1924-01-01T03:58:29+00:00").tz("America/Barbados").zone(), 14309 / 60, "1924-01-01T03:58:29+00:00 should be 14309 / 60 minutes offset in BMT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-01-01T03:58:28+00:00").tz("America/Barbados").format("HH:mm:ss"), "23:59:59", "1932-01-01T03:58:28+00:00 should be 23:59:59 BMT");
		t.equal(moment("1932-01-01T03:58:29+00:00").tz("America/Barbados").format("HH:mm:ss"), "23:58:29", "1932-01-01T03:58:29+00:00 should be 23:58:29 AST");

		t.equal(moment("1932-01-01T03:58:28+00:00").tz("America/Barbados").zone(), 14309 / 60, "1932-01-01T03:58:28+00:00 should be 14309 / 60 minutes offset in BMT");
		t.equal(moment("1932-01-01T03:58:29+00:00").tz("America/Barbados").zone(), 240, "1932-01-01T03:58:29+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-06-12T05:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1977-06-12T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1977-06-12T06:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "03:00:00", "1977-06-12T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1977-10-02T04:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1977-10-02T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1977-10-02T05:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:00:00", "1977-10-02T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1977-06-12T05:59:59+00:00").tz("America/Barbados").zone(), 240, "1977-06-12T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1977-06-12T06:00:00+00:00").tz("America/Barbados").zone(), 180, "1977-06-12T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1977-10-02T04:59:59+00:00").tz("America/Barbados").zone(), 180, "1977-10-02T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1977-10-02T05:00:00+00:00").tz("America/Barbados").zone(), 240, "1977-10-02T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-16T05:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1978-04-16T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1978-04-16T06:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "03:00:00", "1978-04-16T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1978-10-01T04:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1978-10-01T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1978-10-01T05:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:00:00", "1978-10-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1978-04-16T05:59:59+00:00").tz("America/Barbados").zone(), 240, "1978-04-16T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1978-04-16T06:00:00+00:00").tz("America/Barbados").zone(), 180, "1978-04-16T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1978-10-01T04:59:59+00:00").tz("America/Barbados").zone(), 180, "1978-10-01T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1978-10-01T05:00:00+00:00").tz("America/Barbados").zone(), 240, "1978-10-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-15T05:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1979-04-15T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1979-04-15T06:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "03:00:00", "1979-04-15T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1979-09-30T04:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1979-09-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1979-09-30T05:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:00:00", "1979-09-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1979-04-15T05:59:59+00:00").tz("America/Barbados").zone(), 240, "1979-04-15T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1979-04-15T06:00:00+00:00").tz("America/Barbados").zone(), 180, "1979-04-15T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1979-09-30T04:59:59+00:00").tz("America/Barbados").zone(), 180, "1979-09-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1979-09-30T05:00:00+00:00").tz("America/Barbados").zone(), 240, "1979-09-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-20T05:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1980-04-20T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1980-04-20T06:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "03:00:00", "1980-04-20T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1980-09-25T04:59:59+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:59:59", "1980-09-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1980-09-25T05:00:00+00:00").tz("America/Barbados").format("HH:mm:ss"), "01:00:00", "1980-09-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1980-04-20T05:59:59+00:00").tz("America/Barbados").zone(), 240, "1980-04-20T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1980-04-20T06:00:00+00:00").tz("America/Barbados").zone(), 180, "1980-04-20T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1980-09-25T04:59:59+00:00").tz("America/Barbados").zone(), 180, "1980-09-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1980-09-25T05:00:00+00:00").tz("America/Barbados").zone(), 240, "1980-09-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};