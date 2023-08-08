import { Conteiner, List, Description, Avatar, Items } from './profile.style';
import PropTypes from 'prop-types';

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

Profile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
