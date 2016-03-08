import areZonesEqual from './are-zones-equal';

export default function findAndCreateLinks (input, output, links) {
	const groups = [];

	for (let i = 0; i < input.length; i++) {
		let foundGroup = false;
		let a = input[i];

		for (let j = 0; j < groups.length; j++) {
			let group = groups[j];
			let b = group[0];
			if (areZonesEqual(a, b)) {
				if (a.population > b.population) {
					group.unshift(a);
				} else {
					group.push(a);
				}
				foundGroup = true;
			}
		}

		if (!foundGroup) {
			groups.push([a]);
		}
	}

	for (let i = 0; i < groups.length; i++) {
		let group = groups[i];
		output.push(group[0]);
		for (let j = 1; j < group.length; j++) {
			links.push(group[0].name + '|' + group[j].name);
		}
	}
}
