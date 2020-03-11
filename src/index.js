import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import billList from "./redux/reducers";
import "./index.scss";
import { loadBillList } from "./redux/actions";
import rootSaga from "./redux/sagas";
import App from "./App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(billList, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
store.dispatch(loadBillList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
