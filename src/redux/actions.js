import {
  REMOVE_BILL,
  ADD_BILL,
  LOAD_BILL_LIST,
  RENDER_BILL_LIST
} from "./constants";

export function removeBill(billId) {
  return {
    type: REMOVE_BILL,
    billId
  };
}

export function addBill(billId) {
  return {
    type: ADD_BILL,
    billId
  };
}
export function loadBillList(isLoading) {
  return {
    type: LOAD_BILL_LIST,
    isLoading
  };
}
export function renderBillList(billList) {
  return {
    type: RENDER_BILL_LIST,
    billList
  };
}
