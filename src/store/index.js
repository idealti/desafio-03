import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer.js";
import rootSaga from "./modules/rootSaga.js";

const sagaMonitor =
	process.env.NODE_ENV === "development"
		? console.tron.createSagaMonitor()
		: null;

const sagaMiddleware = createSagaMiddleware({
	sagaMonitor,
});

const enhancer =
	process.env.NODE_ENV === "development"
		? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware)) // Apenas para ambiente de desenvolvimento.
		: applyMiddleware(sagaMiddleware); // Apenas para ambiente de produção.

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
