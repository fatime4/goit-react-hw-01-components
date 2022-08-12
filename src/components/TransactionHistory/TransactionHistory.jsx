import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th className={s.titleText}>Type</th>
          <th className={s.titleText}>Amount</th>
          <th className={s.titleText}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(({ id, ...props }) => (
          <TransactionHistoryItem key={id} {...props} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.defaultProps = [];

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
