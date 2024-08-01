import { FriendListItem } from '../FriendListItem/FriendListItem';
import s from '../FriendsList/FriendList.module.css';
import clsx from 'clsx';

export function FriendList({friends}) {
  return (
    <ul className={clsx(s.wrapper)}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
