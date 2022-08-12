import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';
import items from '../database/transactions.json';

const App = () => {
  return (
    <div>
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

export default App;
