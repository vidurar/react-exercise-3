import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BillItem = styled.div`
  margin: 8px 8px;
`;

const Button = styled.button`
  margin-left: 8px;
  margin-bottom: 16px;
`;

const TransactionInformation = styled.div`
  font-style: italic;
  font-size: 0.8em;
`;

const Bill = props => {
  const [transactionsVisible, setTransactionsVisible] = useState(false);
  return (
    <React.Fragment>
      <BillItem
        label="Bills"
        onClick={() => setTransactionsVisible(!transactionsVisible)}
      >
        <div>{props.name}</div>
        {transactionsVisible ? (
          props.transactions.map((transaction, index) => (
            <TransactionInformation>{`${index + 1}. Amount: ${
              transaction.amount
            } | Date: ${transaction.date}`}</TransactionInformation>
          ))
        ) : (
          <TransactionInformation>
            {props.transactions.length} transactions
          </TransactionInformation>
        )}
      </BillItem>
      <Button onClick={props.onButtonClick}>{`${
        props.isBill ? "Remove" : "Add"
      } Bill`}</Button>
    </React.Fragment>
  );
};

Bill.displayName = "Bill";
Bill.propTypes = {
  name: PropTypes.string.isRequired
};

export default Bill;
