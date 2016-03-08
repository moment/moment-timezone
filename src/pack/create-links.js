import findAndCreateLinks from './find-and-create-links';

export default function createLinks (source) {
	const zones = [];
	const links = source.links ? source.links.slice() : [];

	findAndCreateLinks(source.zones, zones, links);

	return {
		version : source.version,
		zones   : zones,
		links   : links.sort()
	};
}
