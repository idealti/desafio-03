import React from "react";
import { Switch, Route } from "react-router-dom";

import Cart from "./components/Cart/index.js";
import Main from "./components/Main/main.js";

export default function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/cart" component={Cart} />
		</Switch>
	);
}
