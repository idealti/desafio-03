import produce from "immer";

export default function cart(baseState = [], action) {
	switch (action.type) {
		// Adiciona o produto ao carrinho.
		case "@cart/ADD_SUCCESS":
			return produce(baseState, (draftState) => {
				const { product } = action;

				draftState.push(product);
			});

		// Remove o produto do carrinho.
		case "@cart/REMOVE":
			return produce(baseState, (draftState) => {
				const productIndex = draftState.findIndex(
					(productCart) => productCart.id === action.id
				);

				if (productIndex >= 0) {
					draftState.splice(productIndex, 1);
				}
			});

		// Adiciona ou subtrai itens.
		case "@cart/UPDATE_AMOUNT_SUCCESS": {
			return produce(baseState, (draftState) => {
				const productIndex = draftState.findIndex(
					(productCart) => productCart.id === action.id
				);

				if (productIndex >= 0) {
					draftState[productIndex].amount = Number(action.amount);
				}
			});
		}
		default:
			return baseState;
	}
}
