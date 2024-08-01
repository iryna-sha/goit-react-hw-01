import { Profile } from './Profile/Profile';
import userData from '../userData.json';

import { FriendList } from './FriendsList/FriendsList';
import friends from '../friends.json';

import { Transactions } from './Transactions/Transactions';
import transactions from '../transactions.json';
import '../style.css';

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <Transactions items={transactions}  />
    </>
  );
}
