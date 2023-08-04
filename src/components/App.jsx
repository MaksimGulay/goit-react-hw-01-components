import { QuizeList } from './QuizList';
import quizItems from '../data.json';
import { SearshBar } from './SearshBar';
import { ProfileCard } from './UserProfileCard/Profile';

export const App = () => {
  return (
    <div>
      <ProfileCard />
      <SearshBar />
      <QuizeList items={quizItems} />
    </div>
  );
};
