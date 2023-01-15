import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';

import s from './Form.module.css';
import actions from '../../redux/contacts/contacts-action';
import { getItems } from '../../redux/contacts/contacts-selectors';
import 'react-phone-input-2/lib/style.css';

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

function Form() {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const onSubmit = (name, number) => dispatch(actions.addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = useRef(uuidv4());

  const handleInputChange = event => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const handlePhoneInput = phone => setNumber(phone);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const validateContact = (contactName, contacts) => {
    if (contacts.some(({ name }) => name === contactName)) {
      alert(`${contactName} is already in contacts.`);
      return false;
    } else return true;
  };

  // для получения данных из формы в App.js во время сабмита
  // использую метод с поднятием состояния в родитель
  const handleSubmit = e => {
    e.preventDefault();
    const isContactValid = validateContact(name, contacts);

    if (isContactValid) {
      onSubmit(name, number);
      reset();
    }
  };

  return (
    <div className={s.container}>
      <motion.form
        initial="hidden"
        animate="visible"
        variants={variants}
        className={s.form}
        onSubmit={handleSubmit}
      >
        <label htmlFor={nameId.current}>
          <p className={s.form__label}>Name</p>
          <input
            type="text"
            name="name"
            className={s.form__firstInput}
            value={name}
            onChange={handleInputChange}
            id={nameId.current}
            placeholder="Enter name"
            required
          />
        </label>
        <label className={s.phoneLabel}>
          <p className={s.form__label}>Number</p>
          <PhoneInput
            name="number"
            value={number}
            onChange={handlePhoneInput}
            country={'ua'}
            placeholder="+38068-555-55-55"
            enableSearch={true}
            disableSearchIcon={true}
            containerClass={s.phoneContainer}
            buttonClass={s.phoneButton}
            inputClass={s.phoneInput}
          />
        </label>
        <div className={s.submit__box}>
          <button
            className={s.form__button}
            type="submit"
            disabled={name === '' || number === ''}
          >
            Add contact
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default Form;
