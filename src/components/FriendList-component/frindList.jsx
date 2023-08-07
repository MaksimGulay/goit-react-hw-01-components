import { List, FriendItem, Status, FriendImg } from './friendList-styles';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        const { avatar, name, isOnline } = item;
        return (
          <FriendItem key={item.id}>
            <Status $isOnline={isOnline}></Status>
            <FriendImg src={avatar} alt="User avatar" width="48"></FriendImg>
            <h2>{name}</h2>
          </FriendItem>
        );
      })}
    </List>
  );
};
