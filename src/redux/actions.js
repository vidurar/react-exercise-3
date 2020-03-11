import {
  REMOVE_BILL,
  ADD_BILL,
  LOAD_BILL_LIST,
  RENDER_BILL_LIST
} from "./constants";

export function removeBill(billId, isBill) {
  return {
    type: REMOVE_BILL,
    billId,
    isBill
  };
}

export function addBill(billId, isBill) {
  return {
    type: ADD_BILL,
    billId,
    isBill
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
