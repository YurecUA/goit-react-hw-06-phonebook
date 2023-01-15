import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import s from './Section.module.css';

const variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Section = ({ title, children }) => (
  <section className={s.container}>
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={variants}
      className={s.container__title}
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
