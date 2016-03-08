import guessFromIntl from './guess-from-intl';
import guessFromUserOffsets from './guess-from-user-offsets';

export default function memoizeGuess (db) {
	let cachedGuess;
	return function guess (ignoreCache) {
		if (!cachedGuess || ignoreCache) {
			cachedGuess = guessFromIntl(db) || guessFromUserOffsets(db);
		}
		return cachedGuess;
	};
}
