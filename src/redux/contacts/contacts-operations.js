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

// АСИНХРОННЫЙ ВАРИАНТ
axios.defaults.baseURL = 'https://6311f9a119eb631f9d7cf75f.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('./contacts/');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());
  try {
    const { data } = await axios.delete(`./contacts/${id}`);
    dispatch(deleteContactsSuccess(data.id));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

export const addContacts =
  ({ phone, name }) =>
  async dispatch => {
    const contacts = { phone, name };
    dispatch(addContactsRequest());
    try {
      const { data } = await axios.post('./contacts', contacts);
      dispatch(addContactsSuccess(data));
    } catch (error) {
      dispatch(addContactsError(error));
    }
  };

// НЕ АСИНХРОННЫЙ ВАРИАНТ
// axios.defaults.baseURL = 'https://6311f9a119eb631f9d7cf75f.mockapi.io/';
// export const fetchContacts = () => dispatch => {
//   dispatch(fetchContactsRequest());

//   axios
//     .get('./contacts/')
//     .then(({ data }) => dispatch(fetchContactsSuccess(data)))
//     .catch(error => dispatch(fetchContactsError(error)));
// };

// export const deleteContacts = id => dispatch => {
//   dispatch(deleteContactsRequest());

//   axios
//     .delete(`./contacts/${id}`)
//     .then(() => dispatch(deleteContactsSuccess(id)))
//     .catch(error => dispatch(deleteContactsError(error)));
// };

// export const addContacts =
//   ({ phone, name }) =>
//   dispatch => {
//     const contacts = { phone, name };
//     dispatch(addContactsRequest());

//     axios
//       .post('./contacts', contacts)
//       .then(({ data }) => dispatch(addContactsSuccess(data)))
//       .catch(error => dispatch(addContactsError(error)));
//   };
