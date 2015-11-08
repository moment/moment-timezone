"use strict";

var tz = require("../../").tz;

var getTimezoneOffset = Date.prototype.getTimezoneOffset;
var toTimeString = Date.prototype.toTimeString;

function mockTimezoneOffset (zone, format) {
	Date.prototype.getTimezoneOffset = function () {
		return zone.offset(+this);
	};
	Date.prototype.toTimeString = function () {
		return tz(+this, zone.name).format(format || 'HH:mm:ss [GMT]ZZ');
	};
}

exports.guess = {
	tearDown : function (done) {
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
		Date.prototype.toTimeString = toTimeString;
		done();
	},

	"different offsets should guess different timezones" : function (test) {
		mockTimezoneOffset(tz.zone('Europe/London'));
		var london = tz.guess(true);
		mockTimezoneOffset(tz.zone('America/New_York'));
		var newYork = tz.guess(true);
		mockTimezoneOffset(tz.zone('America/Los_Angeles'));
		var losAngeles = tz.guess(true);

		test.ok(london);
		test.ok(newYork);
		test.ok(losAngeles);
		test.notEqual(london, newYork);
		test.notEqual(london, losAngeles);
		test.done();
	},

	"ensure each zone is represented" : function (test) {
		var names = tz.names();
		var zone, i;

		for (i = 0; i < names.length; i++) {
			zone = tz.zone(names[i]);
			mockTimezoneOffset(zone);
			test.ok(tz.guess(true), "Should have a guess for " + zone.name + ")");
		}
		test.done();
	},

	// "ensure zones unique by offset are exact matches" : function (test) {
	// 	var zone, i;
	// 	var names = [
	// 		"Africa/Cairo",
	// 		"Africa/Casablanca",
	// 		"Africa/Lagos",
	// 		"Africa/Windhoek",
	// 		"America/Adak",
	// 		"America/Anchorage",
	// 		"America/Asuncion",
	// 		"America/Buenos_Aires",
	// 		"America/Cancun",
	// 		"America/Caracas",
	// 		"America/Chicago",
	// 		"America/Chihuahua",
	// 		"America/Cuiaba",
	// 		"America/Denver",
	// 		"America/Fort_Nelson",
	// 		"America/Godthab",
	// 		"America/Grand_Turk",
	// 		"America/Guatemala",
	// 		"America/Halifax",
	// 		"America/Havana",
	// 		"America/Lima",
	// 		"America/Los_Angeles",
	// 		"America/Metlakatla",
	// 		"America/Mexico_City",
	// 		"America/Miquelon",
	// 		"America/Montevideo",
	// 		"America/New_York",
	// 		"America/Noronha",
	// 		"America/Phoenix",
	// 		"America/Puerto_Rico",
	// 		"America/Santa_Isabel",
	// 		"America/Sao_Paulo",
	// 		"America/Scoresbysund",
	// 		"America/St_Johns",
	// 		"Antarctica/Troll",
	// 		"Asia/Amman",
	// 		"Asia/Baku",
	// 		"Asia/Beirut",
	// 		"Asia/Damascus",
	// 		"Asia/Dhaka",
	// 		"Asia/Dubai",
	// 		"Asia/Hebron",
	// 		"Asia/Ho_Chi_Minh",
	// 		"Asia/Hovd",
	// 		"Asia/Jerusalem",
	// 		"Asia/Kabul",
	// 		"Asia/Karachi",
	// 		"Asia/Kathmandu",
	// 		"Asia/Kolkata",
	// 		"Asia/Rangoon",
	// 		"Asia/Shanghai",
	// 		"Asia/Tehran",
	// 		"Asia/Tokyo",
	// 		"Asia/Ulaanbaatar",
	// 		"Australia/Adelaide",
	// 		"Australia/Brisbane",
	// 		"Australia/Darwin",
	// 		"Australia/Eucla",
	// 		"Australia/Lord_Howe",
	// 		"Australia/Sydney",
	// 		"Europe/Berlin",
	// 		"Europe/Chisinau",
	// 		"Europe/Istanbul",
	// 		"Europe/Kiev",
	// 		"Europe/London",
	// 		"Europe/Moscow",
	// 		"Pacific/Apia",
	// 		"Pacific/Auckland",
	// 		"Pacific/Bougainville",
	// 		"Pacific/Chatham",
	// 		"Pacific/Fiji",
	// 		"Pacific/Gambier",
	// 		"Pacific/Honolulu",
	// 		"Pacific/Kiritimati",
	// 		"Pacific/Majuro",
	// 		"Pacific/Marquesas",
	// 		"Pacific/Norfolk",
	// 		"Pacific/Pago_Pago",
	// 		"Pacific/Tongatapu"
	// 	];
	//
	// 	for (i = 0; i < names.length; i++) {
	// 		zone = tz.zone(names[i]);
	// 		mockTimezoneOffset(zone);
	// 		test.equal(tz.guess(true), zone.name);
	// 	}
	// 	test.done();
	// },
	//
	// "ensure zones unique by offset and abbreviation are exact matches" : function (test) {
	// 	var zone, i;
	// 	var names = [
	// 		"Africa/Abidjan",
	// 		"Africa/Algiers",
	// 		"Africa/Bissau",
	// 		"Africa/Cairo",
	// 		"Africa/Casablanca",
	// 		"Africa/Harare",
	// 		"Africa/Johannesburg",
	// 		"Africa/Khartoum",
	// 		"Africa/Lagos",
	// 		"Africa/Monrovia",
	// 		"Africa/Nairobi",
	// 		"Africa/Tunis",
	// 		"Africa/Windhoek",
	// 		"America/Adak",
	// 		"America/Anchorage",
	// 		"America/Asuncion",
	// 		"America/Bahia",
	// 		"America/Bogota",
	// 		"America/Buenos_Aires",
	// 		"America/Cancun",
	// 		"America/Caracas",
	// 		"America/Cayenne",
	// 		"America/Cayman",
	// 		"America/Chicago",
	// 		"America/Chihuahua",
	// 		"America/Cuiaba",
	// 		"America/Danmarkshavn",
	// 		"America/Denver",
	// 		"America/Fort_Nelson",
	// 		"America/Godthab",
	// 		"America/Grand_Turk",
	// 		"America/Guatemala",
	// 		"America/Guayaquil",
	// 		"America/Guyana",
	// 		"America/Halifax",
	// 		"America/Havana",
	// 		"America/Hermosillo",
	// 		"America/La_Paz",
	// 		"America/Lima",
	// 		"America/Los_Angeles",
	// 		"America/Manaus",
	// 		"America/Metlakatla",
	// 		"America/Mexico_City",
	// 		"America/Miquelon",
	// 		"America/Montevideo",
	// 		"America/New_York",
	// 		"America/Noronha",
	// 		"America/Panama",
	// 		"America/Paramaribo",
	// 		"America/Phoenix",
	// 		"America/Puerto_Rico",
	// 		"America/Rio_Branco",
	// 		"America/Santa_Isabel",
	// 		"America/Santarem",
	// 		"America/Santiago",
	// 		"America/Santo_Domingo",
	// 		"America/Sao_Paulo",
	// 		"America/Scoresbysund",
	// 		"America/St_Johns",
	// 		"America/Swift_Current",
	// 		"Antarctica/Davis",
	// 		"Antarctica/DumontDUrville",
	// 		"Antarctica/Macquarie",
	// 		"Antarctica/Mawson",
	// 		"Antarctica/Rothera",
	// 		"Antarctica/Syowa",
	// 		"Antarctica/Troll",
	// 		"Antarctica/Vostok",
	// 		"Asia/Almaty",
	// 		"Asia/Amman",
	// 		"Asia/Anadyr",
	// 		"Asia/Aqtau",
	// 		"Asia/Aqtobe",
	// 		"Asia/Ashgabat",
	// 		"Asia/Baghdad",
	// 		"Asia/Baku",
	// 		"Asia/Bangkok",
	// 		"Asia/Beirut",
	// 		"Asia/Bishkek",
	// 		"Asia/Brunei",
	// 		"Asia/Chita",
	// 		"Asia/Choibalsan",
	// 		"Asia/Damascus",
	// 		"Asia/Dhaka",
	// 		"Asia/Dili",
	// 		"Asia/Dubai",
	// 		"Asia/Dushanbe",
	// 		"Asia/Hebron",
	// 		"Asia/Ho_Chi_Minh",
	// 		"Asia/Hong_Kong",
	// 		"Asia/Hovd",
	// 		"Asia/Irkutsk",
	// 		"Asia/Jakarta",
	// 		"Asia/Jayapura",
	// 		"Asia/Jerusalem",
	// 		"Asia/Kabul",
	// 		"Asia/Kamchatka",
	// 		"Asia/Karachi",
	// 		"Asia/Kathmandu",
	// 		"Asia/Kolkata",
	// 		"Asia/Kuala_Lumpur",
	// 		"Asia/Kuching",
	// 		"Asia/Macau",
	// 		"Asia/Magadan",
	// 		"Asia/Makassar",
	// 		"Asia/Manila",
	// 		"Asia/Novokuznetsk",
	// 		"Asia/Novosibirsk",
	// 		"Asia/Omsk",
	// 		"Asia/Oral",
	// 		"Asia/Pontianak",
	// 		"Asia/Pyongyang",
	// 		"Asia/Qatar",
	// 		"Asia/Qyzylorda",
	// 		"Asia/Rangoon",
	// 		"Asia/Sakhalin",
	// 		"Asia/Samarkand",
	// 		"Asia/Seoul",
	// 		"Asia/Shanghai",
	// 		"Asia/Singapore",
	// 		"Asia/Srednekolymsk",
	// 		"Asia/Tashkent",
	// 		"Asia/Tbilisi",
	// 		"Asia/Tehran",
	// 		"Asia/Thimphu",
	// 		"Asia/Tokyo",
	// 		"Asia/Ulaanbaatar",
	// 		"Asia/Urumqi",
	// 		"Asia/Ust-Nera",
	// 		"Asia/Vladivostok",
	// 		"Asia/Yakutsk",
	// 		"Asia/Yekaterinburg",
	// 		"Asia/Yerevan",
	// 		"Australia/Adelaide",
	// 		"Australia/Brisbane",
	// 		"Australia/Darwin",
	// 		"Australia/Eucla",
	// 		"Australia/Lord_Howe",
	// 		"Australia/Perth",
	// 		"Australia/Sydney",
	// 		"Europe/Berlin",
	// 		"Europe/Chisinau",
	// 		"Europe/Dublin",
	// 		"Europe/Istanbul",
	// 		"Europe/Kaliningrad",
	// 		"Europe/Kiev",
	// 		"Europe/Lisbon",
	// 		"Europe/London",
	// 		"Europe/Moscow",
	// 		"Europe/Samara",
	// 		"Europe/Volgograd",
	// 		"Indian/Chagos",
	// 		"Indian/Christmas",
	// 		"Indian/Cocos",
	// 		"Indian/Kerguelen",
	// 		"Indian/Mahe",
	// 		"Indian/Maldives",
	// 		"Indian/Mauritius",
	// 		"Indian/Reunion",
	// 		"Pacific/Apia",
	// 		"Pacific/Auckland",
	// 		"Pacific/Bougainville",
	// 		"Pacific/Chatham",
	// 		"Pacific/Chuuk",
	// 		"Pacific/Easter",
	// 		"Pacific/Efate",
	// 		"Pacific/Enderbury",
	// 		"Pacific/Fakaofo",
	// 		"Pacific/Fiji",
	// 		"Pacific/Funafuti",
	// 		"Pacific/Galapagos",
	// 		"Pacific/Gambier",
	// 		"Pacific/Guadalcanal",
	// 		"Pacific/Guam",
	// 		"Pacific/Honolulu",
	// 		"Pacific/Kiritimati",
	// 		"Pacific/Kosrae",
	// 		"Pacific/Kwajalein",
	// 		"Pacific/Majuro",
	// 		"Pacific/Marquesas",
	// 		"Pacific/Nauru",
	// 		"Pacific/Niue",
	// 		"Pacific/Norfolk",
	// 		"Pacific/Noumea",
	// 		"Pacific/Pago_Pago",
	// 		"Pacific/Palau",
	// 		"Pacific/Pitcairn",
	// 		"Pacific/Pohnpei",
	// 		"Pacific/Port_Moresby",
	// 		"Pacific/Rarotonga",
	// 		"Pacific/Tahiti",
	// 		"Pacific/Tarawa",
	// 		"Pacific/Tongatapu",
	// 		"Pacific/Wake",
	// 		"Pacific/Wallis"
	// 	];
	//
	// 	for (i = 0; i < names.length; i++) {
	// 		zone = tz.zone(names[i]);
	// 		mockTimezoneOffset(zone, 'HH:mm:ss [GMT]ZZ (z)');
	// 		console.log('testing', zone.name);
	// 		test.equal(tz.guess(true), zone.name);
	// 	}
	// 	test.done();
	// }
};
