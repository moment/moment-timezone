var moment = require("../../index");

exports["links"] = {

	"links" : function (t) {
		moment.tz.add({
			zones : {
				"Test/A" : [
					"7 - TST"
				]
			},
			links : {
				"Test/B" : "Test/A"
			}
		});

		t.equal(moment().tz("Test/A").tz(), "Test/A", "Should be able to get the zone name");
		t.equal(moment().tz("TEST/A").tz(), "Test/A", "Should be case insensitive");
		t.equal(moment().tz("test/a").tz(), "Test/A", "Should be case insensitive");

		t.equal(moment().tz("Test/B").tz(), "Test/A", "Should be able to get the linked zone name");
		t.equal(moment().tz("TEST/B").tz(), "Test/A", "Should be case insensitive");
		t.equal(moment().tz("test/b").tz(), "Test/A", "Should be case insensitive");

		t.done();
	}
};
