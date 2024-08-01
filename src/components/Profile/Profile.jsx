import s from './Profile.module.css';
import clsx from 'clsx';


export function Profile({
  image,
  name = 'user',
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={clsx(s.card)}>
      <img className={clsx(s.img)}
      src={image} alt="User avatar" />
      <p className={clsx(s.list_name)}>{name}</p>
      <p className={clsx(s.list)}>{tag}</p>
      <p className={clsx(s.list)}>{location}</p>

      <ul className={clsx(s.dates)}>
        <li className={clsx(s.items)}>
          <span>Followers</span> <span className={s.decor}>{followers}</span>{' '}
        </li>
        <li className={clsx(s.items)}>
          <span>Views</span> <span className={s.decor}>{views}</span>{' '}
        </li>
        <li className={clsx(s.items)}>
          <span>Likes</span> <span className={clsx(s.decor)}>{likes}</span>{' '}
        </li>
      </ul>
    </div>
  );
}
