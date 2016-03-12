import moment from "../../";
import helpers from "../helpers/helpers";

export const utc = {
	utc(test) {
		moment.tz.add([
			"TestUTC/Pacific|PST|80|0|",
			"TestUTC/Eastern|EST|50|0|"
		]);

		const m = moment("2014-07-10 12:00:00+00:00"),
			localFormat = m.format(),
			localOffset = helpers.getUTCOffset(m);

		m.tz("TestUTC/Pacific");

		test.equal(helpers.getUTCOffset(m), -480, "Should change the offset when using moment.fn.tz");
		test.equal(m.format(), "2014-07-10T04:00:00-08:00", "Should change the offset when using moment.fn.tz");

		m.utc();
		moment.updateOffset(m);

		test.equal(helpers.getUTCOffset(m), 0, "Should set the offset to +00:00 when using moment.fn.utc");
		test.equal(m.format(), "2014-07-10T12:00:00+00:00", "Should change the offset when using moment.fn.utc");

		m.tz("TestUTC/Eastern");

		test.equal(helpers.getUTCOffset(m), -300, "Should change the offset when using moment.fn.tz");
		test.equal(m.format(), "2014-07-10T07:00:00-05:00", "Should change the offset when using moment.fn.tz");

		m.utc();
		moment.updateOffset(m);

		test.equal(helpers.getUTCOffset(m), 0, "Should set the offset to +00:00 when using moment.fn.utc");
		test.equal(m.format(), "2014-07-10T12:00:00+00:00", "Should change the offset when using moment.fn.utc");

		m.local();
		moment.updateOffset(m);

		test.equal(helpers.getUTCOffset(m), localOffset, "Should reset the offset to local time when using moment.fn.local");
		test.equal(m.format(), localFormat, "Should reset the offset to local time when using moment.fn.local");

		test.done();
	}
};
