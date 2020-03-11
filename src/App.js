import React from "react";
import { connect } from "react-redux";
import Tabs from "./components/tabs";

const App = props => {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Bills">
          {props.bills.map(bill => (
            <div>{bill.name}</div>
          ))}
        </div>
        <div label="Potential Bills">
          {props.potentialBills.map(bill => (
            <div>{bill.name}</div>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
