import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart/index.js";
import Home from "./pages/Home/index.js";

export default function RoutesApp() {
	return (
		<Routes>
			<Route path="/cart" exact element={<Cart />} />
			<Route path="/" exact element={<Home />} />
		</Routes>
	);
}
