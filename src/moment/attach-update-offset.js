import needsOffset from './needs-offset';

function updateOffsetFromZone (instance, zone, keepTime) {
	let offset = zone.offset(instance);

	if (Math.abs(offset) < 16) {
		offset = offset / 60;
	}

	if (instance.utcOffset !== undefined) {
		instance.utcOffset(-offset, keepTime);
	} else {
		instance.zone(offset, keepTime);
	}
}

function setZoneFromDefaultZone (instance, moment) {
	const zone = moment.defaultZone;

	if (zone && needsOffset(instance) && !instance._isUTC) {
		instance._d = moment.utc(instance._a)._d;
		instance.utc().add(zone.parse(instance), 'minutes');
	}

	instance._z = zone;
}

export default function attachUpdateOffset (moment) {
	moment.updateOffset = function (instance, keepTime) {
		if (instance._z === undefined) {
			setZoneFromDefaultZone(instance, moment);
		}

		if (instance._z) {
			updateOffsetFromZone(instance, instance._z, keepTime);
		}
	};
}
