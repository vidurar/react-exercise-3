import React from "react";
import { connect } from "react-redux";
import { addBill, removeBill } from "./redux/actions";
import Tabs from "./components/tabs";
import Bill from "./components/bill";

const App = props => {
  return (
    <div>
      <h1>Cleo</h1>
      <Tabs>
        <div label="Bills">
          {props.bills.map(bill => (
            <Bill
              name={bill.name}
              transactions={bill.transactions}
              isBill={bill.isBill}
              key={bill.id}
              onButtonClick={() => props.removeBill(bill.id)}
            />
          ))}
        </div>
        <div label="Potential Bills">
          {props.potentialBills.map(bill => (
            <Bill
              name={bill.name}
              transactions={bill.transactions}
              isBill={bill.isBill}
              key={bill.id}
              onButtonClick={() => props.addBill(bill.id)}
            />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    addBill: billId => dispatch(addBill(billId, true)),
    removeBill: billId => dispatch(removeBill(billId, false))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
