import { toast } from "react-toastify";
import { call, select, put, all, takeLatest } from "redux-saga/effects"; // Chamar métodos assíncronos e retorna promises.

import api from "../../../services/api.js";
import { formatPrice } from "../../../util/format.js";
import { addToCartSuccess, updateAmountSuccess } from "./actions.js";

function* addToCart({ id }) {
	// Verifica se já não tem um produto no carrinho.
	const productExists = yield select((state) =>
		state.cart.find((productCart) => productCart.id === id)
	);

	// Consulta o stock, para verificar se ainda tem produto disponível para venda.
	const stock = yield call(api.get, `/stock/${id}`);
	const stockAmount = stock.data.amount;
	const currentAmount = productExists ? productExists.amount : 0; // Verifica a quantidade que já tem no carrinho.
	const amount = currentAmount + 1;

	// Verifica se ainda existe o produto no estoque.
	if (amount > stockAmount) {
		toast.error("Infelizmente não temos mais esse produto em estoque.");
		return;
	}

	if (productExists) {
		yield put(updateAmountSuccess(id, amount));
	} else {
		const response = yield call(api.get, `/products/${id}`);

		const data = {
			...response.data,
			amount: 1,
			priceFormatted: formatPrice(response.data.price),
		};

		yield put(addToCartSuccess(data)); // Dispara o Saga fazendo a chamada a API, chamando o 'success' e cadastra o produto no carrinho.
	}
}

function* updateAmount({ id, amount }) {
	if (amount <= 0) return;

	const stock = yield call(api.get, `stock/${id}`);
	const stockAmount = stock.data.amount;

	if (amount > stockAmount) {
		toast.error("Infelizmente não temos mais esse produto em estoque.");
		return;
	}

	yield put(updateAmountSuccess(id, amount));
}

// Quando uma action for disparada, aciona essa ação.
export default all([
	takeLatest("@cart/ADD_REQUEST", addToCart),
	takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
]);

/*
	Anotações:

	* = generator = async.
	yield = await -- Aguarda a execução e depois continua o restante do código.
	takeLatest = Saga evita que o usuário execute uma ação duas vezes seguidas, antes de completar a primeira.

*/
