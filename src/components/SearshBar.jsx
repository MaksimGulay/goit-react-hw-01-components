import { LevelFilter } from './LevelFilter';
import { TopicFilter } from './TopicFilter';

export const SearshBar = () => {
  return (
    <div>
      <TopicFilter />
      <LevelFilter />
    </div>
  );
};
