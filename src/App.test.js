import React from "react";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { bills } from "../db.json";

const sagaMiddleware = createSagaMiddleware();

const mockStore = configureStore([sagaMiddleware]);

describe("Bills List", () => {
  let store;
  let rendered;

  beforeEach(async () => {
    store = mockStore({
      bills: bills.filter(bill => bill.isBill),
      potentialBills: bills.filter(bill => !bill.isBill),
      isLoading: false
    });
    rendered = await render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("should render app without crashing", () => {
    expect(rendered.getByText("Cleo")).toBeInTheDocument();
  });

  it("should render bills in first tab", () => {
    store
      .getState()
      .bills.map(bill =>
        expect(rendered.getByText(bill.name)).toBeInTheDocument()
      );
  });

  it("should render number of transactions of each bill", () => {
    store
      .getState()
      .bills.map(bill =>
        expect(
          rendered.getAllByText(`${bill.transactions.length} transactions`)[0]
        ).toBeInTheDocument()
      );
  });

  it("should render transaction details when clicking on bill", () => {
    const bill = bills[0];
    fireEvent.click(rendered.getByText(bill.name));

    expect(
      rendered.getByText("1. Amount: 12.34 | Date: 2018-01-13")
    ).toBeInTheDocument();
  });

  it("should render potential bills in second tab", () => {
    fireEvent.click(rendered.getByText("Potential Bills"));

    store
      .getState()
      .potentialBills.map(bill =>
        expect(rendered.getByText(bill.name)).toBeInTheDocument()
      );
  });
});
