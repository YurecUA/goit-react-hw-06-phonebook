import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../redux/contacts/contacts-action';
import s from './Filter.module.css';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = e => dispatch(actions.addFilter(e.currentTarget.value));

  return (
    <label htmlFor="search" className={s.Search__box}>
      <p className={s.search__label}>Find contacts by name:</p>
      <input
        className={s.search__input}
        type="search"
        name="search"
        id="search"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Filter;
