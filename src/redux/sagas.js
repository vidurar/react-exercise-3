import { all, call, put, takeEvery } from "redux-saga/effects";
import { APIConstants } from "../shared/constants";
import {
  LOAD_BILL_LIST,
  RENDER_BILL_LIST,
  ADD_BILL,
  REMOVE_BILL
} from "./constants";
import axios from "axios";

const fetchFromAPI = url => axios.get(`${APIConstants.base}${url}`);
const patchAPI = (url, payload) =>
  axios.patch(`${APIConstants.base}${url}`, payload);

export function* fetchBillList() {
  try {
    const billsResponse = yield call(fetchFromAPI, "bills?isBill=true");
    const potentialBillsResponse = yield call(
      fetchFromAPI,
      "bills?isBill=false"
    );

    yield put({
      type: RENDER_BILL_LIST,
      bills: billsResponse.data,
      potentialBills: potentialBillsResponse.data
    });
  } catch (error) {
    yield put({
      type: RENDER_BILL_LIST,
      bills: [],
      potentialBills: [],
      error
    });
  }
}

export function* loadBillList() {
  yield takeEvery(LOAD_BILL_LIST, fetchBillList);
}

export function* patchAndFetchBills({ billId, isBill }) {
  try {
    yield call(patchAPI, `bills/${billId}`, {
      isBill
    });
    yield fetchBillList();
  } catch (error) {
    yield put({
      type: RENDER_BILL_LIST,
      bills: [],
      potentialBills: [],
      error
    });
  }
}

export function* removeBill() {
  yield takeEvery(REMOVE_BILL, patchAndFetchBills);
}

export function* addBill() {
  yield takeEvery(ADD_BILL, patchAndFetchBills);
}

export default function* rootSaga() {
  yield all([loadBillList(), addBill(), removeBill()]);
}
