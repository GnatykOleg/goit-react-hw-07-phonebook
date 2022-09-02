import { Form, Contacts, Filter } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitData = ({ name, phone }) => {
    const newContactName = name.toLowerCase();

    if (contacts.some(({ name }) => name.toLowerCase() === newContactName)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts({ name, phone }));
    }
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div className="appDiv">
      <h1>Phonebook</h1>
      <Form formSubmitData={formSubmitData} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts data={filteredContacts} />
    </div>
  );
}
