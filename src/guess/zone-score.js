export default class ZoneScore {
	constructor (zone) {
		this.zone = zone;
		this.offsetScore = 0;
		this.abbrScore = 0;
	}

	scoreOffsetAt (offsetAt) {
		this.offsetScore += Math.abs(this.zone.offset(offsetAt.at) - offsetAt.offset);
		this.abbrScore   += this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr;
	}
}
