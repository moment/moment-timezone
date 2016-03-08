const parent = (typeof window !== 'undefined' && window) || (typeof global !== 'undefined' && global);
const oldIntl = parent.Intl;

export function resetIntl () {
	parent.Intl = oldIntl;
}

export function mockIntl (newIntl) {
	parent.Intl = newIntl;
}

export function mockIntlTimeZone (name) {
	mockIntl({
		DateTimeFormat: function () {
			return {
				resolvedOptions: function () {
					return {
						timeZone: name
					};
				}
			};
		}
	});
}
