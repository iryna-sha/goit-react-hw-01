import s from './FriendListItem.module.css';
import clsx from 'clsx';
export function FriendListItem({ name = 'user', avatar, isOnline }) {
  return (
    <li className={clsx(s.card)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(s.title)}>{name}</p>

      {/* <p>{isOnline && 'online'}{!isOnline && 'offline'}</p> */}
      <p
        className={clsx(
          s.isOnline,
          isOnline === true ? s.isOnline : s.isOffline
        )}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}
