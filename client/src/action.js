import axios from "axios";
import {GET_CONTACTS} from './actionTypes'

export const getcontacts = () => dispatch => {
  axios.get("/contact-list").then(res =>
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    })
  );
};

export const addContact = conatct => dispatch => {
  axios.post("/contact-list", conatct).then(res => dispatch(getcontacts()));
};

export const deleteContact = id => dispatch => {
  axios.delete(`/contact-list/${id}`).then(res => dispatch(getcontacts()));
};

export const updateContact = (id, contact) => dispatch => {
  axios
    .put(`/contact-list/${id}`, contact)
    .then(res => dispatch(getcontacts()));
};


