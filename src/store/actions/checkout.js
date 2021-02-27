import { CHECKOUT_BOOKING } from "../types";
import axios from "configs/axios";

// checkout booking nerima params payload, langsung jalankan dispatch lewat midleware redux thunk, dispatch lewatin object
export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(`/booking-page`, payload, {
    headers: {
      contentType: "multipart/form-data",
    },
  });
};
