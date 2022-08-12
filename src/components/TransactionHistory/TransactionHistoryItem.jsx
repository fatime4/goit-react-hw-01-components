import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={s.text}>{type}</td>
      <td className={s.text}>{amount}</td>
      <td className={s.text}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
