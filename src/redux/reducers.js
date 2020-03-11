import {
  REMOVE_BILL,
  ADD_BILL,
  LOAD_BILL_LIST,
  RENDER_BILL_LIST
} from "./constants";

const initialState = {
  bills: [],
  potentialBills: [],
  isLoading: true
};

export default function billList(state = initialState, action) {
  switch (action.type) {
    case REMOVE_BILL:
      return {
        ...state,
        isLoading: true
      };
    case ADD_BILL:
      return {
        ...state,
        isLoading: true
      };
    case LOAD_BILL_LIST:
      return {
        ...state,
        isLoading: true
      };
    case RENDER_BILL_LIST:
      console.log("ACTION", action);
      return {
        ...state,
        bills: action.bills,
        potentialBills: action.potentialBills,
        isLoading: false
      };
    default:
      return state;
  }
}
