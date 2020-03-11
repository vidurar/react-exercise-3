import { all, call, put, takeEvery } from "redux-saga/effects";
import { APIConstants } from "../shared/constants";
import { LOAD_BILL_LIST, RENDER_BILL_LIST } from "./constants";
import axios from "axios";

const fetchFromAPI = payload => axios.get(`${APIConstants.base}${payload}`);

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

export default function* rootSaga() {
  yield all([loadBillList()]);
}
