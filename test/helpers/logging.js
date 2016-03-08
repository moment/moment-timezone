const globalConsole = (typeof console !== 'undefined' && console) || {};
const oldConsoleError = globalConsole.error;

let errors;

export function pauseErrors () {
	errors = [];
	globalConsole.error = function (message) {
		errors.push(message);
	};
}

export function resumeErrors () {
	let out = errors;
	errors = [];
	globalConsole.error = oldConsoleError;
	return out;
}
