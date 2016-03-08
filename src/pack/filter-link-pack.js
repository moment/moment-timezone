import createLinks from './create-links';
import filterYears from './filter-years';
import pack from './pack';

export default function filterLinkPack (input, start, end) {
	const inputZones = input.zones;
	const outputZones = [];

	for (let i = 0; i < inputZones.length; i++) {
		outputZones[i] = filterYears(inputZones[i], start, end);
	}

	const output = createLinks({
		zones : outputZones,
		links : input.links.slice(),
		version : input.version
	});

	for (let i = 0; i < output.zones.length; i++) {
		output.zones[i] = pack(output.zones[i]);
	}

	return output;
}
