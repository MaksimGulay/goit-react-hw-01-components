import { Profile } from './Profile-components/profile';

import userData from '../data/user.json';

export const App = () => {
  return (
    <>
      <Profile users={userData} />
    </>
  );
};
