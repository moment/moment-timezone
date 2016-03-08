import unpack from '../unpack/unpack';

export default class Zone {
	constructor (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	_set (unpacked) {
		this.name       = unpacked.name;
		this.abbrs      = unpacked.abbrs;
		this.untils     = unpacked.untils;
		this.offsets    = unpacked.offsets;
		this.population = unpacked.population;
	}

	_index (timestamp) {
		const target = +timestamp;
		const untils = this.untils;

		for (let i = 0, l = untils.length; i < l; i++) {
			if (target < untils[i]) {
				return i;
			}
		}
	}

	parse (timestamp, config) {
		const target  = +timestamp;
		const offsets = this.offsets;
		const untils  = this.untils;
		const max     = untils.length - 1;

		for (let i = 0; i < max; i++) {
			let offset     = offsets[i];
			let offsetNext = offsets[i + 1];
			let offsetPrev = offsets[i ? i - 1 : i];

			if (offset < offsetNext && config && config.moveAmbiguousForward) {
				offset = offsetNext;
			} else if (offset > offsetPrev && config && config.moveInvalidForward) {
				offset = offsetPrev;
			}

			if (target < untils[i] - (offset * 60000)) {
				return offsets[i];
			}
		}

		return offsets[max];
	}

	abbr (mom) {
		return this.abbrs[this._index(mom)];
	}

	offset (mom) {
		return this.offsets[this._index(mom)];
	}
}
