export default function stub (object, method, returns) {
	object[method] = function (...args) {
		object[method + 'Args'] = args;
		return returns;
	};
	return object;
}
