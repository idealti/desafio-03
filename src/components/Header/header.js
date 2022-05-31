import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";

import { Logo, HeaderBase } from "../../styles/header/styles-header.js";
import { Container, Cart } from "./styles-header-cart.js";

export default function Header() {
	// Tamanho do array do carrinho.
	const cartSize = useSelector((baseState) => baseState.cart.length);
	return (
		<HeaderBase>
			<Logo to="/">LADA</Logo>

			<Container>
				<Cart to="/cart">
					<div>
						<strong>Meu carrinho</strong>
						<span>{cartSize} itens</span>
					</div>
					<MdShoppingBasket size={36} color="#593E3E" />
				</Cart>
			</Container>
		</HeaderBase>
	);
}
