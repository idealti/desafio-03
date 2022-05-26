import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "./components/Cart/index.js";
// import Home from "./pages/Home";

export default function RoutesApp() {
	return (
		<Routes>
			{/* <Route path="/" exact component={Home} /> */}
			<Route path="/cart" component={Cart} />
		</Routes>
	);
}
