import axios from "axios";
import { waiters } from "../mocks/data";

const initialState = {
  waitersList: {},
  cooksList: {},
};

//types
const GET_WAITERS = "GET_WAITERS";
const GET_COOKS = "GET_COOKS";

//reducer
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WAITERS:
      return {...state, waitersList: action.payload}
    case GET_COOKS:
      return {...state, cooksList: action.payload}
    default:
      return state
  }
};

//actions
export const getWaiters = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:8080/GetWaiters");
    dispatch({
      type: GET_WAITERS,
      payload: res.data[0]
    })
  } catch (error) {
    console.error(error)
  }
}

export const getCooks = () => async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:8080/GetCooks");
    dispatch({
      type: GET_COOKS,
      payload: res.data[0]
    })
  } catch (error) {
    console.error(error)
  }
}

