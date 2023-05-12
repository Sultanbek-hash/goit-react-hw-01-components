import data from '../path/data.json';
import { Statistics } from './Statistics/Statistics';
import user from '../path/user.json';
import { Profile } from './profile/profile';
import friends from '../path/friends.json';
import { FriendList } from './FriendList/FriendList';
import transactions from '../path/transactions.json';
import { TransactionHistory } from './transactionhistory/transactionfile';

export const App = () => {
  return (
      <>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
       /> 
       <Statistics stats={data} />
       <FriendList friends={friends}/>
       <TransactionHistory  items={transactions}/>
      </>
  );
};
