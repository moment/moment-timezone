import test from 'ava';
import attachPrototypeWrappers from '../../src/moment/attach-prototype-wrappers';

test('moment#zoneName', t => {
	const fakePrototype = {
		zoneName: function () {
			return 'fallback';
		}
	};

	const fakeInstance = {
		_z: {
			abbr: function (context) {
				t.is(context, fakeInstance);
				return 'faked';
			}
		}
	};

	attachPrototypeWrappers(fakePrototype);

	t.is(fakePrototype.zoneName.call(fakeInstance), 'faked');
	t.is(fakePrototype.zoneName.call({}), 'fallback');
});

test('moment#zoneAbbr', t => {
	const fakePrototype = {
		zoneAbbr: function () {
			return 'fallback';
		}
	};

	const fakeInstance = {
		_z: {
			abbr: function (context) {
				t.is(context, fakeInstance);
				return 'faked';
			}
		}
	};

	attachPrototypeWrappers(fakePrototype);

	t.is(fakePrototype.zoneAbbr.call(fakeInstance), 'faked');
	t.is(fakePrototype.zoneAbbr.call({}), 'fallback');
});


test('moment#utc', t => {
	const fakePrototype = {
		utc: function (arg) {
			return 'fallback ' + arg;
		}
	};

	const fakeInstance = {
		_z: true
	};

	attachPrototypeWrappers(fakePrototype);

	t.is(fakePrototype.utc.call(fakeInstance), 'fallback undefined');
	t.is(fakeInstance._z, null);

	t.is(fakePrototype.utc.call({}, true), 'fallback true');
});
