import { Profile } from './Profile-components/profile';
import { Statistics } from './Statistics-component/statictics';
import { FriendList } from './FriendList-component/frindList';
import { TransactionHistory } from './Transaction-history/transaction-history';
import userData from '../data/user.json';
import statisticksData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactinsData from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile users={userData} />
      <Statistics title="Upload stats" stats={statisticksData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactinsData} />
    </>
  );
};
