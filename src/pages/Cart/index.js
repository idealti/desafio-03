import React from "react";
import {
	MdRemoveCircleOutline,
	MdAddCircleOutline,
	MdDelete,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as CartActions from "../../store/modules/cart/actions.js";
import MainBase from "../../styles/main/styles-main.js";
import { formatPrice } from "../../util/format.js";
import { Container, ProductTable, Total } from "./styles.js";

export default function Cart() {
	const total = useSelector((baseState) =>
		formatPrice(
			baseState.cart.reduce((totalSum, product) => {
				return totalSum + product.price * product.amount;
			}, 0) // Inicia com o valor 'zero' no total das compras.
		)
	);

	const cart = useSelector((baseState) =>
		baseState.cart.map((product) => ({
			...product,
			subtotal: formatPrice(product.price * product.amount),
		}))
	);

	// Dispara as actions. **Colocar toda vez que for uma action do Redux.
	const dispatch = useDispatch();

	// Adiciona produto ao carrinho.
	function increment(product) {
		dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
	}

	// subtrai produto do carrinho.
	function decrement(product) {
		dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
	}

	return (
		<MainBase>
			<Container>
				<ProductTable>
					<thead>
						<tr>
							<th>PRODUTO</th>
							<th>QTD</th>
							<th>SUBTOTAL</th>
						</tr>
					</thead>

					<tbody>
						{cart.map((product) => (
							<tr>
								<td>
									{/* PRODUTO - Imagem do produto. */}
									<img src={product.image} alt={product.title} />
								</td>

								<td>
									{/* QUANTIDADE - Descrição e valor do produto. */}
									<strong>{product.title}</strong>
									<span>{product.priceFormatted}</span>
								</td>

								<td>
									<div>
										{/* Botão de adicionar ou subtrair itens. */}
										<button
											type="button"
											onClick={() => decrement(product)}
										>
											<MdRemoveCircleOutline
												size={20}
												color="#7159c1"
											/>
										</button>
										<input
											type="number"
											value={product.amount}
											readOnly
										/>
										<button
											type="button"
											onClick={() => increment(product)}
										>
											<MdAddCircleOutline
												size={20}
												color="#7159c1"
											/>
										</button>
									</div>
								</td>

								<td>
									{/* SUBTOTAL */}
									<strong>{product.subtotal}</strong>
								</td>

								<td>
									{/* Botão de delete. */}
									<button
										type="button"
										onClick={() =>
											dispatch(
												CartActions.removeFromCart(product.id)
											)
										}
									>
										<MdDelete size={20} color="#7159c1" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</ProductTable>

				<footer>
					<button type="button">Finalizar pedido</button>
					<Link to="/">
						<button type="button" className="btnVoltar">
							Voltar
						</button>
					</Link>

					{/* Valor total da compra. */}
					<Total>
						<span>TOTAL</span>
						<strong>{total}</strong>
					</Total>
				</footer>
			</Container>
		</MainBase>
	);
}
