var moment = require("./moment-timezone"),
	data = require('./moment-timezone.json');

// Load timezone data in Node.JS
moment.tz.addRules(data.rules);
moment.tz.addZones(data.zones);

module.exports = moment;
