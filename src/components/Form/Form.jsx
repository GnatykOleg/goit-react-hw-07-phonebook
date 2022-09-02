import { useState } from 'react';
import s from './Form.module.css';
import PropTypes from 'prop-types';

export default function Form({ formSubmitData }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    formSubmitData({ name, phone });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <label htmlFor="name">
        Name
        <input
          className={s.inputName}
          id="name"
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="phone">
        Number
        <input
          className={s.inputNumber}
          id="phone"
          onChange={handleInputChange}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

Form.propTypes = {
  formSubmitData: PropTypes.func.isRequired,
};
