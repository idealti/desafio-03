// Junta todos os Sagas num único arquivo.

import { all } from "redux-saga/effects";

import cart from "./cart/sagas.js";

export default function* rootSaga() {
	return yield all([cart]);
}

/*

	# Anotações:

	* = generator = async.
	yield = await -- Aguarda a execução e depois continua o restante do código.

*/
