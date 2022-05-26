import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";

import {
	Logo,
	HeaderBase,
	HeaderMenu,
} from "../../styles/header/styles-header.js";
import { Container, Cart } from "../Cart/styles.js";
// import { Link } from "react-router-dom";

// import Button from "../Button/button.js";

export default function Header() {
	// Tamanho do array do carrinho.
	const cartSize = useSelector((baseState) => baseState.cart.length);
	return (
		<HeaderBase>
			<Logo>LADA</Logo>
			<HeaderMenu>
				<Container>
					{/* <Link to="/">
					<img src={logo} alt="Logo Hermes" />
				</Link> */}

					<Cart to="/cart">
						<div>
							<strong>Meu carrinho</strong>
							<span>{cartSize} itens</span>
						</div>
						<MdShoppingBasket size={36} color="#fff" />
					</Cart>
				</Container>
			</HeaderMenu>
		</HeaderBase>
	);
}
