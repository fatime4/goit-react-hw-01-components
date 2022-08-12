import React from 'react';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={
          isOnline === true
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
