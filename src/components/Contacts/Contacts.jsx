import React from 'react';
import { FaTrash, FaAddressCard } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './Contacts.module.css';
import actions from '../../redux/contacts/contacts-action';
import { filteredContacts } from '../../redux/contacts/contacts-selectors';

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  const listClasses = classNames({
    [styles.list]: true,
    'list-border': contacts.length,
  });

  return (
    <div className={listClasses}>
      <ul className={styles.list__ul}>
        {contacts.map(person => (
          <motion.li
            initial="hidden"
            animate="visible"
            variants={variants}
            key={person.id}
            className={styles.search__contact}
          >
            <IconContext.Provider
              value={{
                color: 'black',
                size: '1.6em',
                className: 'react-icons',
              }}
            >
              <FaAddressCard
                onClick={() => dispatch(actions.deleteContact(person.id))}
              />
            </IconContext.Provider>
            <p className={styles.search__text}>
              {person.name} : {person.number}
            </p>
            <div className={styles.trash}>
              <IconContext.Provider
                value={{
                  color: 'red',
                  size: '1.1em',
                  className: 'react-icons',
                }}
              >
                <FaTrash
                  onClick={() => dispatch(actions.deleteContact(person.id))}
                />
              </IconContext.Provider>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
