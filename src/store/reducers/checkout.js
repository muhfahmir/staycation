import { CHECKOUT_BOOKING } from "../types";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return action.payload; // untuk menyimpan ke store
    default:
      return state;
  }
}
