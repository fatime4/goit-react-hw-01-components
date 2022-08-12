import React from 'react';
import s from './Statistics.module.css';
import StatItem from './StatItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ id, ...props }) => (
    <StatItem key={id} {...props} />
  ));
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}
      <ul className={s.statList}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
