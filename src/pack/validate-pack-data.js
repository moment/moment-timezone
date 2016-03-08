export default function validatePackData (source) {
	if (!source.name)    { throw new Error("Missing name"); }
	if (!source.abbrs)   { throw new Error("Missing abbrs"); }
	if (!source.untils)  { throw new Error("Missing untils"); }
	if (!source.offsets) { throw new Error("Missing offsets"); }
	if (
		source.offsets.length !== source.untils.length ||
		source.offsets.length !== source.abbrs.length
	) {
		throw new Error("Mismatched array lengths");
	}
}
