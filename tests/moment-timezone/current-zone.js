"use strict";

var tz = require("../../").tz;

var getTimezoneOffset = Date.prototype.getTimezoneOffset;

function mockTimezoneOffset (jan, jun) {
	Date.prototype.getTimezoneOffset = function () {
		var month = this.getMonth();
		if (month > 3 && month < 9) {
			return -jun;
		}
		return -jan;
	};
}

function makeCurrentZoneTest (janOffset, junOffset, zone) {
	return function (test) {
		mockTimezoneOffset(janOffset, junOffset);
		tz._currentZone = null;
		test.equal(tz.currentZone(), zone);
		test.done();
	};
}

exports.currentZone = {
	tearDown : function (done) {
		Date.prototype.getTimezoneOffset = getTimezoneOffset;
		done();
	},

	// These tests were built with 2015b data.
	// If they fail when updating the data to a newer version,
	// they should be updated to match the current data.
	"test january +00:00 july +00:00" : makeCurrentZoneTest(   0,    0, "Etc/UTC"),
	"test january +00:00 july +01:00" : makeCurrentZoneTest(   0,   60, "Europe/London"),
	"test january +00:00 july +02:00" : makeCurrentZoneTest(   0,  120, "Antarctica/Troll"),
	"test january +01:00 july +01:00" : makeCurrentZoneTest(  60,   60, "Africa/Lagos"),
	"test january +01:00 july +02:00" : makeCurrentZoneTest(  60,  120, "Europe/Berlin"),
	"test january +02:00 july +01:00" : makeCurrentZoneTest( 120,   60, "Africa/Windhoek"),
	"test january +02:00 july +02:00" : makeCurrentZoneTest( 120,  120, "Africa/Johannesburg"),
	"test january +02:00 july +03:00" : makeCurrentZoneTest( 120,  180, "Asia/Beirut"),
	"test january +03:00 july +03:00" : makeCurrentZoneTest( 180,  180, "Europe/Moscow"),
	"test january +03:30 july +04:30" : makeCurrentZoneTest( 210,  270, "Asia/Tehran"),
	"test january +04:00 july +04:00" : makeCurrentZoneTest( 240,  240, "Asia/Dubai"),
	"test january +04:00 july +05:00" : makeCurrentZoneTest( 240,  300, "Asia/Baku"),
	"test january +04:30 july +04:30" : makeCurrentZoneTest( 270,  270, "Asia/Kabul"),
	"test january +05:00 july +05:00" : makeCurrentZoneTest( 300,  300, "Asia/Yekaterinburg"),
	"test january +05:30 july +05:30" : makeCurrentZoneTest( 330,  330, "Asia/Kolkata"),
	"test january +05:45 july +05:45" : makeCurrentZoneTest( 345,  345, "Asia/Kathmandu"),
	"test january +06:00 july +06:00" : makeCurrentZoneTest( 360,  360, "Asia/Omsk"),
	"test january +06:30 july +06:30" : makeCurrentZoneTest( 390,  390, "Asia/Rangoon"),
	"test january +07:00 july +07:00" : makeCurrentZoneTest( 420,  420, "Asia/Krasnoyarsk"),
	"test january +07:00 july +08:00" : makeCurrentZoneTest( 420,  480, "Asia/Hovd"),
	"test january +08:00 july +08:00" : makeCurrentZoneTest( 480,  480, "Asia/Shanghai"),
	"test january +08:00 july +09:00" : makeCurrentZoneTest( 480,  540, "Asia/Ulaanbaatar"),
	"test january +08:45 july +08:45" : makeCurrentZoneTest( 525,  525, "Australia/Eucla"),
	"test january +09:00 july +09:00" : makeCurrentZoneTest( 540,  540, "Asia/Yakutsk"),
	"test january +09:30 july +09:30" : makeCurrentZoneTest( 570,  570, "Australia/Darwin"),
	"test january +10:00 july +10:00" : makeCurrentZoneTest( 600,  600, "Australia/Brisbane"),
	"test january +10:30 july +09:30" : makeCurrentZoneTest( 630,  570, "Australia/Adelaide"),
	"test january +11:00 july +10:00" : makeCurrentZoneTest( 660,  600, "Australia/Sydney"),
	"test january +11:00 july +10:30" : makeCurrentZoneTest( 660,  630, "Australia/Lord_Howe"),
	"test january +11:00 july +11:00" : makeCurrentZoneTest( 660,  660, "Pacific/Noumea"),
	"test january +11:30 july +11:30" : makeCurrentZoneTest( 690,  690, "Pacific/Norfolk"),
	"test january +12:00 july +12:00" : makeCurrentZoneTest( 720,  720, "Pacific/Tarawa"),
	"test january +13:00 july +12:00" : makeCurrentZoneTest( 780,  720, "Pacific/Auckland"),
	"test january +13:00 july +13:00" : makeCurrentZoneTest( 780,  780, "Pacific/Tongatapu"),
	"test january +13:45 july +12:45" : makeCurrentZoneTest( 825,  765, "Pacific/Chatham"),
	"test january +14:00 july +13:00" : makeCurrentZoneTest( 840,  780, "Pacific/Apia"),
	"test january +14:00 july +14:00" : makeCurrentZoneTest( 840,  840, "Pacific/Kiritimati"),
	"test january -01:00 july +00:00" : makeCurrentZoneTest( -60,    0, "Atlantic/Azores"),
	"test january -01:00 july -01:00" : makeCurrentZoneTest( -60,  -60, "Atlantic/Cape_Verde"),
	"test january -02:00 july -02:00" : makeCurrentZoneTest(-120, -120, "America/Noronha"),
	"test january -02:00 july -03:00" : makeCurrentZoneTest(-120, -180, "America/Montevideo"),
	"test january -03:00 july -02:00" : makeCurrentZoneTest(-180, -120, "America/Godthab"),
	"test january -03:00 july -03:00" : makeCurrentZoneTest(-180, -180, "America/Santiago"),
	"test january -03:00 july -04:00" : makeCurrentZoneTest(-180, -240, "America/Campo_Grande"),
	"test january -03:30 july -02:30" : makeCurrentZoneTest(-210, -150, "America/St_Johns"),
	"test january -04:00 july -03:00" : makeCurrentZoneTest(-240, -180, "America/Halifax"),
	"test january -04:00 july -04:00" : makeCurrentZoneTest(-240, -240, "America/Santo_Domingo"),
	"test january -04:30 july -04:30" : makeCurrentZoneTest(-270, -270, "America/Caracas"),
	"test january -05:00 july -04:00" : makeCurrentZoneTest(-300, -240, "America/New_York"),
	"test january -05:00 july -05:00" : makeCurrentZoneTest(-300, -300, "Pacific/Easter"),
	"test january -06:00 july -05:00" : makeCurrentZoneTest(-360, -300, "America/Chicago"),
	"test january -06:00 july -06:00" : makeCurrentZoneTest(-360, -360, "America/Guatemala"),
	"test january -07:00 july -06:00" : makeCurrentZoneTest(-420, -360, "America/Denver"),
	"test january -07:00 july -07:00" : makeCurrentZoneTest(-420, -420, "America/Phoenix"),
	"test january -08:00 july -07:00" : makeCurrentZoneTest(-480, -420, "America/Los_Angeles"),
	"test january -08:00 july -08:00" : makeCurrentZoneTest(-480, -480, "Pacific/Pitcairn"),
	"test january -09:00 july -08:00" : makeCurrentZoneTest(-540, -480, "America/Anchorage"),
	"test january -09:00 july -09:00" : makeCurrentZoneTest(-540, -540, "Pacific/Gambier"),
	"test january -09:30 july -09:30" : makeCurrentZoneTest(-570, -570, "Pacific/Marquesas"),
	"test january -10:00 july -09:00" : makeCurrentZoneTest(-600, -540, "America/Adak"),
	"test january -10:00 july -10:00" : makeCurrentZoneTest(-600, -600, "Pacific/Honolulu"),
	"test january -11:00 july -11:00" : makeCurrentZoneTest(-660, -660, "Pacific/Pago_Pago")
};
