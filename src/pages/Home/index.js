import React, { useState, useEffect } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import api from "../../services/api.js";
import * as CartActions from "../../store/modules/cart/actions.js";
import MainBase from "../../styles/main/styles-main.js";
import { formatPrice } from "../../util/format.js";
import { ProductList } from "./styles.js";

export default function Home() {
	const [products, setProducts] = useState([]);

	const amount = useSelector((baseState) =>
		baseState.cart.reduce((sumAmount, product) => {
			sumAmount[product.id] = product.amount;

			return sumAmount;
		}, {})
	);

	// Dispara as actions. **Colocar toda vez que for uma action do Redux.
	const dispatch = useDispatch();

	useEffect(() => {
		async function loadProducts() {
			const response = await api.get("products");

			const data = response.data.map((product) => ({
				...product,
				priceFormatted: formatPrice(product.price),
			}));

			setProducts(data);
		}

		loadProducts();
	}, []); // Array vazio para executar apenas uma vez quando o componente for montado.

	function handleAddProduct(id) {
		dispatch(CartActions.addToCartRequest(id));
	}
	return (
		<MainBase>
			<ProductList>
				{products.map((product) => (
					<li key={product.id}>
						<img src={product.image} alt={product.title} />

						<strong>{product.title}</strong>
						<span>{product.priceFormatted}</span>

						<button
							type="button"
							onClick={() => handleAddProduct(product.id)}
						>
							<div>
								{/* Quantidade do mesmo produto -- Adicionar ao carrinho.  */}
								<MdShoppingCart size={17} color="#fff" />{" "}
								{amount[product.id] || 0}
							</div>

							<span>Adicionar ao carrinho</span>
						</button>
					</li>
				))}
			</ProductList>
		</MainBase>
	);
}
