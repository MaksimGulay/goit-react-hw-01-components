import { Conteiner, List, Description, Avatar, Items } from './profile.style';

export const Profile = ({
  users: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Conteiner>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>
      <List>
        <Items>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </Items>
        <Items>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </Items>
        <Items>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </Items>
      </List>
    </Conteiner>
  );
};
