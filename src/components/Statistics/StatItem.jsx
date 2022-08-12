import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatItem = ({ label, percentage }) => {
  return (
    <li className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatItem;

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
