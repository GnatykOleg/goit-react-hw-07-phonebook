import axios from 'axios';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://6311f9a119eb631f9d7cf75f.mockapi.io/';

export const addContacts =
  ({ phone, name }) =>
  dispatch => {
    const contacts = { phone, name };
    dispatch(addContactsRequest());

    axios
      .post('./contacts', contacts)
      .then(({ data }) => dispatch(addContactsSuccess(data)))
      .catch(error => dispatch(addContactsError(error)));
  };

export const deleteContacts = id => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`./contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error)));
};

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('./contacts/')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};
