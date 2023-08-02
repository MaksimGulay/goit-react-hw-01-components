import { QuizCard } from './QuizCard';

export const QuizeList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <QuizCard item={item} />
        </li>
      ))}
    </ul>
  );
};
