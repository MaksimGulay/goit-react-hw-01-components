import styled from 'styled-components';

export const StatsSection = styled.section`
  text-align: center;
  width: 500px;
  height: 150px;
  background-color: gray;
  border-radius: 20px;
  padding-top: 10px;
`;

export const StatsList = styled.ul`
  height: 50px;
  display: flex;
  padding: 0px;
`;

export const StatsItem = styled.li`
  background-color: ${props => props.color};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

export const StatsLabel = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
