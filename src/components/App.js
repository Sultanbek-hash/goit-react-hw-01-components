import data from '../path/data.json';
import { Statistics } from './datalist/datalist';
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
      </>
  );
};
export const App2 = () =>{
  return (
    <>
       <Statistics title="Upload stats" stats={data} />
    </>
  )
}

export const App3 = () =>{
  return (
    <>
    <FriendList friends={friends}/>
    </>
  )
}
export const App4 = () =>{
  return (
    <>
    <TransactionHistory  items={transactions}/>
    </>
  )
}
