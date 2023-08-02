import { QuizeList } from './QuizList';
import quizItems from '../data.json';
import { SearshBar } from './SearshBar';
export const App = () => {
  return (
    <div>
      <SearshBar />
      <QuizeList items={quizItems} />
    </div>
  );
};
