import styled from 'styled-components';

export const List = styled.ul`
  width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding-left: 0px;
  background-color: gray;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding-left: 50px;
  background-color: darkgrey;
  width: 430px;
  border-radius: 10px;
  gap: 20px;
  margin: 10px;
`;

export const FriendImg = styled.img``;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
