import React from 'react';
import s from './FriendList.module.css';
import FriendsListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, ...props }) => (
    <FriendsListItem key={id} {...props} />
  ));
  return <ul className={s.friendsList}>{elements}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
