moment = require('../index');

exports["zoneExists"] = {
	"returns true for valid zones" : function (test) {
		test.equal(moment.tz.zoneExists("America/Los_Angeles"), true, "America/Los_Angeles exists");
		test.done();
	},

	"returns false for invalid zones" : function (test) {
		test.equal(moment.tz.zoneExists("America/Imaginary"), false, "America/Imaginary does not exists");
		test.done();
	}
};
