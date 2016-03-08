import logError from '../utils/log-error';

export default function attachPrototypeTz (moment, db) {
	moment.fn.tz = function (name) {
		if (name) {
			this._z = db.getZone(name);
			if (this._z) {
				moment.updateOffset(this);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		return this._z && this._z.name;
	};
}
