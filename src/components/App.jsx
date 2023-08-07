import { Profile } from './Profile-components/profile';
import { Statistics } from './Statistics-component/statictics';
import userData from '../data/user.json';
import statisticksData from 'data/data.json';
export const App = () => {
  return (
    <>
      <Profile users={userData} />
      <Statistics title="Upload stats" stats={statisticksData} />
    </>
  );
};
